import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import './App.css';

export default function App() {
  const [numFactsToFetch, setNumFactsToFetch] = useState(1);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['meowfactsQuery', numFactsToFetch],
    queryFn: async () => {
      const response = await fetch(`https://meowfacts.herokuapp.com/?count=${numFactsToFetch}`);
      const json = await response.json();
      return json.data as string[];
    },
    staleTime: 10 * 1000,
  });

  return (
    <>
      <input
        type='number'
        value={numFactsToFetch}
        onChange={e => setNumFactsToFetch(parseInt(e.target.value))}
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Oops something went wrong!</p>
      ) : data ? (
        data.map(fact => <p>{fact}</p>)
      ) : ''}

      <button onClick={() => refetch()}>Refetch</button>
    </>
  );
}
