import {GET_RESET_REQUEST, GET_RESET_SUCCESS, GET_RESET_FAILED, DELETE_RESET} from '../actions/reset-password-data'
import { TResetActions } from '../actions/reset-password-data';

	type TState = {
		data: object,
		error: boolean,
		loading: boolean
	}

	const initialState: TState = {
		data: {},
		error: false,
		loading: false
	};
	
	export const resetReducer = (state = initialState, action:TResetActions):TState => {
		switch (action.type) {
			case GET_RESET_REQUEST: {
				return {
					...state,
					loading: true
				};
			}
			case GET_RESET_SUCCESS: {
				return { ...state, error: false, data: action.data, loading: false };
			}
			case GET_RESET_FAILED: {
				return { ...state, error: true, loading: false };
			}
			case DELETE_RESET: {
				return { ...state, data: {} };
			}
			default: {
				return state;
			}
		}
	};
	