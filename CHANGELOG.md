# Changelog

## [Unreleased]

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
