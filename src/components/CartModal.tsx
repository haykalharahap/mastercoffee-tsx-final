type Props = {
  cart: {
    id: number;
    name: string;
    price: number;
    qty: number;
  }[];
  onClose: () => void;
};

const CartModal = ({ cart, onClose }: Props) => {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="font-bold text-xl mb-4">Cart</h2>

        {cart.map(item => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>
              {item.name} x {item.qty}
            </span>
            <span>
              Rp {(item.price * item.qty).toLocaleString()}
            </span>
          </div>
        ))}

        <hr className="my-4" />
        <p className="font-bold">Total: Rp {total.toLocaleString()}</p>

        <button
          onClick={onClose}
          className="mt-4 w-full bg-black text-white py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
