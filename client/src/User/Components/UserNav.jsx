import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/context'
import Cookies from 'js-cookie';
import { DiAtom } from 'react-icons/di';
import './usernav.css'
import { VscAccount } from 'react-icons/vsc'
import { BsHandbagFill } from 'react-icons/bs'
import { useState } from 'react';
import { useJwt } from 'react-jwt';
import { useEffect } from 'react';



export default function UserNav() {

    const { state, dispatch } = useContext(GlobalContext)

    const [userName, setuserName] = useState('');
    const { decodedToken } = useJwt(Cookies.get('token'));

    useEffect(() => {
        if (decodedToken) {
            setuserName(decodedToken.username);
        }
    }, [decodedToken]);


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
                        <div className="side icon-link icon-4">
                            <Link to='/profile' className="link-text fs-4 text-dark d-flex align-items-center gap-3">
                              <span className='text-decoration-done fs-5'>{userName} </span> <VscAccount />
                            </Link>
                            <Link to='/cart' className='link-text text-dark fs-4 d-flex align-items-center gap-3'>
                                <BsHandbagFill /></Link>

                            <button className="btn btn-secondary"
                                onClick={() => {
                                    Cookies.remove('token')
                                    dispatch({ type: "USER_LOGOUT" })
                                }}

                            >Sign Out</button>
                        </div>
                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
