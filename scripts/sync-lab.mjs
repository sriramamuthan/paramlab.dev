// Copies simulation code from ../postmortem-lab so site demos run exactly the code the lab's tests check.
// Run after changing the lab: node scripts/sync-lab.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const LAB = new URL('../../postmortem-lab/', import.meta.url);
const OUT = new URL('../src/lab/', import.meta.url);
const FILES = {
  'numeric.ts': 'packages/toolkit/src/numeric.ts',
  'redundancy.ts': 'packages/toolkit/src/redundancy.ts',
  'units.ts': 'packages/toolkit/src/units.ts',
  'ariane-5.ts': 'incidents/01-ariane-5/src/flight.ts',
  'mars-climate-orbiter.ts': 'incidents/02-mars-climate-orbiter/src/cruise.ts',
};

for (const [name, from] of Object.entries(FILES)) {
  const src = readFileSync(new URL(from, LAB), 'utf8').replace(
    /from '@postmortem-lab\/toolkit';/g,
    "from './toolkit.ts';",
  );
  writeFileSync(new URL(name, OUT), `// Copied from postmortem-lab/${from} by scripts/sync-lab.mjs. Edit it there.\n${src}`);
}
writeFileSync(
  new URL('toolkit.ts', OUT),
  "// Copied toolkit entry point; see scripts/sync-lab.mjs.\nexport * from './numeric.ts';\nexport * from './redundancy.ts';\nexport * from './units.ts';\n",
);
console.log(`Synced ${Object.keys(FILES).length} files into src/lab/`);
