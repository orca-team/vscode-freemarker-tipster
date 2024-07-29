import {
  CancellationToken,
  Hover,
  Position,
  ProviderResult,
  TextDocument,
} from "vscode";
import { ALL_DIRECTIVES } from "./constants";
import { generateDirectiveDisplayInfo } from "./utils";

export default function provideDirectivesHover(
  document: TextDocument,
  position: Position,
  token: CancellationToken
): ProviderResult<Hover> {
  const textRange = document.getWordRangeAtPosition(position, /<#[a-z]+/);
  const text = document.getText(textRange);

  if (text.startsWith("<#")) {
    const directiveName = text.substring(2);
    const directiveInfo = ALL_DIRECTIVES.find(
      (it) => it.name === directiveName
    );
    if (directiveInfo) {
      const { markdownContent } = generateDirectiveDisplayInfo(directiveInfo);
      return Promise.resolve(new Hover(markdownContent));
    }
  }

  return Promise.resolve(null);
}
