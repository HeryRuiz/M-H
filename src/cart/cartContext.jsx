import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const existingItem = cart.find(
      (item) => item.product.name === product.name
    );

    if (existingItem) {
      const totalQuantity = existingItem.quantity + quantity;

      // Check if the total quantity exceeds the limit (3)
      if (totalQuantity > 3) {
        console.log(`Cannot add more than 3 ${product.name} to the cart.`);
        return;
      }
      const updatedCart = cart.map((item) =>
        item.product.name === product.name
          ? { ...item, quantity: totalQuantity }
          : item
      );
      setCart(updatedCart);
      console.log("Item updated in the cart:", { product, quantity });
      console.log("Updated Cart:", updatedCart);
    } else {
      if (quantity > 3) {
        console.log(`Cannot add more than 3 ${product.name} to the cart.`);
        return;
      }
      setCart([...cart, { product, quantity }]);
      console.log("Item added to the cart:", { product, quantity });
      console.log("Updated Cart:", [...cart, { product, quantity }]);
    }
  };

  const removeFromCart = (productName) => {
    setCart(cart.filter((item) => item.product.name !== productName));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
