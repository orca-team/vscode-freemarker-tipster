# Freemarker Tipster

`freemarker tipster` is an extension designed to enhance your experience with `ftl` files.

It allows you to quickly navigate to the definitions of macro and function variables you've written. Additionally, it provides completion tips while you are writing `ftl` files.

## Features

### Go to definition (`macro` and `function`)

> Tip: Currently, only macros and functions defined in the same file are supported. Additionally, their names can contain letters, digits, underscores, dollar signs, and at signs, but the first character cannot be a digit.

![go to definition](assets/images/goToDefinition.gif)

### The completion of assign/local variables and functions

If you start typing a valid variable name, you get completion suggestions:

![variables completions](assets/images/variablesCompletion.png)

### The completion of macro variables

If you start typing with `<@`, you can get completion suggestions for the current macro variables.

![macro completion](assets/images/macroCompletion.png)

### The completion of freemarker directives

If you start typing with `<#`, you can get completion suggestions for the freemarker directives.

![directives completion](assets/images/directivesCompletion.png)

### The completion of built-ins

If you type with `?` after a valid variable name, you can get completion suggestions for the built-ins.

![built-ins completion](assets/images//builtInsCompletion.png)
