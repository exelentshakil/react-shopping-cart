import React from 'react'

// css
import './cartitem.css'

const CartItem = ({id, name, price, qty}) => {
    return (
        <div className="cart-item">
            <div className="cart-qty">
                <button>-</button>
                    <span>{qty}</span>
                <button>+</button>
            </div>
            <h4>{name}</h4>
            <p>${price * qty}</p>
            <button>x</button>
        </div>
    )
}

export default CartItem
