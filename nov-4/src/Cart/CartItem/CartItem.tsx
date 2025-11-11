import './CartItem.css';
import useItemsInCartStore from '../../itemsInCartStore';

type CartItemProps = {
  itemName: string;
  id: number;
};

export default function CartItem({ itemName, id }: CartItemProps) {
  const removeItemFromCart = useItemsInCartStore(store => store.removeItemFromCart);

  return (
    <div className='cartItem'>
      <span>{itemName}</span>

      <button
        className='removeButton'
        onClick={() => removeItemFromCart(id)}
      >
        Remove from cart
      </button>
    </div>
  );
}
