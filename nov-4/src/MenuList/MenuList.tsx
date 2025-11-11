import MenuListItem from './MenuListItem/MenuListItem';
import type { MenuItemData } from '../App';
import useItemsInCartStore from '../itemsInCartStore';

type MenuListProps = {
  items: MenuItemData[];
};

export default function MenuList({ items }: MenuListProps) {
  const { itemsInCart } = useItemsInCartStore();

  return (
    <div className='flex flex-col gap-8 justify-start items-stretch w-4/5 max-w-4xl mx-auto'>
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
