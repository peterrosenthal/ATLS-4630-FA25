import { useReducer } from 'react';
import type { CartItemData } from './App';
import ItemsInCartContext from './ItemsInCartContext';
import type { ItemsInCartReducerEvent } from './ItemsInCartContext';

function itemsInCartReducer(itemsInCart: CartItemData[], event: ItemsInCartReducerEvent) {
  switch (event.type) {
    case 'add': {
      const id = itemsInCart.length > 0 ?
        Math.max(...itemsInCart.map(item => item.id)) + 1 :
        0;
      return [...itemsInCart, { name: event.item.name, id}];
    }
    case 'remove': {
      return itemsInCart.filter(item => item.id !== event.id);
    }
  }
}

type ItemsInCartContextProviderProps = { children: React.ReactNode };

export function ItemsInCartContextProvider({ children }: ItemsInCartContextProviderProps) {
  const [itemsInCart, itemsInCartDispatch] = useReducer(itemsInCartReducer, []);

  return (
    <ItemsInCartContext.Provider value={{ itemsInCart, itemsInCartDispatch }}>
      {children}
    </ItemsInCartContext.Provider>
  );
}