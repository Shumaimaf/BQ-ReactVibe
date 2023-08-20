import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Pagination from 'react-bootstrap/Pagination';


export default function Products() {
  const [products, setProducts] = useState([]);
  const [activePage, setActivePage] = useState(1);


  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(json => setProducts(json.data.products))
  }, []);

  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    console.log("Active Page:", pageNumber);
  };



  const productsPerPage = 4;
  const startIndex = (activePage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToDisplay = products.slice(startIndex, endIndex);

  let items = [];
  for (let number = 1; number <= 8; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => handlePageChange(number)} // Call handlePageChange on click
      >
        {number}
      </Pagination.Item>,
    );
  }



  return (
    <div className='container' style={{ fontFamily: "'Playfair', serif", textTransform: "capitalize", marginBottom: "10px", paddingBottom: "50px" }}>
      <div className="my-5 text-center">
        <h2 className='fs-2 text-center mb-1 align-items-center fw-semibold' style={{ fontFamily: "'Cinzel', serif", width: "100%", letterSpacing: '2px' }}>Products</h2>
        <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, nihil.</p>
      </div>
      <div>
        <Pagination className="text-center align-items-center justify-content-center">{items}</Pagination>
      </div>
      <div className="row">
        {productsToDisplay.map((val, key) => (
          <div className="col-md-3 my-3" key={key}>
            <div className="card">
              <img
                src={val.thumbnail}
                className="card-img-top"
                alt="..."
                style={{
                  width: '100%',
                  height: '30vh',
                  objectFit: 'contain'
                }}
              />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="card-title">{val.title.length > 20 ? val.title.slice(0, 20) + '...' : val.title} </h6>
                  <span className="badge bg-secondary">{val.price}$</span>
                </div>
                <p className="card-text">
                  {val.description.length > 50 ? val.description.slice(0, 50) + '...' : val.description}
                </p>
                <div className="d-grid">
                  <Link to={`/products/${val.id}`} className="button mt-2 btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
