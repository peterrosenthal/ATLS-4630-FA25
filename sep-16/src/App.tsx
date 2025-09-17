import './App.css';
import Button from './Button';
import CountButton from './CountButton';
import MyList from './MyList';

function App() {
  return (
    <div>
      <h1>Welcome to React Fundamentals I</h1>
      <Button isSpecial={true} text='Button 1' />
      <Button isSpecial={false} text='Button 2' />
      <CountButton isSpecial={true} />
      <MyList />
    </div>
  );
}

export default App
