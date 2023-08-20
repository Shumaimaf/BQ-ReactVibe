import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link, json } from 'react-router-dom';

export default function CategoriesSection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(json => setCategories(json.data));
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        {categories.map((val, key) => (
          <div className="col-md-4" key={key}>
            <Link className="text-decoration-none" to={`/products/categories/${val}`}>
              <Card className="my-2 d-flex flex-column justify-content-between" style={{fontFamily: "'Cinzel', serif"}}>
                
                <Card.Body>
                  <Card.Title className='text-center fs-5'>{val.replace('-', ' ')}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
