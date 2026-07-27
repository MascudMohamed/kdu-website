import { useEffect, useState } from 'react';
import { fetchClubBySlug, fetchClubs } from '../api/clubs/client';
import { mapApiClub, mergeClubsWithApi } from '../api/clubs/mappers';
import { CLUBS, getClubBySlug as getStaticClub } from '../data/engagement/clubs';

export function useClubs() {
  const [clubs, setClubs] = useState(CLUBS);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    let cancelled = false;
    setStatus('loading');
    fetchClubs()
      .then((data) => {
        if (cancelled) return;
        setClubs(mergeClubsWithApi(data, CLUBS));
        setStatus('live');
      })
      .catch(() => {
        if (cancelled) return;
        setClubs(CLUBS);
        setStatus('fallback');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { clubs, status };
}

export function useClub(slug) {
  const [club, setClub] = useState(() => getStaticClub(slug));
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!slug) return undefined;
    let cancelled = false;
    setStatus('loading');
    setClub(getStaticClub(slug));

    fetchClubBySlug(slug)
      .then((data) => {
        if (cancelled) return;
        if (data) {
          setClub(mapApiClub(data, getStaticClub(slug)));
          setStatus('live');
        } else {
          setStatus('fallback');
        }
      })
      .catch(() => {
        if (cancelled) return;
        setStatus('fallback');
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { club, status };
}
