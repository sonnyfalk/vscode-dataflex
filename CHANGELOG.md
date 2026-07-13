# Change Log

## 0.8.4
#### New
- Support for re-indexing externally modified files, e.g. from `git pull`.
- Updating the index from renamed, deleted, and newly created files.
- Support for indexing package references and non-package manager style libraries

#### Fixed
- Fixed a problem with code completion and goto definition for `Deferred_View`.
- Fixed a problem with saving the index when the `IdeSrc` folder is missing.

## 0.8.3
#### New
- Code completion for overriding method after `Procedure` or `Function`.
- Now reporting indexing progress when opening a workspace.
- Goto definition and code completion for parameter types, variable, and property declarations.
- Goto definition and hover support for `table` references

#### Fixed
- Fixed a bug where global procedures and functions didn't parse out correctly, missing the first parameter type.

## 0.8.2
#### New
- Goto definition and code completion for Use statements.
- Enhanced `hover` support with brief documentation slice based on `Description` metadata tag.

#### Fixed
- Fixed a bug where the LSP server would hang, displaying infinite "processing..." message in the VSCode UI.

## 0.8.1

- Initial release
- Syntax highlighting with distinct colors for properties, methods, classes, constants etc.
- Code completion for methods, classes, variables, tables and columns, struct members etc.
- Goto definition and peek definition for methods, classes, objects, struct types etc.
- Code lens indicating method overrides.
- Method signature and symbol information on mouse hover, and parameter information when typing a method call. 
- Document symbols for navigation within the document.
- Workspace symbols available for navigation between files across the workspace.
