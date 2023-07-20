import { getOrderNumberData } from "../../utile/api";
import { AppDispatch } from "../types/types";

export const GET_ORDER_NUMBER_REQUEST: "GET_ORDER_NUMBER_REQUEST" =
  "GET_ORDER_NUMBER_REQUEST";
export const GET_ORDER_NUMBER_SUCCESS: "GET_ORDER_NUMBER_SUCCESS" =
  "GET_ORDER_NUMBER_SUCCESS";
export const GET_ORDER_NUMBER_FAILED: "GET_ORDER_NUMBER_FAILED" =
  "GET_ORDER_NUMBER_FAILED";
export const ORDER_NUMBER_DELETE: "ORDER_NUMBER_DELETE" = "ORDER_NUMBER_DELETE";

export interface IGetOrderNumberRequest {
  readonly type: typeof GET_ORDER_NUMBER_REQUEST;
}
export const getOrderNumberRequest = (): IGetOrderNumberRequest => ({
  type: GET_ORDER_NUMBER_REQUEST,
});

export interface IGetOrderNumberSuccess {
  readonly type: typeof GET_ORDER_NUMBER_SUCCESS;
  readonly data: object;
}
export const getOrderNumberSuccess = (data: {order: {}}): IGetOrderNumberSuccess => ({
  type: GET_ORDER_NUMBER_SUCCESS,
  data: data.order,
});

export interface IGetOrderNumberFailed {
  readonly type: typeof GET_ORDER_NUMBER_FAILED;
}
export const getOrderNumberFailed = (): IGetOrderNumberFailed => ({
  type: GET_ORDER_NUMBER_FAILED,
});

export interface IOrderNumberDelete {
  readonly type: typeof ORDER_NUMBER_DELETE;
}
export const orderNumberDelete = (): IOrderNumberDelete => ({
  type: ORDER_NUMBER_DELETE,
});

export type TOrderActions =
  | IGetOrderNumberRequest
  | IGetOrderNumberSuccess
  | IGetOrderNumberFailed
  | IOrderNumberDelete;

export function getOrderNumber(orderProducts: string[]) {
  return function (dispatch: AppDispatch) {
    dispatch(getOrderNumberRequest);
    getOrderNumberData(orderProducts)
      .then((data) => dispatch(getOrderNumberSuccess(data)))
      .catch(() => dispatch(getOrderNumberFailed()));
  };
}
