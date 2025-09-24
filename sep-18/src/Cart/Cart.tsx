import './Cart.css';
import CartItem from './CartItem/CartItem';
import { useContext } from 'react';
import ItemsInCartContext from '../ItemsInCartContext';

export default function Cart() {
  const { itemsInCart: items } = useContext(ItemsInCartContext)!;

  return (
    <div className='cart'>
      {items.map(item =>
        <CartItem
          key={item.id}
          itemName={item.name}
          id={item.id}
        />
      )}
    </div>
  );
}
