import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'


export function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="nav-link h6 ml-3 mr-3 text-white web-title" style={{ marginTop: '19px' }}>EShopping</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-space-between" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-white home-nav mr-3" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white mr-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="#" className="dropdown-item">Appareal & Accessories</Link>
                                    <Link to="#" className="dropdown-item">Baby Products</Link>
                                    <Link to="#" className="dropdown-item">Beauty & Health</Link>
                                    <Link to="#" className="dropdown-item">Electronics</Link>
                                    <Link to="#" className="dropdown-item">Furniture</Link>
                                    <Link to="#" className="dropdown-item">Home & Garden</Link>
                                    <Link to="#" className="dropdown-item">Luggage and Bags</Link>
                                    <Link to="#" className="dropdown-item">Shoes</Link>
                                    <Link to="#" className="dropdown-item">Sports and Entertainment</Link>
                                    <Link to="#" className="dropdown-item"></Link>
                                    <Link to="#" className="dropdown-item">All Categories</Link>
                                </ul>
                            </li>




                            <Link type="button" className="nav-link text-white mr-3" data-bs-toggle="modal" data-bs-target="#SignInModal">
                                Sign In
                            </Link>

                            <div className="modal fade" id="SignInModal" aria-labelledby="SignInModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="SignInModalLabel">Modal title</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                <FontAwesomeIcon icon={faTimes}/>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <h6>Sign In with your email address</h6>
                                            <form className="form">
                                                <input className="w-100 mt-2 mb-2" type="text" placeholder="Email address" /><br />
                                                <input className="w-100 mt-2 mb-2" type="password" placeholder="Password" /><br />
                                                <input type="checkbox" id="RememberCheckBox" value="Remember" />&nbsp;
                                                <label for="RememberCheckBox">Remember me</label><br />
                                                <input className="btn btn-primary w-100" type="submit" value="Sign In" />

                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <Link to="https://www.facebook.com/">Facebook</Link>
                                            <Link to="https://www.twitter.com/">Twitter</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <li>
                                <Link to="#" className="nav-link nav-link-menu text-white mr-3" style={{ fontSize: '10px' }}><FontAwesomeIcon icon={faCartArrowDown} /></Link>
                            </li>

                            <li>
                                <Link to="/account" className="nav-link nav-link-menu text-white mr-3" style={{ fontSize: '10px' }}><FontAwesomeIcon icon={faUser} /></Link>

                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavBar
