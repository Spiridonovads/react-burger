import {GET_REGISTER_REQUEST, GET_REGISTER_SUCCESS, GET_REGISTER_FAILED, DELETE_REGISTER} from '../actions/register-data'
	
	const initialState = {
		data: [],
		error: false,
		loading: false
	};
	
	export const registerReducer = (state = initialState, action) => {
		switch (action.type) {
			case GET_REGISTER_REQUEST: {
				return {
					...state,
					loading: true
				};
			}
			case GET_REGISTER_SUCCESS: {
				console.log(action.data)
				return { ...state, error: false, data: action.data, loading: false };
			}
			case GET_REGISTER_FAILED: {
				return { ...state, error: true, loading: false };
			}
			case DELETE_REGISTER: {
				return { ...state, DATA: []};
			}
			default: {
				return state;
			}
		}
	};
	