import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'


export function NavBar() {
    return (
        <>
            <div>


                <nav className="navigation-bar bg-dark">

                    <ul className="d-flex list-inline">

                        {/***********Nav bar logo***********/}
                        <li>

                            <Link to="/" className="nav-link h6 ml-3 mr-3 text-white web-title" style={{marginTop:'19px'}}>EShopping</Link>




                        </li>





                        <div className="d-flex align-middle m-4 ml-auto" >

                            <li>
                                <Link to="#" className="nav-link dropdown-toggle text-white" style={{fontSize:'11px'}} id="toggleMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Categories
                                </Link>

                                <div className="dropdown-menu" aria-labelledby="toggleMenu">
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
                                </div>
                            </li>

                            <li className="nav-item">
                                <Link to="#" className="nav-link text-white" style={{fontSize:'11px'}} >Products</Link>
                            </li>

                            <li className="nav-item signup-toggle">
                                <Link to="#" className="nav-link text-white" style={{fontSize:'10.8px'}} data-toggle="modal" data-target="#toggleTarget" >Sign In</Link>
 
                                <div className="modal fade" id="toggleTarget" aria-labelledby="toggleTargetLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" style={{width: '400px', marginLeft: '38%', marginRight: '38%'}}>
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h3 className="modal-title" id="toggleTargetLabel">Sign In</h3>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
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
                                            <div className="modal-footer social-links">
                                                <Link to="https://www.facebook.com/">Facebook</Link>
                                                <Link to="https://www.twitter.com/">Twitter</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
 
                            <div className="icons d-flex ml-auto">
                                <li>
                                    <Link to="#" className="nav-link text-white" style={{fontSize:'10px'}}><FontAwesomeIcon icon={faCartArrowDown} /></Link>
                                </li>

                                <li>
                                    <Link to="/account" className="nav-link text-white" style={{fontSize:'10px'}}><FontAwesomeIcon icon={faUser} /></Link>

                                </li>
                            </div>

                        </div>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar
