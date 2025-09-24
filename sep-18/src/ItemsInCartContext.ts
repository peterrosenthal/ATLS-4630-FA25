import { createContext } from 'react';
import type { CartItemData, MenuItemData } from './App';

export type ItemsInCartReducerEvent = { type: 'add'; item: MenuItemData } | { type: 'remove'; id: number };

const ItemsInCartContext = createContext<{
  itemsInCart: CartItemData[];
  itemsInCartDispatch: React.ActionDispatch<[event: ItemsInCartReducerEvent]>;
} | null>(null);

export default ItemsInCartContext;
