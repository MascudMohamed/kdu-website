import fs from 'fs';

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
console.log(JSON.stringify(items, null, 2));
console.error('count', items.length);
