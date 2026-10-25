# 0001: Keep dotenv independently releasable

Status: Accepted

## Context

The user requested separate NostraDavid extensions and repositories, with the Todo Tree development workflow and nixcfg integration.

## Decision

Keep this extension in its own repository and VSIX, with a stable NostraDavid publisher identity and version 1.0.0. Preserve inherited language/configuration identifiers and original copyright notices where present. Use Node 24, a pinned four-platform Nix shell, Just, dprint, Oxlint, and prek.

## Consequences

Each product can receive small releases independently. Nixcfg installs the exact release artifact and replaces a legacy extension only after successful installation. Dotplan syntax remains a separate follow-up requirement.
