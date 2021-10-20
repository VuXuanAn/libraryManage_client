import { bookConstant } from "../actions/constants";

const initialState = {
    book: [],
    productDetails: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case bookConstant.GET_ALL_BOOK_SUCCESS:
            state = {
                ...state,
                book: action.payload.book
            }
            break;
        case bookConstant.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
            state = {
                ...state,
                productDetails: action.payload.productDetails,
            };
            break;
    }
    return state;
}