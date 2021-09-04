import React from 'react'
import { useCart } from 'react-use-cart'

export const ItemCard = (props) => {

    const { addItem } = useCart

    return (
        <div>
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                <div className="card p-0 overflow-hidden h-100 shadow">
                    <img src={props.img} className="card-img-top img-fluid" />
                    <div className="card-body text-center">
                        <h5 className="card-title">{props.title}</h5>
                        <h5 className="card-title">{props.price}</h5>
                        <button className="btn btn-success" onClick={() => addItem(props.item)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
