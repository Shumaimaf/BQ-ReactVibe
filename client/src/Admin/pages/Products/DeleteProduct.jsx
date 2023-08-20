import React from 'react'
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai'
import { Modal } from 'react-bootstrap'
import axios from 'axios';
import { AppRoute } from '../../../App';


export default function DeleteProduct() {
  const [show, setShow] = useState(false);
  const [ProductName, setProductName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteProduct = (e) => {
    e.preventDefault();

    axios.delete(`${AppRoute}api/delete-product/${ProductName}`)
      .then(json => {
        console.log(json.data);
        setShow(false);
      })
      .catch(err => {
        console.log(err);
      });
  };



  return (
    <>
      <button className='bg-white rounded nav-item d-flex btn bg-white text-primary m-5 ' onClick={handleShow}><AiFillDelete /></button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={deleteProduct}>
            <div className='mb-3'>
              <label htmlFor='inputProductName' className='form-label'>
                Product Name
              </label>
              <input
                type='text'
                className='form-control'
                id='inputProductName'
                aria-describedby='ProductNameHelp'
                value={ProductName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Delete Product
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
