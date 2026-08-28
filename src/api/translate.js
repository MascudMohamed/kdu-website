import { API_BASE } from './config';
import { preferredTranslation } from '../i18n/preferredTranslations';

const CACHE_PREFIX = 'kdu_tx_v2_';

function cacheKey(lang, text) {
  return `${CACHE_PREFIX}${lang}:${text}`;
}

export function getCachedTranslation(lang, text) {
  const preferred = preferredTranslation(lang, text);
  if (preferred != null) return preferred;

  try {
    return localStorage.getItem(cacheKey(lang, text));
  } catch {
    return null;
  }
}

export function setCachedTranslation(lang, text, translated) {
  if (preferredTranslation(lang, text) != null) return;

  try {
    localStorage.setItem(cacheKey(lang, text), translated);
  } catch {
    // Quota exceeded — ignore cache write.
  }
}

/**
 * Translate many English strings to the target language via the PHP backend.
 * @param {string[]} texts
 * @param {string} target
 * @returns {Promise<string[]>}
 */
export async function translateTextsBatch(texts, target, source = 'en') {
  if (!texts.length || target === source) {
    return texts;
  }

  const response = await fetch(`${API_BASE}/api/translate/batch`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ texts, source, target }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || !data.success || !Array.isArray(data.translations)) {
    throw new Error(data.message || 'Batch translation failed');
  }

  return data.translations;
}
