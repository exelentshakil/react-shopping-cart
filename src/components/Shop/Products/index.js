import React, { useContext } from 'react'

// contexts

import {ProductContext} from '../../../contexts/ProductContext'

// components
import Product from './Product'

// css
import './products.css'

const Products = () => {

    const [products, dispatch] = useContext(ProductContext);

    return (
        <div className="products">
            {
                products.map(product => (
                    <Product key={product.id} id={product.id} name={product.name} subText={product.subText} price={product.price} qty={product.qty}/>
                ))
            }
        </div>
    )
}

export default Products
