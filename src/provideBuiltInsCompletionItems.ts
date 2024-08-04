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
import { matchVariableReg } from "./regex";
import { ALL_BUILT_INS } from "./constants";

function isBuiltInPrefix(lineText: string) {
  const markSignIndex = lineText.lastIndexOf("?");

  if (markSignIndex <= 0) {
    return false;
  }

  const prefixText = lineText.substring(0, markSignIndex);
  const variableName = prefixText.match(matchVariableReg)?.[2];

  return !!variableName;
}

export default function provideBuiltInsCompletionItems(
  document: TextDocument,
  position: Position,
  token: CancellationToken,
  context: CompletionContext
): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
  const line = document.lineAt(position);
  const lineText = line.text.substring(0, position.character);

  if (isBuiltInPrefix(lineText)) {
    const builtInsCompletionItems = ALL_BUILT_INS.map(
      ({ actType, description: actTypeDesc, builtIns }) => {
        return builtIns.map(
          ({ name, deprecated, ref, description: builtInDesc }) => {
            const completion = new CompletionItem(
              {
                label: name,
                detail: ` [${actType}]${deprecated ? " (deprecated)" : ""}`,
                description: builtInDesc,
              },
              CompletionItemKind.Function
            );
            const referenceText = Array.isArray(ref)
              ? ref
                  .map(
                    ({ condition, currentRef }) =>
                      `If you use it in ${condition}, see this [reference](${currentRef}).`
                  )
                  .join("\n\n")
              : `[FreeMarker Reference](${ref})`;
            completion.documentation = new MarkdownString(
              `***${name}${
                deprecated ? " (deprecated)" : ""
              }***\n\n${actTypeDesc}\n\n${referenceText}`
            );

            return completion;
          }
        );
      }
    );

    return Promise.resolve(builtInsCompletionItems.flat(1));
  }

  return Promise.resolve(null);
}
