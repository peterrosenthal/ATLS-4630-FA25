import { useState } from 'react';
import './App.css';
import Cart from './Cart/Cart';
import MenuList from './MenuList/MenuList';
import { ItemsInCartContextProvider } from './ItemsInCartContextProvider';

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

/*
function itemsInCartReducer(
  itemsInCart: CartItemData[],
  event: { type: 'add'; item: MenuItemData } | { type: 'remove'; id: number },
) {
  switch (event.type) {
    case 'add': {
      const newId = itemsInCart.length > 0 ?
        Math.max(...itemsInCart.map(item => item.id)) + 1 :
        0;
      return [...itemsInCart, { name: event.item.name, id: newId}];
    }
    case 'remove': {
      return itemsInCart.filter(item => item.id !== event.id);
    }
    default: {
      throw new Error('unknown event type!');
    }
  }
}
*/

export default function App() {
  // const [itemsInCart, setItemsInCart] = useState<CartItemData[]>([]);
  // const [itemsInCart, itemsInCartDispatch] = useReducer(itemsInCartReducer, []);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  /*
  function addItemToCart(item: MenuItemData) {
    const newId = itemsInCart.length > 0 ?
      Math.max(...itemsInCart.map(item => item.id)) + 1 :
      0;
    setItemsInCart([...itemsInCart, { name: item.name, id: newId}]);
  }

  function removeItemFromCart(id: number) {
    setItemsInCart(itemsInCart.filter(item => item.id !== id));
  }
  */

  /*
  function addItemToCart(item: MenuItemData) {
    itemsInCartDispatch({ type: 'add', item: item });
  }

  function removeItemFromCart(id: number) {
    itemsInCartDispatch({ type: 'remove', id: id });
  }
  */

  return (
    <ItemsInCartContextProvider>
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
    </ItemsInCartContextProvider>
  );
}
