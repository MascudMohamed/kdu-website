import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { fetchSiteContentBundle } from '../api/site/client';

const CmsContentContext = createContext({
  content: {},
  status: 'idle',
  getModule: () => null,
});

export function CmsContentProvider({ children }) {
  const [content, setContent] = useState({});
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    let cancelled = false;
    setStatus('loading');

    fetchSiteContentBundle()
      .then((data) => {
        if (cancelled) return;
        setContent(data);
        setStatus('live');
      })
      .catch(() => {
        if (cancelled) return;
        setContent({});
        setStatus('fallback');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(
    () => ({
      content,
      status,
      getModule: (key) => content[key] ?? null,
    }),
    [content, status]
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
