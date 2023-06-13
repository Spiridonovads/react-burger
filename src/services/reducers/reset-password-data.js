import {GET_RESET_REQUEST, GET_RESET_SUCCESS, GET_RESET_FAILED} from '../actions/reset-password-data'
	
	const initialState = {
		data: [],
		error: false,
		loading: false
	};
	
	export const resetReducer = (state = initialState, action) => {
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
			default: {
				return state;
			}
		}
	};
	