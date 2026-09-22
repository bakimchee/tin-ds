// Runs every check over the docs. Exits non-zero when something is wrong, so CI can use it.
import emmet from './check-emmet.mjs';
import props from './check-props.mjs';
import levels from './check-levels.mjs';

let failed = 0;
for (const check of [emmet, props, levels]) {
  if (check.problems.length) {
    failed += check.problems.length;
    console.log(`✗ ${check.name}: ${check.problems.length} problem(s)`);
    for (const p of check.problems) console.log(`    ${p}`);
  } else {
    console.log(`✓ ${check.name}: ${check.ok}`);
  }
}
process.exit(failed ? 1 : 0);
