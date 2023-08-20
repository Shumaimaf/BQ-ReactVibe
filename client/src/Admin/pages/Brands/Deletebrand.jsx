import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { AiFillDelete } from 'react-icons/ai'
import { AppRoute } from '../../../App';

export default function AdminDelete() {
    const [show, setShow] = useState(false);
    const [brandname, setBrandname] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteBrand = (e) => {
        e.preventDefault();
        const payload = { BrandName: brandname };
        axios.delete(`${AppRoute}api/delete-brand/${brandname}`, payload)
            .then(json => { console.log(json.data) })
            .catch(err => console.log(err));
            setShow(false)
    }

    return (
        <>
            <button className='bg-white rounded nav-item d-flex btn bg-white text-primary m-5 ' onClick={handleShow}><AiFillDelete/></button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={deleteBrand}>
                        <div className='mb-3'>
                            <label htmlFor='inputBrandName' className='form-label'>
                                Brand Name
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='inputBrandName'
                                aria-describedby='brandnameHelp'
                                value={brandname}
                                onChange={(e) => setBrandname(e.target.value)}
                            />
                        </div>
                        <button type='submit' className='btn btn-primary'>
                            Delete Brand
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}
