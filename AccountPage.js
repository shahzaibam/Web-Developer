import React from 'react'
import firstImg3 from '../images/img-3.jpg'


export function AccountPage() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4 list-group">
                        <h3 className="mb-4 ml-3">Manage Orders</h3>
                        <a href="#" className="list-group-item ml-3" style={{ width: '230px', padding: '2px' }}>All Orders</a>
                        <a href="#" className="list-group-item ml-3" style={{ width: '230px', padding: '2px' }}>Manage Feedback</a>
                        <a href="#" className="list-group-item ml-3" style={{ width: '230px', padding: '2px' }}>My Coupons</a>
                        <a href="#" className="list-group-item ml-3" style={{ width: '230px', padding: '2px' }}>My Shipping Address</a>
                    </div>


                    <div className="col-sm-8 list-group">
                        <h3 className="mb-4 ml-3">Order Status</h3>
                        <div href="#" className="border ml-3 mb-3 p-3" style={{ padding: '2px' }}>
                            <img className="col-sm-1" src='https://todosobrecamisetas.com/wp-content/uploads/psg-2019-20-4th-kit-3.jpg' alt="" height="30px" width="30px"/>
                            <span className="col-sm-1 mr-5 ml-2">PSG Official Shirt</span>
                            <span className="col-sm-4 ml-5">1</span>
                            <span className="col-sm-2 ml-4">89.99$</span>
                            <a className="col-sm-2 border bg-success ml-4 mr-4 p-2 text-white" style={{textDecoration: 'none'}} href="#" role="button">Placed</a>
                            <a className="col-sm-2" href="#">One message</a>
                        
                        </div>


                        <div href="#" className="border ml-3 mb-3 p-3" style={{ padding: '2px' }}>
                            <img className="col-sm-1" src='https://images.sportsdirect.com/images/products/37736330_l.jpg' alt="" height="30px" width="30px"/>
                            <span className="col-sm-1 mr-5 ml-2">JUVE Offical Shirt</span>
                            <span className="col-sm-4 ml-5">1</span>
                            <span className="col-sm-2 ml-4">49.99$</span>
                            <a className="col-sm-2 border bg-success ml-4 mr-4 p-2 text-white" style={{textDecoration: 'none'}} href="#" role="button">Placed</a>
                            <a className="col-sm-2" href="#">One message</a>
                        
                        </div>

                        <div href="#" className="border ml-3 mb-3 p-3" style={{ padding: '2px' }}>
                            <img className="col-sm-1" src='https://todosobrecamisetas.com/wp-content/uploads/psg-2019-20-4th-kit-3.jpg' alt="" height="30px" width="30px"/>
                            <span className="col-sm-1 mr-5 ml-2">PSG Official Shirt</span>
                            <span className="col-sm-4 ml-5">1</span>
                            <span className="col-sm-2 ml-4">89.99$</span>
                            <a className="col-sm-2 border bg-danger ml-4 mr-4 p-2 text-white" style={{textDecoration: 'none'}} href="#" role="button">track</a>
                            <a className="col-sm-2" href="#">One message</a>
                        
                        </div>


                        <div href="#" className="border ml-3 mb-3 p-3" style={{ padding: '2px' }}>
                            <img className="col-sm-1" src='https://todosobrecamisetas.com/wp-content/uploads/psg-2019-20-4th-kit-3.jpg' alt="" height="30px" width="30px"/>
                            <span className="col-sm-1 mr-5 ml-2">PSG Official Shirt</span>
                            <span className="col-sm-4 ml-5">1</span>
                            <span className="col-sm-2 ml-4">89.99$</span>
                            <a className="col-sm-2 border bg-danger ml-4 mr-4 p-2 text-white" style={{textDecoration: 'none'}} href="#" role="button">track</a>
                            <a className="col-sm-2" href="#">One message</a>
                        
                        </div>


                        <div href="#" className="border ml-3 mb-3 p-3" style={{ padding: '2px' }}>
                            <img className="col-sm-1" src='https://todosobrecamisetas.com/wp-content/uploads/psg-2019-20-4th-kit-3.jpg' alt="" height="30px" width="30px"/>
                            <span className="col-sm-1 mr-5 ml-2">PSG Official Shirt</span>
                            <span className="col-sm-4 ml-5">1</span>
                            <span className="col-sm-2 ml-4">89.99$</span>
                            <a className="col-sm-2 border bg-danger ml-4 mr-4 p-2 text-white" style={{textDecoration: 'none'}} href="#" role="button">track</a>
                            <a className="col-sm-2" href="#">One message</a>
                        
                        </div>
                    </div>



                </div>


            </div>
        </div>
    )
}

export default AccountPage
