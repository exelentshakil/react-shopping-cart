import React, { createContext, useReducer, useEffect } from 'react'
import axios from '../axios'

import { ACTIONS, productReducer } from '../reducers/productReducer'

export const ProductContext = createContext();


export const ProductProvider = (props) => {

    const initialize = {
        data: [],
        links: {
            first: "",
            last: "",
            prev: "",
            next: ""
        },
        meta: {
            current_page: 0,
            from: 0,
            last_page: 0,
            per_page: 0,
            to: 0,
            total: 0
        }
    };

    const [products, dispatch] = useReducer(productReducer, initialize);

    const fetchProducts = async () => {
            const req = await axios.get('/products');
            dispatch({ type: ACTIONS.FETCH_PRODUCTS, payload:{ products: req.data }})
        }

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log('Logging data from context %O', products);

    return (
        <ProductContext.Provider value={[products, dispatch]}>
            {props.children}
        </ProductContext.Provider>

    )
}
