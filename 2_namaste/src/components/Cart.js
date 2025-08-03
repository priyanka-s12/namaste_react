import { useDispatch, useSelector } from 'react-redux';
import MenuItem from './MenuItem';
import { clearCart } from '../utils/cartSlice';

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center py-5">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        className="bg-black text-white p-2 m-4 rounded-xl"
        onClick={handleClear}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 ? (
        <h2 className="py-3">Cart is empty. Please add items to cart.</h2>
      ) : (
        <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4 ">
          <ul>
            {cartItems.map((item) => (
              <MenuItem key={item?.id} menuInfo={item} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Cart;
