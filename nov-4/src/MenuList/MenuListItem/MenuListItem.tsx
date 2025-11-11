import './MenuListItem.css';
import useItemsInCartStore from '../../itemsInCartStore';

type MenuListItemProps = {
  itemName: string;
  itemPrice: number;
  numInCart: number;
};

export default function MenuListItem({ itemName, itemPrice, numInCart }: MenuListItemProps) {
  const addItemToCart = useItemsInCartStore(store => store.addItemToCart);

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
          className='px-2 py-0.5 border-none rounded-2xl bg-blue-500 hover:bg-blue-600 text-white'
          onClick={() => addItemToCart({ name: itemName, price: itemPrice })}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
