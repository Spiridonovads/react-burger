import {getOrderNumberData } from "../../utile/api";
import { checkResponse } from "../../utile/res-ok";

export const GET_ORDER_NUMBER_REQUEST = 'GET_ORDER_NUMBER_REQUEST';
export const GET_ORDER_NUMBER_SUCCESS = 'GET_ORDER_NUMBER_SUCCESS';
export const GET_ORDER_NUMBER_FAILED = 'GET_ORDER_NUMBER_FAILED';


export function getOrderNumber(orderProducts) {
  return function(dispatch) {
    dispatch({
      type: GET_ORDER_NUMBER_REQUEST
    });
    getOrderNumberData(orderProducts)
    .then(res => checkResponse(res))
    .then(data => dispatch({
      type: GET_ORDER_NUMBER_SUCCESS,
      data: data.order
    }))
		.catch(() =>  dispatch({
      type: GET_ORDER_NUMBER_FAILED
    }))
    };
  };