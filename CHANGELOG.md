# Change Log

## 0.8.8

#### Fixed
- Fixed an issue when opening a folder with no .sws file, which would incorrectly index everything from the parent folder.

## 0.8.7

#### Fixed
- Fixed an issue with occasional hangs due to deadlock accessing the index. Often seen as non-responsive code completion etc.
- Fixed an issue with auto-close scope initiated on last line of file.
- Fixed a parsing issue with metadata tags between struct members. - Contributed by @MuhsinIniteamBE (https://github.com/sonnyfalk/tree-sitter-dataflex/pull/1)
- Index files with uppercase or mixed-case extensions. - Contributed by @MuhsinIniteamBE (https://github.com/sonnyfalk/dataflex-lsp/pull/4)
- Match workspace symbol queries case-insensitively. - Contributed by @MuhsinIniteamBE (https://github.com/sonnyfalk/dataflex-lsp/pull/6)
- Match the .sws workspace file extension case-insensitively, and accept object based json project entries. Contributed by @MuhsinIniteamBE (https://github.com/sonnyfalk/dataflex-lsp/pull/5)
- Fixed an issue with syntax highlighting after Danish letters are used. (https://github.com/sonnyfalk/dataflex-lsp/issues/7)

## 0.8.6
#### New
- Now runs `df-cli config` to fetch package dependencies when opening workspace. It searches for df-cli in the path, followed by installed DataFlex versions. On macOS it currently only looks in the path.
- Fetches project specific makepath and toolchain if `df-cli` supports `--json` output flag.
- Code completion ranking, sorting the code completion list with the following order:
    - Prioritizing local variables and relevant enum values matching associated `EnumList` meta tag.
    - Prioritizing likely commands based on context, Get, Set, Send, Move etc.
    - Prioritizing object references with local objects in the same file first, then other top level objects, followed by all other objects.

## 0.8.5
#### New
- Support for methods and properties with embedded dot, e.g. `Procedure Private.Find_Records`. This includes indexing, syntax highlighting, goto definition, and code completion.

#### Fixed
- Fixed a problem with parsing/indexing classes with incorrectly terminated `For` loop, by relaxing the rules to allow for `End` in addition to `Loop`.
- Fixed a problem with parsing `Get` statement result/destination variable, not properly handling array / struct member access.
- Fixed minor parsing issues with negative number literals, `Define` declarations using icode arguments, metadata tags using `+=`, `#ifdef` directives, unary `&`, etc.

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
