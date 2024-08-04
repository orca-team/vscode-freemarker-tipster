import { variablePattern } from "./patterns";

export const variableReg = new RegExp(variablePattern);

export const matchVariableReg = new RegExp(`(\\s+|$\{)(${variablePattern})$`);
