// Expands every ```emmet block in the design system. Usage: node check-emmet.mjs [file-filter] [--print]
import expand from 'emmet';
import fs from 'node:fs';
import path from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const filter = process.argv[2] && !process.argv[2].startsWith('--') ? process.argv[2] : '';
const print = process.argv.includes('--print');
const dirs = ['.', 'components', 'patterns'];
const known = new Set();
for (const d of dirs) for (const f of fs.readdirSync(path.join(root, d)).filter(f => f.endsWith('.md'))) {
  known.add(f.replace('.md', '').split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(''));
}
const problems = [];
for (const d of dirs) for (const f of fs.readdirSync(path.join(root, d)).filter(f => f.endsWith('.md'))) {
  const file = path.join(d, f);
  if (filter && !file.includes(filter)) continue;
  const src = fs.readFileSync(path.join(root, file), 'utf8');
  const blocks = [...src.matchAll(/```emmet\n([\s\S]*?)\n```/g)].map(m => m[1]);
  for (const b of blocks) {
    try {
      const html = expand(b, { options: { 'output.format': print } });
      for (const tag of html.matchAll(/<([A-Z][A-Za-z]+)/g)) {
        if (!known.has(tag[1])) { problems.push(`${file}: unknown component <${tag[1]}>`); }
      }
      if (print) console.log(`--- ${file}\n${html}\n`);
    } catch (e) {
      problems.push(`${file}: ${e.message}\n  ${b.slice(0, 120)}`);
    }
  }
  // markdown links resolve
  for (const m of src.matchAll(/\]\(([^)#]+\.(?:md|css))\)/g)) {
    if (!fs.existsSync(path.join(root, d, m[1]))) { problems.push(`${file}: broken link ${m[1]}`); }
  }
}
export default { name: 'emmet and links', problems, ok: 'every Emmet block expands, every component is known, every link resolves' };
