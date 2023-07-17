import {GET_ORDER_NUMBER_REQUEST, GET_ORDER_NUMBER_SUCCESS, GET_ORDER_NUMBER_FAILED} from '../actions/order-number';
import { TOrderActions } from '../actions/order-number';

type TState = {
  data: object[],
  error: boolean,
  loading: boolean
}

const initialState = {
	data: [],
  error: false,
  loading: false
};

export const orderNumberReducer = (state = initialState, action:TOrderActions):TState => {
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
