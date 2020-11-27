import * as actionTypes from "../actions/actionTypes";

export const productListReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case actionTypes.PRODUCT_LIST_REQUEST:
			return { loading: true, products: [] };
		case actionTypes.PRODUCT_LIST_SUCCESS:
			return { loading: false, products: action.payload };
		case actionTypes.PRODUCT_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const productDetailsReducer = (
	state = { product: { reviews: [] } },
	action
) => {
	switch (action.type) {
		case actionTypes.PRODUCT_DETAILS_REQUEST:
			return { loading: true, ...state };
		case actionTypes.PRODUCT_DETAILS_SUCCESS:
			return { loading: false, product: action.payload };
		case actionTypes.PRODUCT_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const productDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.PRODUCT_DELETE_REQUEST:
			return { loading: true, ...state };
		case actionTypes.PRODUCT_DELETE_SUCCESS:
			return { loading: false, success: true };
		case actionTypes.PRODUCT_DELETE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
