import './Cart.css';
import CartItem from './CartItem/CartItem';
import type { CartItemData } from '../App';

type CartProps = {
  items: CartItemData[]
  removeItemFromCart: (id: number) => void;
};

export default function Cart({ items, removeItemFromCart }: CartProps) {
  return (
    <div className='cart'>
      {items.map(item =>
        <CartItem
          key={item.id}
          itemName={item.name}
          id={item.id}
          removeItemFromCart={removeItemFromCart}
        />
      )}
    </div>
  );
}
