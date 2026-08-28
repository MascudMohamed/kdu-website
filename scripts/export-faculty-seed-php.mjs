import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outPath = 'C:/xampp/htdocs/kdu-backend/database/data/international_faculty_seed.php';

const officialSrc = fs.readFileSync(path.join(root, 'src/data/internationalFacultyOfficial.js'), 'utf8');
const official = {};
for (const match of officialSrc.matchAll(/"([^"]+)":\s*\{([^}]+)\}/g)) {
  const slug = match[1];
  const body = match[2];
  official[slug] = {
    email: body.match(/"email":\s*"([^"]+)"/)?.[1] || null,
    photo: body.match(/"photo":\s*"([^"]+)"/)?.[1] || null,
  };
}

function toSlug(name) {
  return String(name)
    .toLowerCase()
    .replace(/[,.'"]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function guessDept(role) {
  const r = role.toLowerCase();
  if (r.includes('ai department') || r.includes('artificial intelligence')) return 'artificial-intelligence';
  if (r.includes('smart computing')) return 'smart-computing';
  if (r.includes('hotel management')) return 'international-hotel-management';
  if (r.includes('business administration') || r.includes('iba')) return 'iba';
  if (r.includes('kap instructor') || (r.includes('korean') && r.includes('instructor'))) return 'korean-for-academic-purposes';
  if (r.includes('eap')) return 'eap';
  return 'iba';
}

function parseName(displayName) {
  if (displayName.includes(',')) {
    const [last, first] = displayName.split(',', 2);
    return { first_name: first.trim(), last_name: last.trim() };
  }
  const parts = displayName.trim().split(/\s+/);
  return {
    first_name: parts[0] || 'Faculty',
    last_name: parts.slice(1).join(' ') || 'Member',
  };
}

function phpString(value) {
  if (value === null) return 'null';
  return `'${String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}

function exportPhpArray(items) {
  const lines = items.map((item) => {
    const fields = Object.entries(item)
      .map(([key, value]) => `        '${key}' => ${phpString(value)}`)
      .join(',\n');
    return `    [\n${fields},\n    ]`;
  });
  return `[\n${lines.join(',\n')}\n]`;
}

const rawSrc = fs.readFileSync(path.join(root, 'src/data/internationalFaculty.js'), 'utf8');
const entries = [];
const re = /name:\s*'([^']+)',\s*\n\s*role:\s*'([^']+)',\s*\n\s*credentials:\s*'([^']*)'/g;
let m;
while ((m = re.exec(rawSrc))) {
  const name = m[1];
  const role = m[2];
  const credentials = m[3];
  const profile_slug = toSlug(name);
  const media = official[profile_slug] || {};
  const { first_name, last_name } = parseName(name);
  entries.push({
    profile_slug,
    display_name: name,
    first_name,
    last_name,
    position: role,
    credentials,
    email: media.email || null,
    photo_url: media.photo || null,
    department_api_code: guessDept(role),
  });
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
const php = `<?php

declare(strict_types=1);

/** Auto-generated international faculty seed data. */
return ${exportPhpArray(entries)};
`;
fs.writeFileSync(outPath, php);
console.log('Wrote', entries.length, 'faculty to', outPath);
console.log('With email:', entries.filter((e) => e.email).length);
