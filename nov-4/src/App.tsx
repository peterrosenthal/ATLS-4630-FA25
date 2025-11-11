import { useState } from 'react';
import './App.css';
import Cart from './Cart/Cart';
import MenuList from './MenuList/MenuList';

export type MenuItemData = {
  name: string;
  price: number;
};

const menuItems: MenuItemData[] = [
  {
    name: 'Beef tacos',
    price: 14,
  },
  {
    name: 'Chicken tacos',
    price: 12,
  },
  {
    name: 'Cheese enchiladas',
    price: 12,
  },
  {
    name: 'Beef burrito',
    price: 15,
  },
  {
    name: 'Chicken burrito',
    price: 13,
  },
];

export type CartItemData = {
  name: string;
  id: number;
};

export default function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <div className='app'>
      <header>
        <h1>Thinking in React - Menu</h1>

        <button
          className='cartButton'
          onClick={() => setCartIsOpen(!cartIsOpen)}
        >
          Cart
        </button>
      </header>

      {cartIsOpen && (
        <Cart />
      )}

      <MenuList
        items={menuItems}
      />
    </div>
  );
}
