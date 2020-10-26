import React from 'react'
import {Link} from 'react-router-dom'

const index = ({product}) => {
    return (
        <>
            <Link to="/shop"><h1>Back</h1></Link>
            <div className="details">
                <div className="description">
            <img src={product.image} alt=""/>
            <h4 className="name">{product.name}</h4>
            <p className="subText">{product.subText} kg</p>
            <h1 className="price">৳{product.price}</h1>
            <p className="description">{product.description}</p>
            </div>
            </div>
            <div className="author">
                <h1>Seller: {product.user.name}</h1>
                <p>Email: <a href={`mailto:${product.user.email}`}>{product.user.email}</a></p>
            </div>
        </>

    )
}

export default index
