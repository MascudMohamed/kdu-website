import { useEffect, useState } from 'react';
import { fetchInternationalFaculty } from '../api/international/client';
import { mapApiFacultyList, mergeFacultyLists } from '../api/department/mappers';

/**
 * International Faculty directory — published CMS profiles merged with static placeholders.
 */
export function useInternationalFaculty(staticFaculty = []) {
  const [faculty, setFaculty] = useState(staticFaculty);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    let cancelled = false;
    setStatus('loading');

    fetchInternationalFaculty()
      .then((res) => {
        if (cancelled) return;
        const mapped = mapApiFacultyList(res.data, 'international', staticFaculty);
        const merged = mergeFacultyLists(mapped, staticFaculty);
        setFaculty(merged);
        setStatus(mapped?.length ? 'live' : 'fallback');
      })
      .catch(() => {
        if (cancelled) return;
        setFaculty(staticFaculty);
        setStatus('fallback');
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { faculty, status };
}
