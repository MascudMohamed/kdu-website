#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const emojiPattern = /[\u{1F300}-\u{1FAFF}\u2600-\u27BF\uFE0F\u200D]/u;

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(js|jsx)$/.test(entry.name)) files.push(full);
  }
  return files;
}

let changed = 0;
for (const file of walk(root)) {
  let text = fs.readFileSync(file, 'utf8');
  const original = text;

  text = text.replace(/,?\s*icon:\s*['"][^'"\n]*['"]/g, (match) => (emojiPattern.test(match) ? '' : match));
  text = text.replace(/^\s*icon:\s*['"][^'"\n]*['"],?\s*\n/gm, (line) => (emojiPattern.test(line) ? '' : line));
  text = text.replace(/\/\/[^\n]*[\u{1F300}-\u{1FAFF}][^\n]*/gu, (line) => line.replace(/[\u{1F300}-\u{1FAFF}\uFE0F\u200D]/gu, '').replace(/\/\/\s*$/, '//'));

  if (text !== original) {
    fs.writeFileSync(file, text);
    changed++;
    console.log('Updated:', path.relative(root, file));
  }
}

console.log(`Done. ${changed} file(s) updated.`);
