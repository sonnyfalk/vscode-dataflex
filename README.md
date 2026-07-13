# DataFlex Language Server README
Language server for the DataFlex programming language.

See [dataflex-lsp GitHub repo](https://github.com/sonnyfalk/dataflex-lsp/) for more details and how to install.

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
- Functions defined via `External_Function` and `Register_Function` not yet listed in code completion or goto definition.
- Packages not yet automatically fetched/updated when opening the workspace, workaround by compiling the project or running `df-cli`.

## Release Notes
