import React from 'react'

export const Portfolio = () => {
    return (
        <div className="container-gray-portfolio">
            <div className="container container-gray-child-div-portfolio">

                <div class="row">
                    <div class="col portfolio-heading">
                        <h3 className="display-4">Portfolio</h3>
                    </div>
                </div>
                <div class="row card-rows-portfolio">
                    <div class="col">
                        <div class="card" style={{ width: '15rem' }}>
                            <img src="https://thumbs.dreamstime.com/b/programmer-web-developer-concept-working-computer-programmer-web-developer-concept-working-computer-coding-125837126.jpg" class="card-img-top" alt="..." height="150px" width="120px" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ width: "15rem" }}>
                            <img src="https://www.how-to-build-websites.com/wp-content/uploads/2015/06/best-computer-for-web-design.png" class="card-img-top" alt="..." height="150px" width="120px" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ width: "15rem" }}>
                            <img src="https://www.manuduque.com/wp-content/uploads/2019/10/social-media-marketing.png" class="card-img-top" alt="..." height="150px" width="120px" />
                        </div>
                    </div>

                    <div class="col">
                    <div class="card" style={{ width: "15rem" }}>
                        <img src="https://www.manuduque.com/wp-content/uploads/2019/10/social-media-marketing.png" class="card-img-top" alt="..." height="150px" width="120px" />
                    </div>
                </div>

                </div>
            </div>

        </div>
    )
}

export default Portfolio
