import {
  CancellationToken,
  CompletionContext,
  CompletionItem,
  CompletionItemKind,
  CompletionList,
  Position,
  ProviderResult,
  TextDocument,
} from "vscode";
import { variablePattern } from "./patterns";

const assignMatchReg = new RegExp(`<#assign\\s+(${variablePattern})\\s*=`);
const functionMatchReg = new RegExp(`<#function\\s+(${variablePattern})\\s*`);
const typingVarReg = new RegExp(
  `((?:<#if|<#elseif|<#list|<#switch)\\s+|(?:\\$\\{|=|\\(|,|&&|\\|\\|)\\s*)(${variablePattern})$`
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

// TODO: collect local variables
function collectLocalVariables(document: TextDocument, position: Position) {}

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

    return Promise.resolve([...assignCompletions, ...functionCompletions]);
  }

  return Promise.resolve(null);
}
