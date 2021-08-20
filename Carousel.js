import React from 'react'
import firstImg from '../images/img-1.jpg'
import firstImg2 from '../images/img-6.jpg'
import firstImg3 from '../images/img-3.jpg'

export function Carousel() {
    return (
        <div className="container-3 mt-4 mr-2 ml-1">

            <div id="carouselIndicator" className="carousel slide ml-2" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li className="#carouselIndicator" data-slide-to="0" className="active"></li>
                    <li className="#carouselIndicator" data-slide-to="1"></li>
                    <li className="#carouselIndicator" data-slide-to="2"></li>
                    <li className="#carouselIndicator" data-slide-to="3"></li>
                    <li className="#carouselIndicator" data-slide-to="4"></li>
                    <li className="#carouselIndicator" data-slide-to="5"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://static.dw.com/image/54650513_303.jpg" alt="" height='400px' />
                    </div>

                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F669976398-850x560.jpeg" alt="" height='400px' />
                    </div>

                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://s3.amazonaws.com/futbolsapiensbucket/wp-content/uploads/2020/10/juventus.jpg" alt="" height='400px' />
                    </div>

                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://thumb.besoccer.com/media/img_news/afp_fr_6a42277fccb737e5302595e8009201b4b02a337a.jpg?size=1000x&ext=jpeg" alt="" height='400px' />
                    </div>

                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://i1.wp.com/www.sopitas.com/wp-content/uploads/2020/02/Manchester-City-fue-expulsado-de-la-Champions-League-por-dos-anos.png" alt="" height='400px' />
                    </div>

                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://forzaitalianfootball.com/wp-content/uploads/2020/03/Napoli-Torino-2.png" alt="" height='400px' />
                    </div>

                    
                </div>

                <a className="carousel-control-prev" href="#carouselIndicator" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" role="button" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>

                <a className="carousel-control-next" href="#carouselIndicator" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carousel
