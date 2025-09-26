import { useState, useRef, useEffect, useMemo } from 'react'
import useFetch from './useFetch';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// https://meowfacts.herokuapp.com/

function App() {
  const divRef = useRef<HTMLDivElement | null>(null);
  const countRef = useRef(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  // const [meowfactsData, setMeowfactsData] = useState<string[]>([]);
  const meowfactsData = useFetch(`https://meowfacts.herokuapp.com/?count=${count2}`);

  function incrementCount1State() {
    setCount1(count1 + 1);
  }

  function incrementCount2State() {
    setCount2(count2 + 1);
  }

  function incrementCountRef() {
    countRef.current++;
    console.log(countRef.current);
  }

  function logDivSize() {
    console.log(divRef.current?.getBoundingClientRect());
  }

  // effect to fetch data from meowfacts
  /*
  useEffect(() => {
    async function fetchMeowFacts() {
      const response = await fetch(`https://meowfacts.herokuapp.com/?count=${count1}`);
      const json = await response.json();
      setMeowfactsData(json.data);
    }
    fetchMeowFacts();
  }, [count1]);
  */

  useEffect(() => {
    console.log('component has mounted!');
  }, []);

  useEffect(() => {
    console.log('count1 effect!');
  }, [count1]);

  useEffect(() => {
    console.log('count2 effect!');

    const intervalId = setInterval(() => console.log('count2 interval'), 1000);

    return () => {
      console.log('count2 effect cleanup!');
      clearInterval(intervalId);
    };
  }, [count2]);

  useEffect(() => {
    console.log('count1 and count2 effect!');
  }, [count1, count2]);

  const allMeowFactsLetters = useMemo(() => {
    let result = 0;
    if (meowfactsData.data) {
      for (const meowFact of meowfactsData.data as string[]) {
        result += meowFact.length;
        console.log(meowFact.length);
      }
    }
    return result;
  }, [meowfactsData]);

  const meowFactsLessThan50 = useMemo(
    () => meowfactsData.data
      ?.filter((meowFact: string) => meowFact.length < 50),
    [meowfactsData],
  );

  return (
    <>
      <div ref={divRef}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={incrementCount1State}>
          count1 is {count1}
        </button>
        <button onClick={incrementCount2State}>
          count2 is {count2}
        </button>
        <button onClick={incrementCountRef}>
          increment countRef
        </button>
        <button onClick={logDivSize}>
          log div size
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <ul>
          {meowfactsData.data?.map((meowfact: string) =>
            <li key={meowfact}>{meowfact}</li>
          )}
        </ul>
        <p>all meow facts letters: {allMeowFactsLetters}</p>
        <ul>
          {meowFactsLessThan50?.map((meowfact: string) =>
            <li key={meowfact}>{meowfact}</li>
          )}
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
