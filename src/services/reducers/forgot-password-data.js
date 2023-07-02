import {GET_FORGOT_REQUEST, GET_FORGOT_SUCCESS, GET_FORGOT_FAILED, DELETE_FORGOT} from '../actions/forgot-password-data'
	
	const initialState = {
		data: [],
		error: false,
		loading: false
	};
	
	export const forgotReducer = (state = initialState, action) => {
		switch (action.type) {
			case GET_FORGOT_REQUEST: {
				return {
					...state,
					loading: true
				};
			}
			case GET_FORGOT_SUCCESS: {
				return { ...state, error: false, data: action.data, loading: false };
			}
			case GET_FORGOT_FAILED: {
				return { ...state, error: true, loading: false };
			}
			case DELETE_FORGOT: {
				return { ...state, data: [] };
			}
			default: {
				return state;
			}
		}
	};