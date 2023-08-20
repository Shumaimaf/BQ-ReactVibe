import React, { createContext, useEffect, useReducer, useContext } from 'react';
import { reducer } from './reducer';

const getCartData = () => {
    let cartData = localStorage.getItem('cart')
    if (cartData === null) {
        return [];
    } else {
        return JSON.parse(cartData);
    }
}

const initialData = {
    cart: getCartData()
}

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const [cart_state, cart_dispatch] = useReducer(reducer, initialData);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart_state.cart));
    }, [cart_state.cart]);

    const handleClearCart = () => {
        cart_dispatch({ type: 'CLEAR_CART' });
    };

    const addToCart = (item) => {
        cart_dispatch({
            type: 'ADD_TO_CART',
            payload: item
        });
    }
    const removeFromCart = () => {
        cart_dispatch({
            type: 'REMOVE_FROM_CART'})
        };

        return (
            <CartContext.Provider value={{ cart_state, cart_dispatch, handleClearCart, addToCart, removeFromCart }}>
                {children}
            </CartContext.Provider>
        );
    }

