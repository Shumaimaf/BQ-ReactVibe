import React from 'react';
import { Row,Col } from 'react-bootstrap';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai'
import './Footer.css'

export default function Footersection() {
  return (
    <div className=" bg-body-tertiary text-body-secondary fw-lighter  py-4 mt-5">
      <div className="container">
        <div className="row" >
          <div className="col-md-6">
            <h4 className='fs-3'  style={{ fontFamily:"Fira Sansr', serif" , textTransform:"capitalize"}}>About Us</h4>
            <p style={{ fontFamily:"Fira Sansr', serif"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lacus at velit vestibulum, a iaculis orci sagittis.
            </p>
          </div>
          <div className="col-md-3">
            <h4 className='fs-3'  style={{ fontFamily:"Fira Sansr', serif" , textTransform:"capitalize"}}>Contact</h4>
            <p>
              123 Street,
              <br />
              City, Country
              <br />
              <a href="mailto:info@example.com">Shumaimaf@gmail.com</a>
            </p>
          </div>
          <div className="col-md-3">
            <h4 className='fs-3'  style={{ fontFamily:"Fira Sansr', serif" , textTransform:"capitalize"}}>Follow Us</h4>
            <div className="social-icons">
              <Row>
                <Col><BsFacebook/></Col>
                <Col>twitter</Col>
                <Col><AiOutlineInstagram/></Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="mb-0">© {new Date().getFullYear()} Your Company. All Rights Reserved</p>
      </div>
    </div>
  );
}
