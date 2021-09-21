import React from 'react'

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://d1ez3020z2uu9b.cloudfront.net/imagecache/blog-photos/17596_Fill_800_800.jpg" class="d-block w-100" alt="..." height="400px"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://thelandscapephotoguy.com/wp-content/uploads/2019/01/landscape%20new%20zealand%20S-shape.jpg" class="d-block w-100" alt="..." height="400px"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://store-images.s-microsoft.com/image/apps.13801.13777613854529434.257959da-c3a7-4c0c-bc46-4eab0d9b3b45.74fd1573-5988-4d86-bbaa-911fc4e99efe?mode=scale&q=90&h=1080&w=1920" class="d-block w-100" alt="..." height="400px"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel
