import { useEffect, useState } from 'react';

export default function useFetch(url: string) {
  // eslint-disable-next-line
  const [data, setData] = useState<Record<string, any>>({});

  useEffect(() => {
    let isMostRecent = true;
    
    (async () => {
      const response = await fetch(url);
      const json = await response.json();

      if (isMostRecent) {
        setData(json);
      }
    })();

    return () => {
      isMostRecent = false;
    }
  }, [url]);

  return data;
}
