import { useEffect, useState } from 'react';
import { fetchDepartmentFacultyProfile } from '../api/department/client';
import { getApiCode, isApiDepartment } from '../api/department/config';
import { mapApiFacultyProfile } from '../api/department/mappers';

export function useFacultyProfile(departmentSlug, profileSlug, staticFaculty) {
  const shouldFetch = Boolean(
    departmentSlug && profileSlug && isApiDepartment(departmentSlug)
  );
  const [faculty, setFaculty] = useState(staticFaculty);
  const [loading, setLoading] = useState(shouldFetch && !staticFaculty);

  useEffect(() => {
    setFaculty(staticFaculty);

    if (!shouldFetch) {
      setLoading(false);
      return;
    }

    const apiCode = getApiCode(departmentSlug);
    let cancelled = false;
    if (!staticFaculty) setLoading(true);

    fetchDepartmentFacultyProfile(apiCode, profileSlug)
      .then((res) => {
        if (cancelled) return;
        const mapped = mapApiFacultyProfile(res.data, departmentSlug, staticFaculty);
        if (mapped) setFaculty(mapped);
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
  }, [departmentSlug, profileSlug, staticFaculty, shouldFetch]);

  return { faculty, loading };
}
