import * as actionTypes from '../constants/productConstants';
import axios from 'axiosexport';

export const getProduct = () => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_PRODUCTS_REQUEST})
        const {data} = await axois.get("api/products");
        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload: 
            error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_PRODUCTS_DETAILS_REQUEST})
        const {data} = await axois.get(`/api/product/${id}`);
        dispatch({
            type: actionTypes.GET_PRODUCTS_DETAILS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload: 
            error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type: 
        actionTypes.GET_PRODUCT_DETAILS_RESET
    });
};