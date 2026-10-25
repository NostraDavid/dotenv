# DotENV by NostraDavid

Syntax highlighting for environment files, with tested quote, comment, assignment, and interpolation rules.

A maintained fork of [mikestead/vscode-dotenv](https://github.com/mikestead/vscode-dotenv). Original authorship and license notices are preserved. This fork starts at **1.0.0**.

## Install

Download `nostradavid-dotenv-1.0.0.vsix` from [GitHub Releases](https://github.com/NostraDavid/dotenv/releases). In VS Code, open Extensions, choose **Install from VSIX**, and select that file.

Disable `mikestead.dotenv` before enabling this fork, since both register the `dotenv` language. Existing `[dotenv]` settings continue to work.

See [the beginner guide](docs/getting-started.md), [contribution guide](CONTRIBUTING.md), [changelog](CHANGELOG.md), and [release guide](docs/releasing.md).

## Development

Install Nix, enter `nix develop`, then run `just setup` and `just check`. Run `just package` to build a VSIX. The flake supports x86_64/aarch64 Linux and macOS, including Intel macOS through the pinned Nixpkgs revision.

Dependency upgrades are explicit: `just lock-upgrade` and `just update-nix`. Normal setup uses the committed locks.
