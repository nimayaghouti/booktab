/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

import CartContext from './cart-context';

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const CartProvider = props => {
  const [cart, setCart] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
  }, [cart]);

  const addItem = item => {
    setCart(prevCart => [...prevCart, item]);
  };

  // eslint-disable-next-line no-unused-vars
  const deleteItem = id => {
    // const newCart = cart.filter(item => item.id !== id);
    // setCart(newCart);
    setCart([]);
  };

  const cartContext = {
    cart: cart,
    addItem: addItem,
    deleteItem: deleteItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
