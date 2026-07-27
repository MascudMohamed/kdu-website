import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { fetchSiteContentBundle } from '../api/site/client';

const CmsContentContext = createContext({
  content: {},
  status: 'idle',
  refresh: async () => {},
  getModule: () => null,
});

export function CmsContentProvider({ children }) {
  const [content, setContent] = useState({});
  const [status, setStatus] = useState('idle');

  const load = useCallback(async () => {
    try {
      const data = await fetchSiteContentBundle();
      setContent(data ?? {});
      setStatus('live');
    } catch {
      setStatus((prev) => (prev === 'live' ? 'live' : 'fallback'));
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setStatus('loading');
      try {
        const data = await fetchSiteContentBundle();
        if (cancelled) return;
        setContent(data ?? {});
        setStatus('live');
      } catch {
        if (cancelled) return;
        setContent({});
        setStatus('fallback');
      }
    })();

    const refreshIfVisible = () => {
      if (document.visibilityState === 'visible') {
        load();
      }
    };

    window.addEventListener('focus', load);
    document.addEventListener('visibilitychange', refreshIfVisible);

    return () => {
      cancelled = true;
      window.removeEventListener('focus', load);
      document.removeEventListener('visibilitychange', refreshIfVisible);
    };
  }, [load]);

  const value = useMemo(
    () => ({
      content,
      status,
      refresh: load,
      getModule: (key) => content[key] ?? null,
    }),
    [content, status, load]
  );

  return <CmsContentContext.Provider value={value}>{children}</CmsContentContext.Provider>;
}

export function useCmsContent() {
  return useContext(CmsContentContext);
}

export function useCmsModule(moduleKey) {
  const { status, getModule } = useCmsContent();
  const module = getModule(moduleKey);
  return { module, status, hasCms: Boolean(module && Object.keys(module).length) };
}
