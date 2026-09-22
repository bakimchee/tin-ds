// conventions.md: a component may only use components. A container component may hold a
// pattern in its children, so those are skipped.
import fs from 'node:fs';
import path from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const containers = new Set(['carousel.md', 'dialog.md', 'accordion.md']);
const pascal = slug => slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join('');
const patterns = new Set(fs.readdirSync(path.join(root, 'patterns')).map(f => pascal(f.replace('.md', ''))));
const problems = [];

for (const f of fs.readdirSync(path.join(root, 'components')).sort()) {
  if (containers.has(f)) continue;
  const src = fs.readFileSync(path.join(root, 'components', f), 'utf8');
  const tags = new Set();
  for (const block of src.matchAll(/```emmet\n([\s\S]*?)\n```/g)) {
    // Text and quoted values hold prose, not component names.
    const structure = block[1].replace(/\{[^{}]*\}|"[^"]*"/g, '');
    for (const m of structure.matchAll(/(?<![\w.#-])([A-Z][A-Za-z]+)(?=[[#.{>+^*\s]|$)/g)) tags.add(m[1]);
  }
  const uses = src.split('\n').filter(l => l.startsWith('- Uses ')).join(' ');
  for (const m of uses.matchAll(/\(\.\.\/patterns\/([\w-]+)\.md\)/g)) tags.add(pascal(m[1]));
  for (const tag of [...tags].filter(t => patterns.has(t)).sort()) {
    problems.push(`components/${f}: uses pattern ${tag}`);
  }
}

export default { name: 'levels', problems, ok: 'no component uses a pattern' };
