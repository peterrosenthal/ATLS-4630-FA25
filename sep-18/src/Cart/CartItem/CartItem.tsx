import './CartItem.css';

type CartItemProps = {
  itemName: string;
  id: number;
  removeItemFromCart: (id: number) => void;
};

export default function CartItem({ itemName, id, removeItemFromCart }: CartItemProps) {
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
