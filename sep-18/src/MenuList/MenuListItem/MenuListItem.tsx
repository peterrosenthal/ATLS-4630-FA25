import './MenuListItem.css';
import type { MenuItemData } from '../../App';

type MenuListItemProps = {
  itemName: string;
  itemPrice: number;
  numInCart: number;
  addItemToCart: (item: MenuItemData) => void
};

export default function MenuListItem({ itemName, itemPrice, numInCart, addItemToCart }: MenuListItemProps) {
  return (
    <div className='menuListItem'>
      <div className='menuListItemTopRow'>
        <span>{itemName}</span>

        <span>${itemPrice}</span>
      </div>

      <div className='menuListItemBottomRow'>
        <span>
          {numInCart === 0 ? (
            'None in cart'
          ) : (
            `${numInCart} in cart`
          )}
        </span>

        <button
          className='addToCartButton'
          onClick={() => addItemToCart({ name: itemName, price: itemPrice })}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
