import React from 'react'
import calc from './calc1.PNG';

export const Happyclients = () => {
    return (
        <div>
            <div className="container-gray-happy">
                <div className="container container-gray-child-div-happy">
                    <div className="heading-myfriends">
                        <h1 className="display-4">My Happy Clients</h1>
                    </div>

                    <div className="container container-clients">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div className="div-of-clients">
                                        <img class="d-block" src="https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg" alt="First slide" />
                                        <h5>Billy Stokes</h5>
                                        <p>
                                            Hi, I’m Loren! I’m a small business owner, and I learned to code through Codecademy.
                                        </p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className="div-of-clients">
                                        <img class="d-block" src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg" alt="Second slide" />
                                        <h5>Irina Smith</h5>
                                        <p>
                                            Hi, I’m Loren! I’m a small business owner, and I learned to code through Codecademy.
                                        </p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className="div-of-clients">
                                        <img class="d-block" src="https://www.alucoildesign.com/assets/pages/media/profile/profile_user.jpg" alt="Third slide" />
                                        <h5>Charles Brian</h5>
                                        <p>
                                            Hi, I’m Loren! I’m a small business owner, and I learned to code through Codecademy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>


               
            </div>


        </div>


    )
}

export default Happyclients
