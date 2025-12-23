import { useEffect, useState } from "react";
import { CartItem } from "../App";

type Menu = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Props = {
  addToCart: (menu: Omit<CartItem, "qty">) => void;
  removeFromCart: (id: number) => void;
  cart: CartItem[];
};

const MenuCard = ({ addToCart, removeFromCart, cart }: Props) => {
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    fetch("/data/menu.json")
      .then(res => res.json())
      .then(data => setMenus(data));
  }, []);

  const getQty = (id: number) =>
    cart.find(item => item.id === id)?.qty || 0;

  return (
    <section className="px-10 py-16">
      <h2 className="text-red-600 text-3xl font-bold mb-10">MENU</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {menus.map(menu => (
          <div
            key={menu.id}
            className="bg-white rounded-xl p-6 text-center shadow"
          >
            <img
              src={menu.image}
              alt={menu.name}
              className="mx-auto h-40"
            />

            <h3 className="font-bold mt-4">{menu.name}</h3>
            <p className="mb-4">Rp {menu.price.toLocaleString()}</p>

            {getQty(menu.id) === 0 ? (
              <button
                onClick={() =>
                  addToCart({
                    id: menu.id,
                    name: menu.name,
                    price: menu.price,
                  })
                }
                className="bg-black text-white px-6 py-2 rounded"
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={() => removeFromCart(menu.id)}
                  className="px-4 py-1 bg-gray-300 rounded"
                >
                  −
                </button>
                <span>{getQty(menu.id)}</span>
                <button
                  onClick={() =>
                    addToCart({
                      id: menu.id,
                      name: menu.name,
                      price: menu.price,
                    })
                  }
                  className="px-4 py-1 bg-black text-white rounded"
                >
                  +
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuCard;
