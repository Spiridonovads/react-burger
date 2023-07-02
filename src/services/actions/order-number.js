import {getOrderNumberData } from "../../utile/api";
import { DELETE_CONSTRUCTOR } from "../actions/constructor-data";

export const GET_ORDER_NUMBER_REQUEST = 'GET_ORDER_NUMBER_REQUEST';
export const GET_ORDER_NUMBER_SUCCESS = 'GET_ORDER_NUMBER_SUCCESS';
export const GET_ORDER_NUMBER_FAILED = 'GET_ORDER_NUMBER_FAILED';


export function getOrderNumber(orderProducts) {
  return function(dispatch) {
    dispatch({
      type: GET_ORDER_NUMBER_REQUEST
    });
    getOrderNumberData(orderProducts)
    .then(data => dispatch({
      type: GET_ORDER_NUMBER_SUCCESS,
      data: data.order
    }))
    .then(() => dispatch({type: DELETE_CONSTRUCTOR}))
		.catch(() =>  dispatch({
      type: GET_ORDER_NUMBER_FAILED
    }))
    };
  };