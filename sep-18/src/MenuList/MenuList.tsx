import { useContext } from 'react';
import './MenuList.css';
import MenuListItem from './MenuListItem/MenuListItem';
import type { MenuItemData } from '../App';
import ItemsInCartContext from '../ItemsInCartContext';

type MenuListProps = {
  items: MenuItemData[];
};

export default function MenuList({ items }: MenuListProps) {
  const { itemsInCart } = useContext(ItemsInCartContext)!;

  return (
    <div className='menuList'>
      {items.map(item => 
        <MenuListItem
          key={item.name}
          itemName={item.name}
          itemPrice={item.price}
          numInCart={itemsInCart.filter(i => i.name === item.name).length}
        />
      )}
    </div>
  );
}
