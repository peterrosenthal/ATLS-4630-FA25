import { create } from 'zustand';
import type { MenuItemData, CartItemData } from './App';

type ItemsInCartStore = {
  itemsInCart: CartItemData[];
  addItemToCart: (item: MenuItemData) => void;
  removeItemFromCart: (id: number) => void;
};

const useItemsInCartStore = create<ItemsInCartStore>((set, get) => ({
  itemsInCart: [],
  addItemToCart: (item: MenuItemData) => {
    const newItem = { name: item.name, id: new Date().getTime() }
    set({ itemsInCart: [...get().itemsInCart, newItem] })
  },
  removeItemFromCart: (id: number) => set({ itemsInCart: get().itemsInCart.filter(item => item.id !== id) }),
}));

export default useItemsInCartStore;
