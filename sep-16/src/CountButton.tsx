import './Button.css';
import { useState } from 'react';

type CountButtonProps = {
  isSpecial: boolean;
};

export default function CountButton({ isSpecial }: CountButtonProps) {
  const [count, setCount] = useState(0);

  let className = '';
  if (isSpecial) {
    className = 'specialButton';
  } else {
    className = 'normalButton';
  }

  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }

  /*
  let countIsLarge = '';
  if (count > 10) {
    countIsLarge = 'Count is large!';
  } else {
    countIsLarge = 'Count is not large!';
  }
  */

  return (
    <button
      className={className}
      onClick={handleClick}
    >
      {count > 20 ? 'Count is very large!' : count > 10 ? 'Count is large!' :  'Count is not large!'}
      {count > 20 && <span>Count is very large!</span>}
    </button>
  );
}
