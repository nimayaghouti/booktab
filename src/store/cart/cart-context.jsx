/* eslint-disable no-unused-vars */
import React from 'react';

const CartContext = React.createContext({
  cart: [],
  addItem: item => {},
  deleteItem: id => {},
});

export default CartContext;
