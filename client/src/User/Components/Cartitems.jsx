import React, { useReducer, useContext } from 'react';
import { Card } from 'react-bootstrap';
import { CartContext } from '../CartContext/context';

function CartItems({ product, index }) {
  const { cart_dispatch, cart_state } = useContext(CartContext);

  if (!product) {
    return null;
  }

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

  const [state, counterDispatch] = useReducer(myCallback, initialData);

  const totalPrice = product.price * state.count;

  const updateCartItemQuantity = (productId, newQuantity) => {
    cart_dispatch({
      type: 'UPDATE_QUANTITY',
      productId: productId,
      newQuantity: newQuantity
    });
  };

  return (
    <Card className="cart-item mt-5" style={{ fontFamily: "'Cinzel', serif" }}>
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
        <p className="card-text cart-item-price">{totalPrice}$</p>

        <div>
          <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>
            Delete
          </button>
        </div>
      </div>
    </Card>
  );
}

export default CartItems;
