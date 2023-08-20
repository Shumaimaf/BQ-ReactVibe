import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function LaptopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/search?q=Laptop')
      .then(json => {
        setProducts(json.data.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Container style={{ fontFamily: "'Playfair', serif", textTransform: "capitalize", marginTop: "5px", marginBottom: "5px" }}>
      <h1 className='fs-2 text-center mb-1 align-items-center fw-semibold' style={{ fontFamily: "'Cinzel', serif", width: "100%", letterSpacing: '2px' }}>Laptops</h1>
      <Row className="flex-wrap">
        {products.map((product) => (
          <Col key={product.id} className="d-flex">
            <Card className="Cards my-1 d-flex flex-column justify-content-between flex-grow-1">
              <Card.Body className="d-flex flex-column">
                <div>
                  <Card.Img
                    variant="top"
                    src={product.thumbnail}
                    style={{ objectFit: 'cover', height: "150px" }}
                    className='card-image'
                  />
                  <h6 className="card-title">{product.title.length > 20 ? product.title.slice(0, 50) + '...' : product.title} </h6>
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
