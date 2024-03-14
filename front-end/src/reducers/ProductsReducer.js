const inisialState = {
    products: [],
    product: [],
    error: null,
}

const productsReducer = (state = inisialState, action) => {
    switch(action.type) {
        case "FETCH_PRODUCTS_SUCCESS":
            return {...state, products: action.payload,};
        case "FETCH_PRODUCT_SUCCESS":
            return {...state, product: action.payload,};
        case "FETCH_PRODUCTS_ERROR": {
            return {
                ...state,
                error: action.error,
            };
        }
        default:
            return state;
    }
}

export default productsReducer;