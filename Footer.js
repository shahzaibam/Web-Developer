import React from 'react';
import logo from './SoundCloud-Logo.png';


export const Footer = () => {
    return (
        <div class="gray-div-footer bg-dark">
            <div class="container">
                <footer class="page-footer font-small blue pt-4">


                    <div class="container-fluid text-center text-md-left footer-fsec">


                        <div class="row">

                            <div class="left-content-footer col-md-6 mt-md-0 mt-3">

                                <a className="navbar-brand" href="./Aboutus"><img className="logo" src={logo} alt="" /></a>
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.

                                </p>

                            </div>

                            <hr class="clearfix w-100 d-md-none pb-3" />

                            <div class="col-md-3 mb-md-0 mb-3">

                                <h4 class="text-uppercase font-weight-bold links-heading-footer">LINKS</h4>

                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#!">HOME</a>
                                    </li>
                                    <li>
                                        <a href="#!">ABOUT ME</a>
                                    </li>
                                    <li>
                                        <a href="#!">SERVICES</a>
                                    </li>
                                    <li>
                                        <a href="#!">HOW WORK</a>
                                    </li>
                                </ul>

                            </div>

                            <div class="col-md-3 mb-md-0 mb-3">

                                <h5 class="text-uppercase text-uppercase font-weight-bold moreLinks-heading-footer">more links</h5>

                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#!">PORTFOLIO</a>
                                    </li>
                                    <li>
                                        <a href="#!">CONTACT</a>
                                    </li>
                                    <li>
                                        <a href="#!">WHO WE ARE?</a>
                                    </li>
                                    <li>
                                        <a href="#!">WHERE WE ARE?</a>
                                    </li>
                                </ul>

                            </div>

                        </div>

                    </div>



                </footer>
            </div>
            <div class="footer-copyright text-center py-3 bg-dark">© 2020 Copyright:
                <a href="https://github.com/shebiraaja/"> ShebiRaaja</a>
            </div>
        </div>
    )
}

export default Footer
