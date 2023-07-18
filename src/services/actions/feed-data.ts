import { getFeedData } from "../../utile/api";
import { AppDispatch } from "../types/types";

export const SET_FEED_MODAL_STATE: "SET_MODAL_STATE" = "SET_MODAL_STATE";
export const GET_FEED_ORDER: "GET_FEED_ORDER" = "GET_FEED_ORDER";

export interface ISetFeedModalState {
  readonly type: typeof SET_FEED_MODAL_STATE;
  readonly modalState: boolean;
}
export const setFeedModalState = (bool: boolean): ISetFeedModalState => ({
  type: SET_FEED_MODAL_STATE,
  modalState: bool,
});

export interface IGetFeedOrder {
  readonly type: typeof GET_FEED_ORDER;
  readonly order: object;
}
export const getFeedOrder = (data: object): IGetFeedOrder => ({
  type: GET_FEED_ORDER,
  order: data,
});

export type TFeedActions =
  | ISetFeedModalState
  | IGetFeedOrder;
