import {
  CancellationToken,
  CompletionContext,
  CompletionItem,
  CompletionItemKind,
  CompletionList,
  Position,
  ProviderResult,
  Range,
  TextDocument,
} from "vscode";
import { variablePattern } from "./patterns";
import { getFragmentDeclarationReg } from "./regex";
import { isValidValue } from "./utils";

const assignMatchReg = new RegExp(`<#assign\\s+(${variablePattern})\\s*=`);
const functionMatchReg = new RegExp(`<#function\\s+(${variablePattern})\\s*`);
const localMatchReg = new RegExp(`<#local\\s+(${variablePattern})\\s*=`, "g");
const typingVarReg = new RegExp(
  `((?:<#if|<#elseif|<#list|<#switch)\\s+|(?:\\$\\{|=|\\(|\\[|,|&&|\\|\\|)\\s*)(${variablePattern})$`
);

function isTypingVariable(lineText: string) {
  return typingVarReg.test(lineText);
}

function collectGlobalVariables(
  document: TextDocument,
  match: (lineText: string) => string | undefined
) {
  const lineCount = document.lineCount;
  let line = 0;
  const result: string[] = [];

  while (line < lineCount) {
    const lineText = document.lineAt(line).text;
    const value = match(lineText);
    if (value && !result.includes(value)) {
      result.push(value);
    }
    line++;
  }

  return result;
}

type FragmentPosType = number | undefined;

function isValidFragmentPos(row: FragmentPosType, col: FragmentPosType) {
  return isValidValue(row) && isValidValue(col);
}

function getClosestFragmentRange(
  fragmentName: "macro" | "function",
  document: TextDocument,
  position: Position
) {
  const lineCount = document.lineCount;
  const currentLine = position.line;
  const closeFragmentTag = `</#${fragmentName}>`;
  const fragmentDeclarationReg = getFragmentDeclarationReg(fragmentName);
  let upLine = currentLine;
  let downLine = currentLine;
  let startFragmentRow: FragmentPosType;
  let startFragmentCol: FragmentPosType;
  let endFragmentRow: FragmentPosType;
  let endFragmentCol: FragmentPosType;

  while (upLine >= 0) {
    let currentLineText =
      upLine === currentLine
        ? document.getText(new Range(new Position(currentLine, 0), position))
        : document.lineAt(upLine).text;
    let pointer = currentLineText.search(fragmentDeclarationReg);
    const closeFragmentIndex = currentLineText.lastIndexOf(closeFragmentTag);
    if (closeFragmentIndex >= 0) {
      currentLineText = currentLineText.substring(
        closeFragmentIndex + closeFragmentTag.length
      );
      pointer = currentLineText.search(fragmentDeclarationReg);
    }
    const searchLength = currentLineText.length;
    while (pointer >= 0 && pointer < searchLength) {
      startFragmentRow = upLine;
      startFragmentCol = pointer;
      const matchedFragment = currentLineText.match(
        fragmentDeclarationReg
      )?.[0];
      const matchedFragmentLength = isValidValue<string>(matchedFragment)
        ? matchedFragment.substring(0, matchedFragment.indexOf(">") + 1).length
        : null;
      if (matchedFragmentLength === null) {
        break;
      }
      pointer = currentLineText
        .substring(pointer + matchedFragmentLength)
        .search(fragmentDeclarationReg);
    }

    // stop if found the end fragment before finding the start fragment
    if (
      closeFragmentIndex >= 0 &&
      !isValidFragmentPos(startFragmentRow, startFragmentCol)
    ) {
      break;
    }

    if (isValidFragmentPos(startFragmentRow, startFragmentCol)) {
      break;
    }

    upLine--;
  }

  if (!isValidFragmentPos(startFragmentRow, startFragmentCol)) {
    return null;
  }

  while (downLine < lineCount) {
    let currentLineText =
      downLine === currentLine
        ? document.lineAt(currentLine).text.substring(position.character)
        : document.lineAt(downLine).text;
    const startFragmentIndex = currentLineText.search(fragmentDeclarationReg);
    const closeFragmentIndex = currentLineText.indexOf(closeFragmentTag);
    if (closeFragmentIndex >= 0) {
      // stop if found the start fragment before finding the end fragment
      if (startFragmentIndex >= 0 && startFragmentIndex < closeFragmentIndex) {
        break;
      }
      endFragmentRow = downLine;
      endFragmentCol = closeFragmentIndex + closeFragmentTag.length;
      break;
    }

    downLine++;
  }

  if (!isValidFragmentPos(endFragmentRow, endFragmentCol)) {
    return null;
  }

  return new Range(
    new Position(startFragmentRow!, startFragmentCol!),
    new Position(endFragmentRow!, endFragmentCol!)
  );
}

function collectLocalVariablesByRange(document: TextDocument, range: Range) {
  const result: string[] = [];
  const rangeText = document.getText(range);
  const matches = rangeText.matchAll(localMatchReg);
  for (const match of matches) {
    const value = match?.[1];
    if (value && !result.includes(value)) {
      result.push(value);
    }
  }

  return result;
}

function collectLocalVariables(document: TextDocument, position: Position) {
  const macroRange = getClosestFragmentRange("macro", document, position);
  if (macroRange) {
    return collectLocalVariablesByRange(document, macroRange);
  }

  const functionRange = getClosestFragmentRange("function", document, position);
  if (functionRange) {
    return collectLocalVariablesByRange(document, functionRange);
  }

  return [];
}

export default function provideVariableCompletionItems(
  document: TextDocument,
  position: Position,
  token: CancellationToken,
  context: CompletionContext
): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
  const line = document.lineAt(position);
  const lineText = line.text.substring(0, position.character);

  if (isTypingVariable(lineText)) {
    const assignValues = collectGlobalVariables(
      document,
      (text) => text.match(assignMatchReg)?.[1]
    );
    const functionValues = collectGlobalVariables(
      document,
      (text) => text.match(functionMatchReg)?.[1]
    );
    const currentLocalValues = collectLocalVariables(document, position);

    const assignCompletions = assignValues.map(
      (name) =>
        new CompletionItem(
          { label: name, detail: " (assign)" },
          CompletionItemKind.Variable
        )
    );
    const functionCompletions = functionValues.map(
      (name) => new CompletionItem(name, CompletionItemKind.Function)
    );
    const localCompletions = currentLocalValues.map(
      (name) =>
        new CompletionItem(
          { label: name, detail: " (local)" },
          CompletionItemKind.Variable
        )
    );

    return Promise.resolve([
      ...assignCompletions,
      ...localCompletions,
      ...functionCompletions,
    ]);
  }

  return Promise.resolve(null);
}
