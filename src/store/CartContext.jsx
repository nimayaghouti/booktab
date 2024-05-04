/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from 'react';

const CartContext = createContext({
  cart: [],
  addItem: item => {},
  removeItem: id => {},
  clearCart: () => {},
});

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const existingItemIndex = state.cart.findIndex(
      item => item.id === action.item.id
    );

    const updatedCart = [...state.cart];

    if (existingItemIndex > -1) {
      const existingItem = state.cart[existingItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedCart[existingItemIndex] = updatedItem;
    } else {
      updatedCart.push({ ...action.item, quantity: 1 });
    }

    return { ...state, cart: updatedCart };
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIndex = state.cart.findIndex(
      item => item.id === action.id
    );
    const existingCartItem = state.cart[existingCartItemIndex];

    const updatedCart = [...state.cart];

    if (existingCartItem.quantity === 1) {
      updatedCart.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedCart[existingCartItemIndex] = updatedItem;
    }

    return { ...state, cart: updatedCart };
  }

  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      cart: [],
    };
  }

  return state;
};

const initialState = { cart: JSON.parse(localStorage.getItem('cart')) || [] };

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    console.log(state.cart);
  }, [state.cart]);

  const addItem = item => {
    dispatch({ type: 'ADD_ITEM', item });
  };

  const removeItem = id => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const cartContext = {
    cart: state.cart,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContext;
