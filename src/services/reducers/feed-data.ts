import {GET_FEED_REQUEST, GET_FEED_SUCCESS, GET_FEED_FAILED, SET_FEED_MODAL_STATE, GET_FEED_ORDER} from '../actions/feed-data'
import { TFeedActions } from '../actions/feed-data';

	export type TState ={
		data: object,
		error: boolean,
		loading: boolean
		modalState: boolean,
		order: object
	}

	const initialState: TState = {
		data: [],
		error: false,
		loading: false,
		modalState: false,
		order: {}
	};
	
	export const feedReducer = (state = initialState, action: TFeedActions):TState => {
		switch (action.type) {
			case GET_FEED_REQUEST: {
				return {
					...state,
					loading: true
				};
			}
			case GET_FEED_SUCCESS: {
				return { ...state, error: false, data: action.data, loading: false };
			}
			case GET_FEED_FAILED: {
				return { ...state, error: true, loading: false };
			}
			case SET_FEED_MODAL_STATE: {
				return { ...state, modalState: action.modalState };
			}
			case GET_FEED_ORDER: {
				return { ...state, order: action.order };
			}
			default: {
				return state;
			}
		}
	};