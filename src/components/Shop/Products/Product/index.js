import React, { useContext, useState } from 'react'

import {ProductContext} from '../../../../contexts/ProductContext'
import { ACTIONS } from '../../../../reducers/productReducer';
import {Link} from 'react-router-dom'

// css
import './product.css'

const Product = ({ id, name, subText, price, qty, image }) => {

    const [products, dispatch] = useContext(ProductContext);
    const [cartQty, setCartQty] = useState(0);

    const addToBag = () => {
        dispatch( {type: ACTIONS.ADD_TO_CART, payload: {id: id, qty: cartQty}})
    }

    const minusQty = (e) => {

        setCartQty(prevQty => prevQty = prevQty - 1);
    }

    const plusQty = (e) => {

        setCartQty(prevQty => prevQty = prevQty + 1);
    }

    return (
        <Link to={`/products/${id}`}>
            <div className="product">
            <div className="image"><img src={image} alt=""/></div>
                <div className="detail">
                    <h4>{ name }</h4>
                    <p>{subText}</p>
                    <span>${price}</span>
            </div>

            {/* className={qty > 0 ? "qty show" : "hide"} */}

            <div className={qty > 0 ? "qty show" : "hide"}>
                <button onClick={minusQty}>-</button>
                <span>{cartQty > 0 ? cartQty : 0 }</span>
                <button onClick={plusQty}>+</button>
            </div>

            <button className={qty === 0 ? "show" : "hide"} onClick={addToBag}>Add to bag</button>
            </div>
            </Link>
    )
}

export default Product
