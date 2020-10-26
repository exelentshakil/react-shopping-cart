import axios from '../axios'

export const ACTIONS = {
    FETCH_PRODUCTS: 'fetch_products',
    ADD_TO_CART: 'add_to_cart',
    REMOVE_FROM_CART: 'remove_from_cart',
    PLUS_QTY: 'plus_qty',
    MINUS_QTY: 'munus_qty',
}

export const productReducer = (products, action) => {

    switch (action.type) {
        case ACTIONS.ADD_TO_CART:
            return addToCart(products, action.payload);
        case ACTIONS.FETCH_PRODUCTS:
            return fetchProducts(products, action.payload.products);
        default:
            return new Error();
    }
}

const addToCart = async (products, payload) => {
}

const fetchProducts = (products, newProducts) => {
    return Object.assign({}, products, newProducts);
}
