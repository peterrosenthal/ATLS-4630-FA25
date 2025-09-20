import './MenuList.css';
import MenuListItem from './MenuListItem/MenuListItem';
import type { MenuItemData } from '../App';

type MenuListItemType = {
  name: string;
  price: number;
  numInCart: number;
}

type MenuListProps = {
  items: MenuListItemType[];
  addItemToCart: (item: MenuItemData) => void;
};

export default function MenuList({ items, addItemToCart }: MenuListProps) {
  return (
    <div className='menuList'>
      {items.map(item => 
        <MenuListItem
          key={item.name}
          itemName={item.name}
          itemPrice={item.price}
          numInCart={item.numInCart}
          addItemToCart={addItemToCart}
        />
      )}
    </div>
  );
}
