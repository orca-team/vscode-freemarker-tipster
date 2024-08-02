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

function isStartsWithMacro(lineText: string) {
  const atSignIndex = lineText.lastIndexOf("@");

  if (atSignIndex <= 0) {
    return false;
  }

  return (
    lineText[atSignIndex - 1] === "<" && !/\s/.test(lineText.slice(atSignIndex))
  );
}

export default function provideMacroCompletionItems(
  document: TextDocument,
  position: Position,
  token: CancellationToken,
  context: CompletionContext
): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
  const line = document.lineAt(position);
  const lineText = line.text.substring(0, position.character);

  // complete all macro variables
  if (isStartsWithMacro(lineText)) {
    // letters, digits, underlines, dollar, at sign, first char cannot be digit
    const allMacros = document
      .getText()
      .match(/<#macro\s+([a-zA-Z_$@][a-zA-Z0-9_$@]*)(?:\s+|>)/g);
    const allMacrosVariables = (
      allMacros?.map((section) => {
        const res = section.match(/\s+([a-zA-Z_$@][a-zA-Z0-9_$@]*)\s*/);
        return res === null ? null : res[1];
      }) ?? []
    ).filter((v) => v !== null);

    return Promise.resolve(
      allMacrosVariables.map(
        (macroName) =>
          new CompletionItem(macroName, CompletionItemKind.Variable)
      )
    );
  }

  return Promise.resolve(null);
}
