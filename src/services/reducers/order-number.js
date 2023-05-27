import {GET_ORDER_NUMBER_REQUEST, GET_ORDER_NUMBER_SUCCESS, GET_ORDER_NUMBER_FAILED} from '../actions/order-number';

const initialState = {
	data: {},
  error: false,
  loading: false
};

export const OrderNumberReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_NUMBER_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_ORDER_NUMBER_SUCCESS: {
      return { ...state, error: false, data: action.data, loading: false };
    }
    case GET_ORDER_NUMBER_FAILED: {
      return { ...state, error: true, loading: false };
    }
    default: {
      return state;
    }
  }
};
