import { useState, useEffect } from 'react';

export function useFetch(url: string) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isLatestRequest = true;

    async function fetchData() {
      setIsLoading(true);

      const response = await fetch(url);
      const json = await response.json();

      if (!isLatestRequest) return;

      setData(json);

      setIsLoading(false);
    }
    fetchData();

    return () => { isLatestRequest = false };
  }, [url]);

  return { data, isLoading };
}
