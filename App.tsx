import { useState } from "react";
import Header from "./components/Header";
import MenuCard from "./components/MenuCard";
import CartModal from "./components/CartModal";
import Footer from "./components/Footer";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [openCart, setOpenCart] = useState(false);

  // ➕ tambah cart
  const addToCart = (menu: Omit<CartItem, "qty">) => {
    setCart(prev => {
      const exist = prev.find(item => item.id === menu.id);
      if (exist) {
        return prev.map(item =>
          item.id === menu.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...menu, qty: 1 }];
    });
  };

  // ➖ kurang cart
  const removeFromCart = (id: number) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter(item => item.qty > 0)
    );
  };

  return (
    <>
      <Header onCartClick={() => setOpenCart(true)} cartCount={cart.length} />

      <MenuCard
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cart={cart}
      />

      {openCart && (
        <CartModal
          cart={cart}
          onClose={() => setOpenCart(false)}
        />
      )}

      <Footer />
    </>
  );
}

export default App;
