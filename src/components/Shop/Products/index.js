import React, { useContext, useEffect } from 'react'
import axios from '../../../axios'
import {ProductContext} from '../../../contexts/ProductContext'
import { ACTIONS } from '../../../reducers/productReducer'
import Product from './Product'

import './products.css'

const Products = () => {

    const [products, dispatch] = useContext(ProductContext);

    console.log('Logging data from products %O', products);

    const nextPage = (e) => {
        getData(e.target.value);
    }

    const prevPage = (e) => {
        getData(e.target.value);
    }

    const firstPage = (e) => {
        getData(e.target.value);
    }

    const lastPage = (e) => {
        getData(e.target.value);
    }

    const getData = (url) => {
        const req = axios.get(url);
        req.then(res => console.log(res.data));
        req.then(res => dispatch({ type: ACTIONS.FETCH_PRODUCTS, payload: { products: res.data } }))
            .catch (e => console.log(e));
    }

    return (
        <>
            <p>Showing {products.meta.from} to {products.meta.to} of total {products.meta.total}</p>
        <div className="products">
            {
                products.data.map(product => (

                    <Product id={product.id} name={product.name} subText={product.subText} price={product.price} qty={product.qty} key={product.id} image={product.image}/>
                ))

            }

        </div>
            <div className="pagination">
            <button disabled={products.meta.current_page === 1 ? true : null} onClick={firstPage} value={products.links.first}>First</button>
            <button disabled={products.links.prev === null ? true : null} onClick={prevPage} value={products.links.prev} >Prev</button>
            <button disabled={products.links.next === null ? true: null} onClick={nextPage} value={products.links.next}>Next</button>
            <button disabled={products.meta.current_page === products.meta.last_page ? true : null} onClick={lastPage} value={products.links.last}>Last</button>
        </div>

        </>

    )
}

export default Products
