import axios from "axios";

export const getProducts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:3333/products/all");
            dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: response.data });
        } catch (error) {
            dispatch({ type: "FETCH_PRODUCTS_ERROR", error: error.message });
        }
    };
}

export const getSingleProduct = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3333/products/${id}`);
            dispatch({ type: "FETCH_PRODUCT_SUCCESS", payload: response.data[0] });
        } catch (error) {
            dispatch({ type: "FETCH_PRODUCTS_ERROR", error: error.message });
        }
    };
}