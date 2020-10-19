export const ACTIONS = {
    ADD_TO_CART: 'add_to_cart',
    REMOVE_FROM_CART: 'remove_from_cart',
    PLUS_QTY: 'plus_qty',
    MINUS_QTY: 'munus_qty',
}

export const productReducer = (products, action) => {

    switch (action.type) {
        case ACTIONS.ADD_TO_CART:
            return addToCart(products, action.payload.id);
        default:
            return new Error();
    }
}

const addToCart = (products, id) => products.map(product => product.id === id ? { ...product, qty: product.qty + 1 } : product);

