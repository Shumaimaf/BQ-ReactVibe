import React, { useEffect, useState, useContext, useReducer } from 'react';
import ReactStars from 'react-stars';
import Swal from 'sweetalert2';
import ImageSection from '../components/imageSection';
import { CartContext } from '../CartContext/context'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ProductPage() {
  const { productID } = useParams();
  const [product, setProduct] = useState({});
  const [review, setReview] = useState('');
  const [ratingstar, setRatingstar] = useState(0);
  const { dispatch } = useContext(CartContext);
  const [show, setShow] = useState(false); // Cart visibility state

  const { addToCart } = useContext(CartContext);

  const ratingChanged = (newRating) => {
    setRatingstar(newRating);
  };

  const submitReview = () => {
    const payload = {
      productID: productID,
      review: review,
      rating: ratingstar
    };

    console.log('Review:', review);
    console.log('Rating:', ratingstar);

    Swal.fire({
      title: 'Submitted',
      text: 'Continue Shopping!',
      confirmButtonText: 'Go'
    });
    setReview('');
    setRatingstar(0);
  };


  // const addToCart = () => {
  //   dispatch({
  //     type: 'ADD_TO_CART',
  //     payload: product
  //   });
  //   setShow(true); // Open the cart in the off-canvas immediately

  //   Swal.fire({
  //     title: 'Added to Cart!',
  //     text: 'Continue shopping or proceed to checkout.',
  //     icon: 'success',
  //     confirmButtonText: 'OK'
  //   });
  // };

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productID}`)
      .then((json) => setProduct(json.data));
  }, []);

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

  const [state, counterDispatch] = useReducer(myCallback, initialData);

  return (
    <div className="container">
      <div className="text-center my-5">
        <h1 style={{ fontFamily: "'Cinzel', serif"}}>{product.title} - {product.price}$</h1>
        <p className="text-secondary" style={{ fontFamily: "'Cinzel', serif"}}>{product.description}</p>
      </div>
      <div className="d-flex justify-content-center mb-3">
        <ReactStars count={5} size={24} edit={false} value={product.rating} color2={'#ffd700'} />
      </div>

      <div className="my-3 d-flex justify-content-center align-items-center">
        <button className="btn btn-dark mx-3" onClick={() => counterDispatch({ type: 'INCREMENT_COUNTER' })}>
          +
        </button>
        {state.count}
        <button className="btn btn-dark mx-3" disabled={state.count > 1 ? false : true} onClick={() => counterDispatch({ type: 'DECREMENT_COUNTER' })}>
          -
        </button>

        <button className="btn btn-dark " style={{ fontFamily: "'Cinzel', serif"}} onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          {product?.images?.length > 0 && <ImageSection images={product.images} />}
        </div>
        <div className="col-md-6">
          <div>
            <div className="mb-5 text-center">
              <h2 style={{ fontFamily: "'Cinzel', serif"}}>Review us</h2>
              <p style={{ fontFamily: "'Cinzel', serif"}} className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, laborum!</p>
            </div>
            <div>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                />
                <label htmlFor="floatingTextarea" style={{ fontFamily: "'Cinzel', serif"}}>Comments</label>
              </div>
              <div className="mt-3 text-center" style={{ fontFamily: "'Cinzel', serif"}}>
                Rate Us:
                <div className="d-flex align-items-center justify-content-center">
                  <ReactStars
                    count={5}
                    size={24}
                    value={ratingstar}
                    onChange={ratingChanged}
                    color2={'#ffd700'}
                  />
                  <span className="ms-3">
                    ({ratingstar})
                  </span>
                </div>
              </div>
              <div className="text-center">
                <button style={{ fontFamily: "'Cinzel', serif"}} className="my-3 btn btn-dark" onClick={submitReview}>Submit Review</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}