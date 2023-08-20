import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { storage } from '../../utils/FirebaseConfig';
import {  ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { AppRoute } from '../../../App';

export default function AdminAddBrands() {
    const [show, setShow] = useState(false);
    const [brandname, setBrandname] = useState("");
    const [brandImage, setBrandImage] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addBrand = (e) => {
        e.preventDefault();

        const storageRef = ref(storage, `images/brands/${brandImage.name}`);
        uploadBytes(storageRef, brandImage).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                const payload = { BrandName: brandname, BrandImage: url };

                axios.post(`${AppRoute}api/addbrand`, payload) // Change axios.get to axios.post
                    .then(json => {
                        // console.log(json.data);
                        setShow(false);
                    })
                    .catch(err => console.log(err));
            })
                .catch((error) => {
                    // Handle any errors
                });
        });



    };

    return (
        <>
            <button className='bg-white rounded nav-item d-flex btn bg-white text-primary ms-2' onClick={handleShow}>Add Brand</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={addBrand}>
                        <div className='mb-3'>
                            <label htmlFor='inputEmail' className='form-label'>
                                Brand Name
                            </label>
                            <input
                                type='text' // Change type to 'text'
                                className='form-control'
                                id='inputEmail'
                                aria-describedby='brandnameHelp'
                                value={brandname}
                                onChange={(e) => setBrandname(e.target.value)}
                            />
                        </div>
                        {/* <div className='mb-3'>
                            <label htmlFor='brandImageInput'>Brand Image</label>
                            <input
                                type='text' // Change type to 'text' or 'file' as needed
                                className='form-control'
                                id='brandImageInput'
                                aria-describedby='brandnameHelp'
                                value={brandImage}
                                onChange={(e) => setBrandImage(e.target.value)}
                            />
                        </div> */}


                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Brand Image
                            </label>
                            <input className="form-control" onChange={(e) => setBrandImage(e.target.files[0])} type="file" id="formFile" />
                        </div>
                        <button type='submit' className='btn btn-primary'>
                            Add Brand
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}
