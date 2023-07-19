import { v4 as uuid } from "uuid";
import { getIngredientsData } from "../../utile/api";
import { AppDispatch } from "../types/types";

export const DELETE_ITEM: "DELETE_ITEM" = "DELETE_ITEM";
export const ADD_ITEM: "ADD_ITEM" = "ADD_ITEM";
export const ADD_ITEM_PROPERTIES: "ADD_ITEM_PROPERTIES" = "ADD_ITEM_PROPERTIES";
export const CONSTRUCTOR_ORDER_SORT: "CONSTRUCTOR_ORDER_SORT" =
  "CONSTRUCTOR_ORDER_SORT";
export const GET_CONSTRUCTOR_INGREDIENTS_REQUEST: "GET_CONSTRUCTOR_INGREDIENTS_REQUEST" =
  "GET_CONSTRUCTOR_INGREDIENTS_REQUEST";
export const GET_CONSTRUCTOR_INGREDIENTS_SUCCESS: "GET_CONSTRUCTOR_INGREDIENTS_SUCCESS" =
  "GET_CONSTRUCTOR_INGREDIENTS_SUCCESS";
export const GET_CONSTRUCTOR_INGREDIENTS_FAILED: "GET_CONSTRUCTOR_INGREDIENTS_FAILED" =
  "GET_CONSTRUCTOR_INGREDIENTS_FAILED";
export const BUN: "BUN" = "BUN";
export const DELETE_CONSTRUCTOR: "DELETE_CONSTRUCTOR" = "DELETE_CONSTRUCTOR";

export interface IDeleteItem {
  readonly type: typeof DELETE_ITEM;
  readonly id: string;
  readonly index: string;
}
export const deleteItem = (data: {
  _id: string;
  uniqueId: string;
}): IDeleteItem => ({
  type: DELETE_ITEM,
  id: data._id,
  index: data.uniqueId,
});

export interface IAddItem {
  readonly type: typeof ADD_ITEM;
  readonly payload: object;
}
export const addItem = (item: object): IAddItem => ({
  type: ADD_ITEM,
  payload: {
    ...item,
    uniqueId: uuid(),
  },
});

export interface IAddItemProperties {
  readonly type: typeof ADD_ITEM_PROPERTIES;
}
export const addItemProperties = (): IAddItemProperties => ({
  type: ADD_ITEM_PROPERTIES,
});

export interface IConstructorOrderSort {
  readonly type: typeof CONSTRUCTOR_ORDER_SORT;
  readonly value: object[];
}
export const constructorOrderSort = (
  items: object[]
): IConstructorOrderSort => ({
  type: CONSTRUCTOR_ORDER_SORT,
  value: items,
});

export interface IGetConstructorIngredientsRequest {
  readonly type: typeof GET_CONSTRUCTOR_INGREDIENTS_REQUEST;
}
export const getConstructorIngredientsRequest =
  (): IGetConstructorIngredientsRequest => ({
    type: GET_CONSTRUCTOR_INGREDIENTS_REQUEST,
  });

export interface IGetConstructorIngredientsSuccess {
  readonly type: typeof GET_CONSTRUCTOR_INGREDIENTS_SUCCESS;
  data: any;
}
export const getConstructorIngredientsSuccess = (data: {
  data: object;
}): IGetConstructorIngredientsSuccess => ({
  type: GET_CONSTRUCTOR_INGREDIENTS_SUCCESS,
  data: data.data,
});

export interface IGetConstructorIngredientsFailed {
  readonly type: typeof GET_CONSTRUCTOR_INGREDIENTS_FAILED;
}
export const getConstructorIngredientsFailed =
  (): IGetConstructorIngredientsFailed => ({
    type: GET_CONSTRUCTOR_INGREDIENTS_FAILED,
  });

export interface IBun {
  readonly type: typeof BUN;
  readonly ingredient: {name: string};
}
export const Bun = (item: any): IBun => ({
  type: BUN,
  ingredient: item,
});

export interface IDeleteConstructor {
  readonly type: typeof DELETE_CONSTRUCTOR;
}
export const deleteConctructor = (): IDeleteConstructor => ({
  type: DELETE_CONSTRUCTOR,
});

export type TConstructorActions =
  | IDeleteItem
  | IAddItem
  | IAddItemProperties
  | IConstructorOrderSort
  | IGetConstructorIngredientsRequest
  | IGetConstructorIngredientsSuccess
  | IGetConstructorIngredientsFailed
  | IBun
  | IDeleteConstructor;

export function getConstructorIngredients() {
  return function (dispatch: AppDispatch) {
    dispatch(getConstructorIngredientsRequest());
    getIngredientsData()
      .then((data) => dispatch(getConstructorIngredientsSuccess(data)))
      .catch(() => dispatch(getConstructorIngredientsFailed()));
  };
}

export const addIngridient = (item: object) => {
  return function (dispatch: AppDispatch) {
    dispatch(addItem(item));
  };
};
