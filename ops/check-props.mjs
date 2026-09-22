// Every attribute on a PascalCase tag must be a prop in that component's table, or a native prop from conventions.md.
import fs from 'node:fs'; import path from 'node:path';
const root = new URL('..', import.meta.url).pathname, dirs = ['components', 'patterns'];
const native = new Set(['href', 'type', 'name', 'value', 'id', 'src', 'alt', 'min', 'max', 'placeholder', 'autocomplete']);
const props = {}, files = [], src0 = {};
for (const d of dirs) for (const f of fs.readdirSync(path.join(root, d))) {
  const name = f.replace('.md', '').split('-').map(w => w[0].toUpperCase() + w.slice(1)).join('');
  const src = fs.readFileSync(path.join(root, d, f), 'utf8'); files.push([`${d}/${f}`, src]);
  src0[name] = src;
  props[name] = new Set([...src.matchAll(/^\| (\w+) \|/gm)].map(m => m[1]).filter(p => p !== 'Prop'));
}
const problems = new Set();
for (const [file, src] of files) for (const block of src.matchAll(/```emmet\n([\s\S]*?)\n```/g)) {
  for (const m of block[1].matchAll(/([A-Z][A-Za-z]+)(#[\w-]+)?(\[((?:[^\]"]|"[^"]*")*)\])?/g)) {
    const comp = m[1]; if (!props[comp]) continue;
    const attrs = (m[4] || '').match(/[\w-]+(?==|\s|$)/g) || [];
    const clean = (m[4] || '').replace(/"[^"]*"/g, '""');
    for (const a of clean.split(/\s+/).map(t => t.split('=')[0]).filter(Boolean)) {
      const base = a.replace(/(Sm|Md|Lg|Xl|2xl)$/, '');
      const responsive = base !== a && props[comp].has(base) && new RegExp('^\\| ' + base + ' \\|.*Responsive', 'm').test(src0[comp]);
      if (!props[comp].has(a) && !native.has(a) && !responsive) problems.add(`${file}: <${comp}> uses "${a}"`);
    }
  }
}
export default { name: 'props', problems: [...problems], ok: 'every prop used is documented' };
