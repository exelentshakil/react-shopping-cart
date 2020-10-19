import React, { useContext } from 'react'

//components
import CartItem from './CartItem'

// contexts
import {ProductContext} from '../../contexts/ProductContext'

const Cart = () => {

    const [products, dispatch] = useContext( ProductContext );

    const fetchCartItems = () => {
        const items = products.filter(product => product.qty !== 0);
        return items;
    }
    return (
        <div>
            <h1>Cart</h1>
            {fetchCartItems().map(item => (
                <CartItem key={item.id} id={item.id} name={item.name} price={item.price} qty={item.qty}/>
            ))}
        </div>
    )
}

export default Cart
