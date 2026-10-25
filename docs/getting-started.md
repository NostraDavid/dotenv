# Getting started

## Use the extension

1. Download the VSIX from [the releases page](https://github.com/NostraDavid/dotenv/releases).
2. Open VS Code and select the Extensions view.
3. Open the three-dot menu, select **Install from VSIX**, and select the downloaded file.
4. Disable the original DotENV extension and open a `.env` file. The language shown in the status bar should be Environment Variables.

## Make your first change

Install Nix, clone the repository, run `nix develop`, and run `just setup`. Use `just` to list commands. Edit a small file, run `just format` and `just check`, then use F5 to try the extension. `just package` creates a local VSIX; it does not upload it.
