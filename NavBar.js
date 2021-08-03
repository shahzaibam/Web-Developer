import React from 'react'
import logo from './SoundCloud-Logo.png';
//REACT FONTAWESOME IMPORT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router';

export const NavBar = () => {
    return (
        <div className="container-of-nav">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="./Aboutus"><img className="logo" src={logo} alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <FontAwesomeIcon icon={faBars} style={{color: '#fff', fontSize: '2rem'}} />
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="">Home <span className="sr-only">(current)</span></a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">About me</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Services</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">How Work</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Portfolio</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Contact</a>
                                </li>

                            </ul> 
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar
