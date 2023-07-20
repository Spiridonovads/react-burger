import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENT_INFO,
  SET_MODAL_STATE,
} from "../actions/ingredients-data";
import { TIngredientsActions } from "../actions/ingredients-data";
import { TArray } from "./constructor-data";

type TState = {
  data: Array<TArray>;
  error: boolean;
  loading: boolean;
  ingredient: object;
  modalState: boolean;
};

const initialState: TState = {
  data: [],
  error: false,
  loading: false,
  ingredient: {},
  modalState: false,
};

export const ingredietsReducer = (
  state = initialState,
  action: TIngredientsActions
): TState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return { ...state, error: false, data: action.data, loading: false };
    }
    case GET_INGREDIENTS_FAILED: {
      return { ...state, error: true, loading: false };
    }
    case GET_INGREDIENT_INFO: {
      return {
        ...state,
        ingredient: action.el,
      };
    }
    case SET_MODAL_STATE: {
      return {
        ...state,
        modalState: action.bool,
      };
    }
    default: {
      return state;
    }
  }
};
