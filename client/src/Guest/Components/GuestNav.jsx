import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { DiAtom } from 'react-icons/di';

export default function GuestNav() {
    return (
        <Navbar expand="lg" sticky="top" className="navbar bg-white shadow p-2">
            <Container fluid>
                <Link className="text-decoration-none text-center mx-5 fs-2 fw-semibold d-flex align-items-center text-black" to="/">
                    React<span className='text-danger'>Vibe</span> <DiAtom />
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" className="navbar-links " />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mx-auto me-5 fs-3 d-flex link-container">
                        <Link className="icon-link icon-1 text-black" to="/"><span className="link-text">Home</span></Link>
                        <Link className="icon-link icon-1 text-black" to="/products/categories"><span className="link-text">Categories</span></Link>
                        <Link className="icon-link icon-2 text-black" to="/products"><span className="link-text">Products</span></Link>
                        <Nav className="ms-auto me-5 d-flex link-container fw-semibold">
                            <Link to='/login'>
                                <span className='btn btn-secondary'>Login</span>
                            </Link>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}
