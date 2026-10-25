# Changelog

## [Unreleased]

## [1.0.3] - 2026-10-25

- Highlight constant words only when they form a complete unquoted value, preserving ordinary words such as trueish and nullish.
- Keep quoted strings and text-valued environment semantics unchanged.

## [1.0.2] - 2026-10-25

- End unfinished interpolation at its surrounding quote or line boundary, so later declarations and comments recover correctly.
- Preserve valid multiline strings, escaped quotes and literal apostrophes in unquoted values.
- Add regression tests that carry tokenizer state across lines.

## [1.0.1] - 2026-10-25

- Recognize the declaration key and its first equals sign in a dedicated value context; preserve URL-query text and base64padding.
- Preserve export, arbitrary assignment spacing, dotted/hyphenated keys and existing interpolation rules. The anchored declaration/value approach follows upstream PR #8 by IronGeek, adapted to the current JSON grammar.
- Document the supported syntax and built-in VS Code grammar coexistence.

- Add a before-and-after image of four highlighting fixes, rendered from both real grammars with the same VS Code theme.

## [1.0.0] - 2026-10-25

- Start the maintained NostraDavid fork with the existing `dotenv` language and `source.env` scopes.
- Add regression-tested assignment, interpolation, and comment highlighting.
- Add reproducible development tools, beginner documentation, CI, and small-release packaging.

Earlier releases are archived in [the upstream changelog](docs/upstream-CHANGELOG.md).
