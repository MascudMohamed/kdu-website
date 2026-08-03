import { useEffect, useState } from 'react';
import { fetchGraduateFaculty } from '../api/graduate/client';
import { mapApiFacultyList } from '../api/department/mappers';

/**
 * Live Graduate School faculty from CMS affiliations (office_scope = graduate).
 * One published profile with “Also list under Graduate School” appears here.
 * Falls back to static placeholders when the API is empty or unavailable.
 */
export function useGraduateFaculty(staticFaculty = []) {
  const [faculty, setFaculty] = useState(staticFaculty);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    let cancelled = false;
    setStatus('loading');

    fetchGraduateFaculty()
      .then((res) => {
        if (cancelled) return;
        const mapped = mapApiFacultyList(res.data, 'graduate', staticFaculty);
        if (mapped?.length) {
          setFaculty(mapped);
          setStatus('live');
        } else {
          setFaculty(staticFaculty);
          setStatus('fallback');
        }
      })
      .catch(() => {
        if (cancelled) return;
        setFaculty(staticFaculty);
        setStatus('fallback');
      });

    return () => {
      cancelled = true;
    };
    // staticFaculty is module-level graduateData.faculty — stable reference
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { faculty, status };
}
