import { useEffect, useState } from 'react';
import { fetchGraduateFacultyProfile } from '../api/graduate/client';
import { mapApiFacultyProfile } from '../api/department/mappers';

export function useGraduateFacultyProfile(profileSlug, staticFaculty = null) {
  const [faculty, setFaculty] = useState(staticFaculty);
  const [loading, setLoading] = useState(Boolean(profileSlug));

  useEffect(() => {
    if (!profileSlug) {
      setFaculty(staticFaculty);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    fetchGraduateFacultyProfile(profileSlug)
      .then((res) => {
        if (cancelled) return;
        const mapped = mapApiFacultyProfile(res.data, 'graduate', staticFaculty);
        setFaculty(mapped || staticFaculty);
      })
      .catch(() => {
        if (!cancelled) setFaculty(staticFaculty);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [profileSlug, staticFaculty]);

  return { faculty, loading };
}
