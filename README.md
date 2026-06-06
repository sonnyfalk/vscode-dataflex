# DataFlex Language Server README
Language server for the DataFlex programming language.

See [dataflex-lsp GitHub repo](https://github.com/sonnyfalk/dataflex-lsp/) for more details.

## Features
- Syntax highlighting with distinct colors for properties, methods, classes, constants etc.
- Code completion for methods, classes, variables, tables and columns, struct members etc.
- Goto definition and peek definition for methods, classes, objects, struct types etc.
- Code lens indicating method overrides.
- Method signature and symbol information on mouse hover, and parameter information when typing a method call. 
- Document symbols for navigation within the document.
- Workspace symbols available for navigation between files across the workspace.

## Requirements

## Extension Settings

## Current limitations and known Issues

- Fuzzy matching for workspace symbols not implemented yet, only strict case-sensitive prefix matching.
- Non-package manager style libraries not indexed yet. Only indexing workspace folder, including package manager-style libraries in DfPkg.
- Goto definition and code completion for variable and parameter types not implemented yet.
- Non-editor file changes, e.g. `git pull` not re-indexed automatically yet.

## Release Notes
