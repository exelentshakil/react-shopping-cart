import React, {createContext, useReducer} from 'react'
// reducers
import { productReducer } from '../reducers/productReducer'

export const ProductContext = createContext();


export const ProductProvider = (props) => {

    const initializeProducts = [
        {
            id: 10,
            name: 'Onion (Deshi)',
            subText: '500g',
            price: 40,
            qty: 0,
        },
        {
            id: 11,
            name: 'Onion (Indian)',
            subText: '500g',
            price: 30,
            qty: 0,
        },
        {
            id: 12,
            name: 'Alu (Deshi)',
            subText: '1 kg',
            price: 80,
            qty: 0,
        },
        {
            id: 13,
            name: 'Alu (Indian)',
            subText: '1 kg',
            price: 60,
            qty: 0,
        },
        {
            id: 14,
            name: 'Meat (Beef)',
            subText: '1 kg',
            price: 600,
            qty: 0,
        },
        {
            id: 15,
            name: 'Chicken (Dressed)',
            subText: '1 kg',
            price: 200,
            qty: 0,
        },
    ];

    const [products, dispatch] = useReducer(productReducer, initializeProducts);

    return (
        <ProductContext.Provider value={[products, dispatch]}>
            {props.children}
        </ProductContext.Provider>

    )
}
