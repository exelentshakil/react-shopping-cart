import React, { useContext } from 'react'

import {ProductContext} from '../../../../contexts/ProductContext'
import { ACTIONS } from '../../../../reducers/productReducer';

// css
import './product.css'

const Product = ({id, name, subText, price, qty}) => {
    const [products, dispatch] = useContext(ProductContext);

    const addToBag = () => {
        dispatch( {type: ACTIONS.ADD_TO_CART, payload: {id: id}})
        console.log( products );
    }

    return (
        <div className="product">
            <h4>{ name }</h4>
            <p>{subText}</p>
            <span>${price}</span>

            <div className={qty > 0 ? "qty show" : "hide"}>
                <button>-</button>
                <span>{qty}</span>
                <button>+</button>
            </div>

            <button className={qty === 0 ? "show" : "hide"} onClick={addToBag}>Add to bag</button>
        </div>
    )
}

export default Product
