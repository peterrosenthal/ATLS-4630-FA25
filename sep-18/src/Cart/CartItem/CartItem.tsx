import { useContext } from 'react';
import './CartItem.css';
import ItemsInCartContext from '../../ItemsInCartContext';

type CartItemProps = {
  itemName: string;
  id: number;
};

export default function CartItem({ itemName, id }: CartItemProps) {
  const { itemsInCartDispatch } = useContext(ItemsInCartContext)!;

  return (
    <div className='cartItem'>
      <span>{itemName}</span>

      <button
        className='removeButton'
        onClick={() => itemsInCartDispatch({ type: 'remove', id })}
      >
        Remove from cart
      </button>
    </div>
  );
}
