import { useEffect, useState } from 'react';
import { fetchInternationalFacultyProfile } from '../api/international/client';
import { mapApiFacultyProfile } from '../api/department/mappers';

export function useInternationalFacultyProfile(profileSlug, staticFaculty = null) {
  const [faculty, setFaculty] = useState(staticFaculty);
  const [loading, setLoading] = useState(!staticFaculty && Boolean(profileSlug));

  useEffect(() => {
    if (!profileSlug) {
      setFaculty(staticFaculty);
      setLoading(false);
      return undefined;
    }

    if (staticFaculty) {
      setFaculty(staticFaculty);
      setLoading(false);
    }

    let cancelled = false;

    fetchInternationalFacultyProfile(profileSlug)
      .then((res) => {
        if (cancelled) return;
        const mapped = mapApiFacultyProfile(res.data, 'international', staticFaculty);
        if (mapped) setFaculty(mapped);
      })
      .catch(() => {
        if (!cancelled && staticFaculty) setFaculty(staticFaculty);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
    // staticFaculty is derived from profileSlug in the page — stable per slug
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileSlug]);

  return { faculty, loading };
}
