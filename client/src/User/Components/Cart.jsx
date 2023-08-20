import React, { useState, useContext } from 'react';
import { CartContext } from '../CartContext/context';
import './Cart.css'
import { Card } from 'react-bootstrap';
import { useReducer } from 'react';

export default function Cart() {
  const { cart_state, cart_dispatch } = useContext(CartContext);
  const [show, setShow] = useState(false); // Cart visibility state
  const [products, setProducts] = useState(cart_state.cart);

  const initialData = {
    count: 1
  };

  const myCallback = (state, action) => {
    switch (action.type) {
      case 'INCREMENT_COUNTER':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT_COUNTER':
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };


  const removeFromCart = (productId) => {
    const updatedCart = cart_state.cart.filter(item => item.id !== productId);
    cart_dispatch({
      type: 'REMOVE_FROM_CART',
      productId: productId
    });
  };

  const handleClearCart = () => {
    cart_dispatch({ type: 'CLEAR_CART' });
  };

  const calculateSubtotal = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = 5.00;
    return subtotal + shipping;
  };


  const [state, counterDispatch] = useReducer(myCallback, initialData);

  const totalPrice = products.price * state.count;

  const updateCartItemQuantity = (productId, newQuantity) => {
    cart_dispatch({
      type: 'UPDATE_QUANTITY',
      productId: productId,
      newQuantity: newQuantity
    });
  };


  return (
    <>
      <div>
        <header id="site-header">
          <button
            style={{ fontFamily: "'Cinzel', serif" }}
            className="ms-4 btn btn-outline-dark"
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
        </header>
        <div className="container">
          <section id="cart">
            {cart_state.cart.map((product, index) => (
              <Card
                key={index}
                className="cart-item mt-5"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <h5 className="card-title cart-item-title">{product.title}</h5>
                <Card.Img
                  variant="top"
                  src={product.thumbnail}
                  style={{ objectFit: 'cover', height: '20vh' }}
                  className="card-image"
                />

                <div className="card-body">
                  <div className="my-3 d-flex justify-content-center align-items-center">
                    <button
                      className="btn btn-dark mx-3"
                      onClick={() => {
                        counterDispatch({ type: 'INCREMENT_COUNTER' });
                        updateCartItemQuantity(product.id, state.count + 1);
                      }}
                    >
                      +
                    </button>
                    {state.count}
                    <button
                      className="btn btn-dark mx-3"
                      disabled={state.count > 1 ? false : true}
                      onClick={() => {
                        counterDispatch({ type: 'DECREMENT_COUNTER' });
                        updateCartItemQuantity(product.id, state.count - 1);
                      }}
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <span>Quantity : {state.count}</span>
                  </div>
                  <p className="card-text cart-item-price">
                    {product.price * state.count}$
                  </p>

                  <div>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </section>
          <footer id="site-footer">
            <div className="container clearfix">
              <div className="left">
                <h2 className="subtotal">Subtotal: {calculateSubtotal()}$</h2>
                {products.map((product, index) => (
                  <h1 key={index} className="card-text cart-item-price">
                    {product.price * state.count}$
                  </h1>
                ))}
              </div>


              <div className="right">
                <h1 className="total">Total: {calculateTotal()}$</h1>
                <div>{cart_state.cart.reduce((accumulator, product) => accumulator + (products.price * products.quantity), 0)} </div>
                <a className="btn">Checkout</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
} 