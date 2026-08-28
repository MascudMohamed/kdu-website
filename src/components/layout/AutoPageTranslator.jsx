import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import {
  getCachedTranslation,
  setCachedTranslation,
  translateTextsBatch,
} from '../../api/translate';
import {
  applyTranslations,
  collectTranslatableNodes,
  getOriginalText,
  restoreOriginalTexts,
} from '../../i18n/domText';
import '../../styles/components/AutoPageTranslator.css';

const CHUNK_SIZE = 40;

async function buildTranslationMap(texts, lang) {
  const unique = [...new Set(texts.filter((t) => typeof t === 'string' && t.trim()))];
  const map = new Map();
  const missing = [];

  unique.forEach((text) => {
    const cached = getCachedTranslation(lang, text);
    if (cached != null) map.set(text, cached);
    else missing.push(text);
  });

  for (let i = 0; i < missing.length; i += CHUNK_SIZE) {
    const chunk = missing.slice(i, i + CHUNK_SIZE);
    const translated = await translateTextsBatch(chunk, lang, 'en');
    chunk.forEach((src, idx) => {
      const value = translated[idx] ?? src;
      map.set(src, value);
      setCachedTranslation(lang, src, value);
    });
  }

  return map;
}

/**
 * Full-page translator: every visible text node under body
 * (navbar, pages, footer) for ko/fr/es/pt via Google batch API.
 */
export default function AutoPageTranslator() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const runId = useRef(0);
  const translating = useRef(false);
  const observerRef = useRef(null);
  const debounceRef = useRef(null);

  const lang = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0];

  useEffect(() => {
    const myRun = ++runId.current;
    let cancelled = false;

    const translateDom = async () => {
      if (translating.current) return;
      translating.current = true;

      try {
        const nodes = collectTranslatableNodes(document.body);

        if (lang === 'en') {
          restoreOriginalTexts(nodes);
          if (!cancelled && myRun === runId.current) {
            setBusy(false);
            setError('');
          }
          return;
        }

        if (!cancelled && myRun === runId.current) {
          setBusy(true);
          setError('');
        }

        // Always translate from frozen English originals.
        restoreOriginalTexts(nodes);
        const englishNodes = collectTranslatableNodes(document.body);
        const englishTexts = englishNodes.map((node) => getOriginalText(node));
        const map = await buildTranslationMap(englishTexts, lang);

        if (cancelled || myRun !== runId.current) return;

        // Pause observer while writing so we don't recurse.
        observerRef.current?.disconnect();
        applyTranslations(englishNodes, map);
        observerRef.current?.observe(document.body, {
          childList: true,
          subtree: true,
        });
      } catch (err) {
        if (!cancelled && myRun === runId.current) {
          setError(err?.message || 'Translation failed');
        }
      } finally {
        translating.current = false;
        if (!cancelled && myRun === runId.current) {
          setBusy(false);
        }
      }
    };

    const timer = window.setTimeout(translateDom, 200);

    observerRef.current?.disconnect();
    observerRef.current = new MutationObserver(() => {
      if (lang === 'en' || translating.current) return;
      window.clearTimeout(debounceRef.current);
      debounceRef.current = window.setTimeout(() => {
        if (!cancelled && myRun === runId.current) {
          translateDom();
        }
      }, 500);
    });

    observerRef.current.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      window.clearTimeout(debounceRef.current);
      observerRef.current?.disconnect();
    };
  }, [lang, location.pathname, location.search, location.hash]);

  if (!busy && !error) return null;

  return (
    <div
      className={`auto-page-translator${busy ? ' is-busy' : ''}${error ? ' is-error' : ''}`}
      role="status"
      aria-live="polite"
      data-no-translate
    >
      {busy ? 'Translating page…' : error}
    </div>
  );
}
