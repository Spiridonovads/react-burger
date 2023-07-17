import {getOrderNumberData } from "../../utile/api";
import { AppDispatch } from "../types/types";
import { deleteConctructor } from "./constructor-data";

export const GET_ORDER_NUMBER_REQUEST: 'GET_ORDER_NUMBER_REQUEST' = 'GET_ORDER_NUMBER_REQUEST';
export const GET_ORDER_NUMBER_SUCCESS: 'GET_ORDER_NUMBER_SUCCESS' = 'GET_ORDER_NUMBER_SUCCESS';
export const GET_ORDER_NUMBER_FAILED: 'GET_ORDER_NUMBER_FAILED' = 'GET_ORDER_NUMBER_FAILED';

export interface IGetOrderNumberRequest {
  readonly type: typeof GET_ORDER_NUMBER_REQUEST
}
export const getOrderNumberRequest = (): IGetOrderNumberRequest => ({
  type: GET_ORDER_NUMBER_REQUEST
})

export interface IGetOrderNumberSuccess {
  readonly type: typeof GET_ORDER_NUMBER_SUCCESS;
  readonly data: object[]
}
export const getOrderNumberSuccess = (data: any): IGetOrderNumberSuccess => ({
  type: GET_ORDER_NUMBER_SUCCESS,
  data: data.order
})

export interface IGetOrderNumberFailed {
  readonly type: typeof GET_ORDER_NUMBER_FAILED
}
export const getLoginFailed = (): IGetOrderNumberFailed => ({
  type: GET_ORDER_NUMBER_FAILED
})

export type TOrderActions = 
|IGetOrderNumberRequest
|IGetOrderNumberSuccess
|IGetOrderNumberFailed

export function getOrderNumber(orderProducts: object[]) {
  return function(dispatch: AppDispatch) {
    dispatch(getOrderNumberRequest);
    getOrderNumberData(orderProducts)
    .then(data => dispatch(getOrderNumberSuccess(data)))
    .then(() => dispatch(deleteConctructor()))
		.catch(() =>  dispatch(getLoginFailed()))
    };
  };