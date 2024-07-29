/**
 * Defines the type for different reference conditions.
 */
export type DifferentReference = {
  /** condition */
  condition: string;

  /** The reference to use when the condition is met */
  currentRef: string;
};

/**
 * Defines the structure of directive information.
 */
export type DirectiveInfo = {
  /** The name of the directive */
  name: string;

  /** The target that the directive refers to, can be a string or an array of different reference condition */
  ref: string | DifferentReference[];

  /** Whether the directive is deprecated */
  deprecated?: boolean;
};
