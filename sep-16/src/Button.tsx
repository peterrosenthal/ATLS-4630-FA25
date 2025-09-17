import './Button.css';
import { useState } from 'react';

type ButtonProps = {
  isSpecial: boolean;
  text: string;
};

export default function Button({ isSpecial, text }: ButtonProps) {
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

  return (
    <button
      className={className}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
