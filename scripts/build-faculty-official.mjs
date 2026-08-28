import fs from 'fs';

const OFFICIAL_BASE = 'https://global.kduniv.ac.kr';

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

const html = fs.readFileSync('tmp-faculty.html', 'utf8');
const items = [];
const re = /<div class="mProfessor-list-item">([\s\S]*?)<\/div>\s*<\/div>\s*<\/li>/g;
let m;
while ((m = re.exec(html))) {
  const block = m[1];
  const name = block.match(/<strong>([^<]+)<\/strong>/)?.[1]?.trim();
  const img = block.match(/src="([^"]+)"/)?.[1];
  const email = block.match(/mailto:([^"]+)/)?.[1];
  if (name) items.push({ name, img, email: email || null });
}

const media = {};
items.forEach((item) => {
  media[toSlug(item.name)] = {
    photo: `${OFFICIAL_BASE}${item.img}`,
    ...(item.email ? { email: item.email } : {}),
  };
});

// Name variants used in our static directory
if (media['bunagan-jennifert']) {
  media['bunagan-jennifer-t'] = media['bunagan-jennifert'];
}

const out = `/** Official photos & emails from global.kduniv.ac.kr International Faculty page */\nexport const OFFICIAL_FACULTY_MEDIA = ${JSON.stringify(media, null, 2)};\n`;
fs.writeFileSync('src/data/internationalFacultyOfficial.js', out);
console.log('wrote', Object.keys(media).length, 'entries');
