import assert from 'node:assert/strict';
import fs from 'node:fs';
const manifest = JSON.parse(fs.readFileSync('package.json', 'utf8'));
for (const grammar of manifest.contributes.grammars) {
  const source = JSON.parse(fs.readFileSync(grammar.path, 'utf8'));
  assert.equal(source.scopeName, grammar.scopeName);
  assert.ok(Array.isArray(source.patterns), 'A TextMate grammar must declare patterns.');
  assert.ok(manifest.contributes.languages.some((language) => language.id === grammar.language));
}
for (const language of manifest.contributes.languages) {
  JSON.parse(fs.readFileSync(language.configuration, 'utf8'));
}
console.log('Language manifests and grammars are valid.');
