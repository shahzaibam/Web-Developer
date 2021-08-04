import React from 'react'
import calc from './calc1.PNG';

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
                            <img src="https://webdevtrick.com/wp-content/uploads/basic-javascript-calculator-with-source-code.jpg" class="card-img-top" alt="..." height="150px" width="120px" />

                            <button type="button" class="btn btn-primary btn-popup" data-toggle="modal" data-target="#exampleModal">
                                View More
                            </button>

                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            ...
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ width: "15rem" }}>
                            <img src="https://jsbeginners.com/wp-content/uploads/2019/09/todolist-project-bluelime.png" class="card-img-top" alt="..." height="150px" width="120px" />
                            <button type="button" class="btn btn-primary btn-popup" data-toggle="modal" data-target="#exampleModal">
                                View More
                            </button>

                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            ...
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ width: "15rem" }}>
                            <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..." height="150px" width="120px" />

                            <button type="button" class="btn btn-primary btn-popup" data-toggle="modal" data-target="#exampleModal">
                                View More
                            </button>

                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title" id="exampleModalLabel">Modal</h1>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <img src={calc} alt="" />
                                            <h1>holaaoos</h1>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Clse</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={{ width: "15rem" }}>
                            <img src="https://wlearnsmart.com/wp-content/uploads/2020/05/form-validation.png" class="card-img-top" alt="..." height="150px" width="120px" />
                            <button type="button" class="btn btn-primary btn-popup" data-toggle="modal" data-target="#exampleModal">
                                View More
                            </button>

                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <img src={calc} alt="" />
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    )
}

export default Portfolio
