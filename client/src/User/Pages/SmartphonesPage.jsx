import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function SmartphonesPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/category/smartphones')
      .then(json => {
        setProducts(json.data.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Container style={{ fontFamily: "'Playfair', serif", textTransform: "capitalize", marginBottom: "10px", paddingBottom: "50px" }}>
      <h1 className='fs-2 text-center mb-1 align-items-center fw-semibold' style={{ fontFamily: "'Cinzel', serif", width: "100%", letterSpacing: '2px' }}>Smartphones</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} className="d-flex">
            <Card className="Cards my-1 d-flex flex-column justify-content-between">
              <Card.Body className="d-flex flex-column">
                <div>
                  <img
                    variant="top"
                    src={product.thumbnail}
                    className='card-image'
                    style={{
                      width: '100%',
                      height: '30vh',
                      objectFit: 'cover'}}
                        />
                  <h6 className="card-title">{product.title.length > 20 ? product.title.slice(0, 20) + '...' : product.title} </h6>
                  <span className="badge bg-secondary">{product.price}$</span>
                </div>
                  <Link to={`/products/${product.id}`} className="button mt-2 btn btn-primary">
                    View Details
                  </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </Container>
  );
}
