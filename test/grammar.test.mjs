import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { test } from 'node:test';
import oniguruma from 'vscode-oniguruma';
import textmate from 'vscode-textmate';

const require = createRequire(import.meta.url);
const wasm = fs.readFileSync(require.resolve('vscode-oniguruma/release/onig.wasm'));
await oniguruma.loadWASM(wasm.buffer.slice(wasm.byteOffset, wasm.byteOffset + wasm.byteLength));
const registry = new textmate.Registry({
  onigLib: Promise.resolve({
    createOnigScanner: (patterns) => new oniguruma.OnigScanner(patterns),
    createOnigString: (text) => new oniguruma.OnigString(text),
  }),
  loadGrammar: async (scope) =>
    scope === 'source.env'
      ? JSON.parse(fs.readFileSync(new URL('../syntaxes/env.tmLanguage.json', import.meta.url), 'utf8'))
      : null,
});
const grammar = await registry.loadGrammar('source.env');

function scopesAt(line, offset) {
  return grammar.tokenizeLine(line).tokens.find((token) => token.startIndex <= offset && token.endIndex > offset)
    ?.scopes ?? [];
}

test('hashes inside quoted values are strings, not comments', () => {
  for (const quote of ['"', "'"]) {
    const line = `TOKEN=${quote}a#b${quote} # actual comment`;
    assert.ok(scopesAt(line, line.indexOf('#')).some((scope) => scope.startsWith('string.quoted.')));
    assert.ok(scopesAt(line, line.lastIndexOf('#')).includes('comment.line.number-sign.env'));
  }
});

test('assignment allows several spaces around the equals sign', () => {
  const line = '  API_KEY    =    value';
  assert.ok(scopesAt(line, line.indexOf('API_KEY')).includes('variable.other.env'));
  assert.ok(scopesAt(line, line.indexOf('=')).includes('keyword.operator.assignment.env'));
});

test('export is a keyword only before an assignment', () => {
  const line = 'COMMAND=exporter';
  assert.ok(!scopesAt(line, line.indexOf('export')).includes('keyword.other.env'));
  assert.ok(scopesAt('export KEY=value', 1).includes('keyword.other.env'));
});

test('unquoted references receive variable highlighting', () => {
  const line = 'VALUE=${HOME}/$USER';
  assert.ok(scopesAt(line, line.indexOf('HOME')).includes('variable.other.env'));
  assert.ok(scopesAt(line, line.indexOf('USER')).includes('variable.other.env'));
});

test('plain braces in quoted text are not interpolation', () => {
  const line = 'VALUE="{literal}"';
  assert.ok(!scopesAt(line, line.indexOf('literal')).includes('variable.other.env'));
});

test('single-quoted references remain literal strings', () => {
  const line = "VALUE='${HOME}'";
  assert.ok(scopesAt(line, line.indexOf('HOME')).includes('string.quoted.single.env'));
  assert.ok(!scopesAt(line, line.indexOf('HOME')).includes('variable.other.env'));
});
