import { useState } from 'react';
import './App.css';
import MyButton from './MyButton';
import MyList from './MyList';
import SearchValueContext from './searchValueContext';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [myList, setMyList] = useState<string[]>([]);
  const [myObject, setMyObject] = useState<{ name: string, count: number }>({ name: 'hello', count: 0 });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMyList([ ...myList, searchValue ]);
    setMyObject({ ...myObject, name: searchValue });
  }

  function incrementObjectCount() {
    const newObject = { ...myObject };
    newObject.count++;
    setMyObject(newObject);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />

          <button type='submit'>Add to list</button>
        </form>

        <SearchValueContext.Provider value={searchValue}>
          <MyList list={myList} />
        </SearchValueContext.Provider>

        <button onClick={incrementObjectCount}>
          {myObject.name} has been clicked on {myObject.count} times
        </button>

        <MyButton>
          this is text passed in from the parent
          <span>this is text in a span</span>
          <div>this text is in a div</div>
        </MyButton>
      </div>
    </>
  );
}

export default App;
