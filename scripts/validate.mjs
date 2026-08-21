import { readFile, readdir, stat } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';

const root = resolve(new URL('..', import.meta.url).pathname.replace(/^\/(?:[A-Za-z]:)/, value => value.slice(1)));
const htmlFiles = (await readdir(root)).filter(file => extname(file) === '.html');
const missing = [];
const forbidden = [];

for (const file of htmlFiles) {
  const source = await readFile(join(root, file), 'utf8');

  for (const match of source.matchAll(/(?:src|href)=["']([^"']+)["']/g)) {
    const reference = match[1];
    if (/^(?:https?:|data:|#|javascript:)/.test(reference)) continue;
    try {
      await stat(join(root, reference));
    } catch {
      missing.push(`${file}: ${reference}`);
    }
  }

  const visibleSource = source
    .replace(/<!--[^]*?-->/g, '')
    .replace(/\/\*[^]*?\*\//g, '')
    .replace(/\/\/[^\r\n]*/g, '');
  if (/[\u3400-\u9fff]/u.test(visibleSource)) forbidden.push(`${file}: visible CJK text detected`);
  if (/\.(?:mp3|mp4|wav|ogg)(?:["'?]|$)/i.test(source)) forbidden.push(`${file}: external media reference detected`);
}

if (missing.length || forbidden.length) {
  console.error([...missing, ...forbidden].join('\n'));
  process.exit(1);
}

console.log(`Validated ${htmlFiles.length} HTML files: routes resolve, UI is English, and no audio/video references remain.`);
