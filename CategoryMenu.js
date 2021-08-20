import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';



export function CategoryMenu() {
    return (
        <div className="container mt-5">
            <div className="row" style={{ marginLeft: '6rem' }}>
                <div className="col-sm-4 list-group categorias">
                    <h3 className="mb-4 ml-3">Categories</h3>
                    <Link to="#" className="list-group-item ml-3" style={{ width: '230px', padding: '10px' }}>Appareal & Accessories</Link>
                    <Link to="#" className="list-group-item ml-3" style={{ width: '230px', padding: '10px' }}>Baby Products</Link>
                    <Link to="#" className="list-group-item ml-3" style={{ width: '230px', padding: '10px' }}>Beauty & Health</Link>
                    <Link to="#" className="list-group-item ml-3" style={{ width: '230px', padding: '10px' }}>Electronics</Link>
                    <Link to="#" className="list-group-item ml-3" style={{ width: '230px', padding: '10px' }}>Furniture</Link>
                    <Link to="#" className="list-group-item ml-3" style={{ width: '230px', padding: '10px' }}>Home & Garden</Link>
                    <Link to="#" className="list-group-item ml-3" style={{ width: '230px', padding: '10px' }}>Luggage and Bags</Link>
                    <Link to="#" className="list-group-item ml-3" style={{ width: '230px', padding: '10px' }}>Shoes</Link>
                    <Link to="#" className="list-group-item ml-3" style={{ width: '230px', padding: '10px' }}>Sports and Entertainment</Link>
                    <Link to="#" className="list-group-item ml-3" style={{ width: '230px', padding: '10px' }}>All Categories</Link>
                </div>



                <div className="card PSG" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                    <img src="https://todosobrecamisetas.com/wp-content/uploads/psg-2019-20-4th-kit-3.jpg" alt="" className="w-100" height="220px" />
                    <div className="body" style={{ padding: '2rem 2rem 0rem 2rem' }}>
                        <h6 className="title">PSG Kit <Link className="ml-5">89.99$</Link> </h6>
                        <Link to="">16 Reviews</Link>
                        <p className="text mt-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </p>
                        <Link to="/productPSG" className="btn btn-dark mb-3">Shop Now</Link>

                    </div>
                </div>


                <div className="card MADRID" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                    <img src="https://www.futbolemotion.com/imagesarticulos/158496/grandes/camiseta-adidas-real-madrid-primera-equipacion-2021-2022-mujer-white-0.jpg" alt="" className="w-100" height="220px" />
                    <div className="body" style={{ padding: '2rem 2rem 0rem 2rem' }}>
                        <h6 className="title">Madrid Kit<Link className="ml-4">68.99$</Link> </h6>
                        <Link to="">7 Reviews</Link>
                        <p className="text mt-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </p>
                        <Link to="/productMadrid" className="btn btn-dark mb-3">Shop Now</Link>

                    </div>
                </div>


                <div className="card JUVE" style={{ marginLeft: '7rem', marginRight: '7rem', marginBottom: '2rem', marginTop: '2rem' }}>
                    <img src="https://images.sportsdirect.com/images/products/37736330_l.jpg" alt="" className="w-100" height="220px" />
                    <div className="body" style={{ padding: '2rem 2rem 0rem 2rem' }}>
                        <h6 className="title">Juve Kit<Link className="ml-5">76.99$</Link> </h6>
                        <Link to="">9 Reviews</Link>
                        <p className="text mt-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </p>
                        <Link to="/productJuve" className="btn btn-dark mb-3">Shop Now</Link>

                    </div>
                </div>


                <div className="card fcbclub" style={{ marginLeft: '7rem', marginRight: '7rem', marginBottom: '2rem', marginTop: '2rem' }}>
                    <img src="https://www.amstadion.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/p/r/prz_d_16.jpg" alt="" className="w-100" height="220px" />
                    <div className="body" style={{ padding: '2rem 2rem 0rem 2rem' }}>
                        <h6 className="title">FCB Kit<Link className="ml-5">89.99$</Link> </h6>
                        <Link to="">18 Reviews</Link>
                        <p className="text mt-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </p>
                        <Link to="/productFCB" className="btn btn-dark mb-3">Shop Now</Link>

                    </div>
                </div>


                <div className="card CITY" style={{ marginLeft: '7rem', marginRight: '7rem', marginBottom: '2rem', marginTop: '2rem' }}>
                    <img src="https://www.goalinn.com/f/13761/137611141/puma-camiseta-manchester-city-fc-primera-equipacion-20-21-junior.jpg" alt="" className="w-100" height="220px" />
                    <div className="body" style={{ padding: '2rem 2rem 0rem 2rem' }}>
                        <h6 className="title">M.City Kit <Link className="ml-4">55.99$</Link> </h6>
                        <Link to="">4 Reviews</Link>
                        <p className="text mt-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </p>
                        <Link to="/productCity" className="btn btn-dark mb-3">Shop Now</Link>

                    </div>
                </div>


                <div className="card NAPOLES" style={{ marginLeft: '7rem', marginRight: '7rem', marginBottom: '2rem', marginTop: '2rem' }}>
                    <img src="https://www.footballkitarchive.com/images/2020/12/04/mp9N4isCVMou9oR/ssc-napoli-2020-21-fourth.jpg" alt="" className="w-100" height="220px" />
                    <div className="body" style={{ padding: '2rem 2rem 0rem 2rem' }}>
                        <h6 className="title">Napol Kit <Link className="ml-4">48.99$</Link> </h6>
                        <Link to="">4 Reviews</Link>
                        <p className="text mt-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </p>
                        <Link to="/productNapo" className="btn btn-dark mb-3">Shop Now</Link>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default CategoryMenu
