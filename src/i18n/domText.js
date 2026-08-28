const SKIP_TAGS = new Set([
  'SCRIPT',
  'STYLE',
  'NOSCRIPT',
  'CODE',
  'PRE',
  'TEXTAREA',
  'INPUT',
  'SELECT',
  'OPTION',
  'SVG',
  'PATH',
  'IFRAME',
]);

const originals = new WeakMap();

function shouldSkipNode(node) {
  if (!node || node.nodeType !== Node.TEXT_NODE) return true;

  const text = node.nodeValue ?? '';
  if (!text.trim()) return true;

  // Pure numbers / punctuation / symbols
  if (/^[\d\s.,:;!?#@$%^&*()[\]{}<>/\\|+=_-]+$/.test(text.trim())) return true;

  let el = node.parentElement;
  while (el) {
    if (SKIP_TAGS.has(el.tagName)) return true;
    if (el.isContentEditable) return true;
    if (el.closest?.('[data-no-translate]')) return true;
    if (el.closest?.('.language-switcher')) return true;
    el = el.parentElement;
  }

  return false;
}

export function getOriginalText(node) {
  if (!originals.has(node)) {
    originals.set(node, node.nodeValue ?? '');
  }
  return originals.get(node);
}

export function collectTranslatableNodes(root = document.body) {
  if (!root) return [];

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let current = walker.nextNode();

  while (current) {
    if (!shouldSkipNode(current)) {
      getOriginalText(current); // freeze English source
      nodes.push(current);
    }
    current = walker.nextNode();
  }

  return nodes;
}

export function restoreOriginalTexts(nodes) {
  nodes.forEach((node) => {
    const original = originals.get(node);
    if (typeof original === 'string' && node.nodeValue !== original) {
      node.nodeValue = original;
    }
  });
}

export function applyTranslations(nodes, map) {
  nodes.forEach((node) => {
    const original = getOriginalText(node);
    const translated = map.get(original);
    if (typeof translated === 'string' && translated !== '') {
      node.nodeValue = translated;
    }
  });
}
