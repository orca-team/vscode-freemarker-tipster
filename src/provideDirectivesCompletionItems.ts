import {
  CancellationToken,
  CompletionContext,
  CompletionItem,
  CompletionItemKind,
  CompletionList,
  MarkdownString,
  Position,
  ProviderResult,
  TextDocument,
} from "vscode";
import { ALL_DIRECTIVES } from "./constants";

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
      ALL_DIRECTIVES.map(({ name, ref, deprecated }) => {
        const label = deprecated ? `${name} (deprecated)` : name;
        const referenceText = Array.isArray(ref)
          ? ref
              .map(
                ({ condition, currentRef }) =>
                  `If you ${condition}, see this [reference](${currentRef}).`
              )
              .join("\n\n")
          : `[FreeMarker Reference](${ref})`;
        const documentation = new MarkdownString(
          `***${label}***\n\n${referenceText}`
        );
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
