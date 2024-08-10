# Change Log

All notable changes to the "vscode-freemarker-tipster" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]

### Added

- Provide local variable completions items.

### Fixed

- Missing global variable completion items when multiple variables are defined on the same line.

## [1.2.1] - 2024-08-08

### Changed

- Variable completion items for array items.

## [1.2.0] - 2024-08-07

### Added

- Provide function and assign variables completions items.

## [1.1.0] - 2024-08-04

### Added

- Provide completions items form all `FreeMarker` built-ins.

### Fixed

- Provides incorrect completions after fully typing macros and directives.
- Incorrect completions for deprecated directives.

## [1.0.0] - 2024-07-30

### Added

- Provide code navigation support for `macro` and `function` in `.ftl` files.
- Provide existed `macro` completion items.
- Provide completions items for all `FreeMarker` directives.
- Provide hover tips for all `FreeMarker` directives.

## [0.0.1] - 2024-07-30

Prepare for the first release.
