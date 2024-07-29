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
  const atSignIndex = lineText.lastIndexOf("#");
  return atSignIndex > 0 && lineText[atSignIndex - 1] === "<";
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
        const { title: label, markdownContent: documentation } =
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
