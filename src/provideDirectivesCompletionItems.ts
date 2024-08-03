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
import { ALL_DIRECTIVES } from "./constants";
import { generateDirectiveDisplayInfo } from "./utils";

function isDirectiveTagPrefix(lineText: string) {
  const poundSignIndex = lineText.lastIndexOf("#");

  if (poundSignIndex <= 0) {
    return false;
  }

  return (
    lineText[poundSignIndex - 1] === "<" &&
    !/\s/.test(lineText.slice(poundSignIndex))
  );
}

export default function provideDirectivesCompletionItems(
  document: TextDocument,
  position: Position,
  token: CancellationToken,
  context: CompletionContext
): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
  const line = document.lineAt(position);
  const lineText = line.text.substring(0, position.character);

  // complete all FreeMarker directives
  if (isDirectiveTagPrefix(lineText)) {
    return Promise.resolve(
      ALL_DIRECTIVES.map((info) => {
        const { label, markdownContent: documentation } =
          generateDirectiveDisplayInfo(info);
        const completion = new CompletionItem(
          label,
          CompletionItemKind.Property
        );
        completion.documentation = documentation;

        return completion;
      })
    );
  }

  return Promise.resolve(null);
}
