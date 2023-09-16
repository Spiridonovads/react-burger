import { initialState, ingredietsReducer } from "./ingredients-data";
import * as type from "../actions/ingredients-data";

describe("ingredient", () => {
  it("ingredient initialState", () => {
    expect(ingredietsReducer(undefined, {})).toEqual({
      data: [],
      error: false,
      loading: false,
      ingredient: {},
      modalState: false,
    });
  });

	it("GET_INGREDIENTS_REQUEST", () => {
    const action = {
      type: type.GET_INGREDIENTS_REQUEST,
    };

    expect(ingredietsReducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });

	it("GET_INGREDIENTS_SUCCESS", () => {
    const action = {
      type: type.GET_INGREDIENTS_SUCCESS,
			data: [{1:1}]
    };

    expect(ingredietsReducer(initialState, action)).toEqual({
      ...initialState,
      data: [{1:1}]
    });
  });

	it("GET_INGREDIENTS_FAILED", () => {
    const action = {
      type: type.GET_INGREDIENTS_FAILED,
    };

    expect(ingredietsReducer(initialState, action)).toEqual({
      ...initialState,
      error: true
    });
  });

	it("GET_INGREDIENT_INFO", () => {
    const action = {
      type: type.GET_INGREDIENT_INFO,
			el: {1:1}
    };

    expect(ingredietsReducer(initialState, action)).toEqual({
      ...initialState,
      ingredient: {1:1}
    });
  });

	it("SET_MODAL_STATE", () => {
    const action = {
      type: type.SET_MODAL_STATE,
			bool: true
    };

    expect(ingredietsReducer(initialState, action)).toEqual({
      ...initialState,
      modalState: true
    });
  });

});
