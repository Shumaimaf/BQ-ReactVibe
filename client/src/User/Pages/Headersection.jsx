import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaTruck } from 'react-icons/Fa'
import { FaMoneyBillWave } from 'react-icons/Fa'
import { BsArrowCounterclockwise } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/Ai'



export default function HeaderSection() {
  return (
    <Card className='mx-4 p-2  bg-body-tertiary my-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
      <Card.Body>
        <Row>
          <Col>
            <Card.Title style={{ textAlign: 'center' }}>
              <FaTruck className='text-danger' style={{ fontSize: "8vh" }} />
              <p style={{ textTransform: "uppercase" }}>Free Shipping</p>
            </Card.Title>
            <Card.Text style={{ textAlign: 'center' }}>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
          </Col>
          <Col>
            <Card.Title style={{ textAlign: 'center' }}>
              <FaMoneyBillWave className='text-danger' style={{ fontSize: "8vh" }} />
              <p style={{ textTransform: "uppercase" }}>Cash on Delivery</p>
            </Card.Title>
            <Card.Text style={{ textAlign: 'center' }}>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
          </Col>
          <Col>
            <Card.Title style={{ textAlign: 'center' }}>
              <BsArrowCounterclockwise className='text-danger' style={{ fontSize: "8vh" }} />
              <p style={{ textTransform: "uppercase" }}>45 Days Return</p>
            </Card.Title>
            <Card.Text style={{ textAlign: 'center' }}>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
          </Col>
          <Col>
            <Card.Title style={{ textAlign: 'center' }}>
              <AiOutlineClockCircle className='text-danger' style={{ fontSize: "8vh" }} />
              <p style={{ textTransform: "uppercase" }}>Opens 24/7</p>
            </Card.Title>
            <Card.Text style={{ textAlign: 'center' }}>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );

}
