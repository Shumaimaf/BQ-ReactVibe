import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { json, useParams } from 'react-router-dom';
import ReactStars from 'react-stars';
import Swal from 'sweetalert2';
import ImageSection from '../components/imageSection';
import RatingStars from 'react-rating-stars-component';

export default function Laptop() {
    const { productID } = useParams();
    const [product, setProduct] = useState({});
    const [review, setReview] = useState('');
    const [Ratingstars, setRatingstars] = useState(0);
    const [productQuantity, setProductQuantity] = useState(1);

    const ratingChanged = (newRating) => {
        setRatingstars(newRating);
    };

    const submitReview = () => {
        const payload = {
            productID: productID,
            review: review,
            rating: Ratingstars
        };
        console.log(payload);

        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        });
        setReview('');
        setRatingstars(0);
    };

    // const addToCart = () => {
    //     const payload = {
    //         ...product,
    //         productQuantity,
    //         totalPrice: product.price * productQuantity
    //     }
    //     console.log(payload)


    //     Swal.fire({
    //         title: 'Error!',
    //         text: 'Do you want to continue',
    //         icon: 'error',
    //         confirmButtonText: 'Cool'
    //     });
    // }

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/search?q=Laptop${productID}`)
            .then(json => {
                setProduct(json.data);
            })
    }, [productID]);
  return (
    <div className="container">
    <div className="text-center my-5">
        <h1>{product.title} - {product.price}$</h1>
        <p className="text-secondary">{product.description}</p>
    </div>
    <div className="d-flex justify-content-center mb-3">
        <ReactStars count={5} size={24} edit={false} value={product.rating} color2={'#ffd700'} />
    </div>

    {/* <div className="my-3 d-flex justify-content-center align-items-center">
        <button className="btn btn-dark mx-3" disabled={productQuantity > 1 ? false : true} onClick={() => setProductQuantity(productQuantity - 1)}>-</button>
        {productQuantity}
        <button className="btn btn-dark mx-3" onClick={() => setProductQuantity(productQuantity + 1)}>+</button>
        <button className="btn btn-dark mx-3" onClick={addToCart}>Add to cart</button>
    </div> */}


    <div className="row mt-5">
        <div className="col-md-6">
            {product?.images?.length > 0 && <ImageSection images={product.images} />}
        </div>
        <div className="col-md-6">
            <div>
                <div className="mb-5 text-center">
                    <h2>Review us</h2>
                    <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, laborum!</p>
                </div>
                <div>
                    <div className="form-floating">
                        <textarea
                            className="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea"
                            defaultValue={review}
                            onChange={(e) => setReview(e.target.value)}
                        />
                        <label htmlFor="floatingTextarea">Comments</label>
                    </div>
                    <div className="mt-3 text-center">
                        Rate Us:
                        <div className="d-flex align-items-center justify-content-center">
                            <RatingStars
                                count={5}
                                size={24}
                                value={product.rating}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <span className="ms-3">
                                ({RatingStars})
                            </span>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="my-3 btn btn-dark" onClick={submitReview}>Submit Review</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
