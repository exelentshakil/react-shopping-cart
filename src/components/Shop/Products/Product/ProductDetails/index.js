import React, {useContext, useState, useEffect} from 'react'

import { useParams } from 'react-router-dom'
import { ProductContext } from '../../../../../contexts/ProductContext'
import Detail from './Detail'

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const [products, dispatch] = useContext(ProductContext);

    let { id } = useParams();


    console.log(product);

    return (
        <div>
            {
                products.data.map(p => p.id == id ? <Detail product={p}/> : false)
            }
        </div>
    )
}

export default ProductDetails

