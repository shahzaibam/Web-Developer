import React from 'react';
import Typed from 'react-typed';

export const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web Development and Web Designs</h1>
                <Typed
                    className='typed-text'
                    strings={['Web Development', 'Web Design', 'Social Media Marketing']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />

                <a href='#' className='btn-main-offer'>Contact Me</a>
            </div>
        </div>
    )
}

export default Header
