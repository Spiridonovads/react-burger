import {GET_PERSON_REQUEST, GET_PERSON_SUCCESS, GET_PERSON_FAILED, GET_CHANGE_PERSON_REQUEST, GET_CHANGE_PERSON_SUCCESS, 
GET_CHANGE_PERSON_FAILED} from '../actions/person-data'

	const initialState = {
		data: [],
		error: false,
		loading: false,
		changeError: false,
		changeLoading: false
	};
	
	export const personReducer = (state = initialState, action) => {
		switch (action.type) {
			case GET_PERSON_REQUEST: {
				return {
					...state,
					loading: true
				};
			}
			case GET_PERSON_SUCCESS: {
				return { ...state, error: false, data: action.data, loading: false };
			}
			case GET_PERSON_FAILED: {
				return { ...state, error: true, loading: false };
			}
			case GET_CHANGE_PERSON_REQUEST: {
				return {
					...state,
					changeLoading: true
				};
			}
			case GET_CHANGE_PERSON_SUCCESS: {
				console.log(action.data)
				return { ...state, changeError: false, data: action.data, changeLoading: false };
			}
			case GET_CHANGE_PERSON_FAILED: {
				return { ...state, changeError: true, changeLoading: false };
			}
			default: {
				return state;
			}
		}
	};