# Change Log


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
