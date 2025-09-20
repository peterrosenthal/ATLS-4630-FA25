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
  const [itemsInCart, setItemsInCart] = useState<CartItemData[]>([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  function addItemToCart(item: MenuItemData) {
    const newId = itemsInCart.length > 0 ?
      Math.max(...itemsInCart.map(item => item.id)) + 1 :
      0;
    setItemsInCart([...itemsInCart, { name: item.name, id: newId}]);
  }

  function removeItemFromCart(id: number) {
    setItemsInCart(itemsInCart.filter(item => item.id !== id));
  }

  console.log(itemsInCart);

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
        <Cart
          items={itemsInCart}
          removeItemFromCart={removeItemFromCart}
        />
      )}

      <MenuList
        items={menuItems.map(item => {
          return {
            name: item.name,
            price: item.price,
            numInCart: itemsInCart.filter(cartItem => cartItem.name === item.name).length,
          };
        })}
        addItemToCart={addItemToCart}
      />
    </div>
  );
}
