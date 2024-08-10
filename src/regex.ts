import { variablePattern } from "./patterns";

export const variableReg = new RegExp(variablePattern);

export const matchVariableReg = new RegExp(`(\\s+|$\{)(${variablePattern})$`);

export function getFragmentDeclarationReg(name: string) {
  return new RegExp(`<#${name}\\s+(${variablePattern}).*>`);
}
