import { type } from "os";
import { getIngredientsData } from "../../utile/api";
import { AppDispatch } from "../types/types";

export const GET_INGREDIENTS_REQUEST: "GET_INGREDIENTS_REQUEST" =
  "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS: "GET_INGREDIENTS_SUCCESS" =
  "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED: "GET_INGREDIENTS_FAILED" =
  "GET_INGREDIENTS_FAILED";
export const GET_INGREDIENT_INFO: "GET_INGREDIENT_INFO" = "GET_INGREDIENT_INFO";
export const SET_MODAL_STATE: "SET_MODAL_STATE" = "SET_MODAL_STATE";

export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}
export const getIngredientsRequest = (): IGetIngredientsRequest => ({
  type: GET_INGREDIENTS_REQUEST,
});

export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly data: object[];
}
export const getIngredientsSuccess = (data: any): IGetIngredientsSuccess => ({
  type: GET_INGREDIENTS_SUCCESS,
  data: data.data,
});

export interface IGetIngredientsFailed {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}
export const getIngredientsFailed = (): IGetIngredientsFailed => ({
  type: GET_INGREDIENTS_FAILED,
});

export interface IGetIngredientInfo {
  readonly type: typeof GET_INGREDIENT_INFO;
  readonly el: object;
}
export const getIngredientInfo = (data: object): IGetIngredientInfo => ({
  type: GET_INGREDIENT_INFO,
  el: data,
});

export interface ISetModalState {
  readonly type: typeof SET_MODAL_STATE;
  readonly bool: boolean;
}
export const setModalState = (bool: boolean): ISetModalState => ({
  type: SET_MODAL_STATE,
  bool: bool,
});

export type TIngredientsActions =
  | IGetIngredientsRequest
  | IGetIngredientsSuccess
  | IGetIngredientsFailed
  | IGetIngredientInfo
  | ISetModalState;

export function getIngredients() {
  return function (dispatch: AppDispatch) {
    dispatch(getIngredientsRequest());
    getIngredientsData()
      .then((data) => dispatch(getIngredientsSuccess(data)))
      .catch(() => dispatch(getIngredientsFailed()));
  };
}
