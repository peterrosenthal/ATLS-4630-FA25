import { useContext } from 'react';
import './MenuListItem.css';
import ItemsInCartContext from '../../ItemsInCartContext';

type MenuListItemProps = {
  itemName: string;
  itemPrice: number;
  numInCart: number;
};

export default function MenuListItem({ itemName, itemPrice, numInCart }: MenuListItemProps) {
  const { itemsInCartDispatch } = useContext(ItemsInCartContext)!;

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
          onClick={() => itemsInCartDispatch({
            type: 'add',
            item: { name: itemName, price: itemPrice }
          })}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
