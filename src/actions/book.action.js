import axios from "../helpers/axios";
import { bookConstant } from "./constants"
export const getAllBook = () => {
    return async (dispatch) => {
        dispatch({
            type: bookConstant.GET_ALL_BOOK_REQUEST
        })
        const res = await axios.post('/book/getAllBook')

        if (res.status === 200) {
            const { book } = res.data
            dispatch({
                type: bookConstant.GET_ALL_BOOK_SUCCESS,
                payload: { book }
            })
        }
        if (res.status === 400) {

        }
    }
}


export const getProductDetailsById = (payload) => {
    return async dispatch => {
        dispatch({ type: bookConstant.GET_PRODUCT_DETAILS_BY_ID_REQUEST });
        let res;
        try {
            const { bookId } = payload.params;
            res = await axios.get(`/book/${bookId}`);
            dispatch({
                type: bookConstant.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
                payload: { productDetails: res.data.book }
            });

        } catch (error) {
            dispatch({
                type: bookConstant.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
                payload: { error: res.data.error }
            });
        }

    }
}

