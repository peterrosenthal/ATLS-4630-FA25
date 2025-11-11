import './Cart.css';
import CartItem from './CartItem/CartItem';
import useItemsInCartStore from '../itemsInCartStore';

export default function Cart() {
  const { itemsInCart } = useItemsInCartStore();

  return (
    <div className='cart'>
      {itemsInCart.map(item =>
        <CartItem
          key={item.id}
          itemName={item.name}
          id={item.id}
        />
      )}
    </div>
  );
}
