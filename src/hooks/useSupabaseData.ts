
import { useState, useEffect } from 'react';

type FetchFunction<T> = () => Promise<T>;

export function useSupabaseData<T>(fetchFn: FetchFunction<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchFn();
        setData(result);
        setError(null);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err instanceof Error ? err : new Error('Unknown error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFn]);

  const refetch = async () => {
    try {
      setLoading(true);
      const result = await fetchFn();
      setData(result);
      setError(null);
      return result;
    } catch (err) {
      console.error('Error refetching data:', err);
      const error = err instanceof Error ? err : new Error('Unknown error occurred');
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch };
}
