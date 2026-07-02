import { useEffect, useState } from 'react';
import { fetchDepartmentLiveBundle } from '../api/department/client';
import { getApiCode, isApiDepartment } from '../api/department/config';
import { mergeDepartmentWithApi } from '../api/department/mappers';

/**
 * Merges live API data (faculty, news, events) into static department data
 * for Smart Computing, IBA, and EAP. Other departments are unchanged.
 */
export function useDepartmentLiveData(staticDepartment) {
  const [department, setDepartment] = useState(staticDepartment);
  const [apiStatus, setApiStatus] = useState('idle');

  useEffect(() => {
    setDepartment(staticDepartment);

    if (!staticDepartment || !isApiDepartment(staticDepartment.slug)) {
      setApiStatus('static');
      return;
    }

    const apiCode = getApiCode(staticDepartment.slug);
    let cancelled = false;

    setApiStatus('loading');

    fetchDepartmentLiveBundle(apiCode)
      .then((bundle) => {
        if (cancelled) return;
        setDepartment(mergeDepartmentWithApi(staticDepartment, bundle));
        setApiStatus('live');
      })
      .catch(() => {
        if (cancelled) return;
        setDepartment(staticDepartment);
        setApiStatus('fallback');
      });

    return () => {
      cancelled = true;
    };
  }, [staticDepartment]);

  return { department, apiStatus };
}
