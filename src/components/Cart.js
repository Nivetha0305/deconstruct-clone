import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Cart() {
  const { cart, removeFromCart, total } = useContext(CartContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b py-4"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p>₹{item.offerPrice}</p>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          {/* TOTAL */}
          <div className="mt-6 text-xl font-bold">Total: ₹{total}</div>
        </>
      )}
    </div>
  );
}
