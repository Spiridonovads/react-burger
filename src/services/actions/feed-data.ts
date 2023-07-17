import { getFeedData } from "../../utile/api";
import { AppDispatch } from "../types/types";

export const GET_FEED_REQUEST:'GET_FEED_REQUEST' = 'GET_FEED_REQUEST';
export const GET_FEED_SUCCESS: 'GET_FEED_SUCCESS' = 'GET_FEED_SUCCESS';
export const GET_FEED_FAILED: 'GET_FEED_FAILED' = 'GET_FEED_FAILED';
export const SET_FEED_MODAL_STATE: 'SET_MODAL_STATE' = 'SET_MODAL_STATE'
export const GET_FEED_ORDER: 'GET_FEED_ORDER' = 'GET_FEED_ORDER'

export interface IGetFeedRequest {
  readonly type: typeof GET_FEED_REQUEST
}
export const getFeedRequest = (): IGetFeedRequest => ({
  type: GET_FEED_REQUEST 
})

export interface IGetFeedSuccess {
  readonly type: typeof GET_FEED_SUCCESS;
  readonly data: object
}
export const getFeedSuccess = (data: object): IGetFeedSuccess => ({
  type: GET_FEED_SUCCESS,
  data: data
})

export interface IGetFeedFailed {
  readonly type: typeof GET_FEED_FAILED
}
export const getFeedFailed = (): IGetFeedFailed => ({
  type: GET_FEED_FAILED
})

export interface ISetFeedModalState {
  readonly type: typeof SET_FEED_MODAL_STATE,
  readonly modalState: boolean
}
export const setFeedModalState = (bool: boolean): ISetFeedModalState => ({
  type: SET_FEED_MODAL_STATE,
  modalState: bool
})

export interface IGetFeedOrder {
  readonly type: typeof GET_FEED_ORDER,
  readonly order: object
}
export const  getFeedOrder = (data: object): IGetFeedOrder => ({
  type: GET_FEED_ORDER,
  order: data
})

export type TFeedActions = 
|IGetFeedRequest
|IGetFeedSuccess
|IGetFeedFailed
|ISetFeedModalState
|IGetFeedOrder

export function getFeed() {
  return function(dispatch: AppDispatch) {
    dispatch(getFeedRequest());
    getFeedData()
    .then(data => dispatch(getFeedSuccess(data)))
		.catch(() =>  dispatch(getFeedFailed()))
    };
  };