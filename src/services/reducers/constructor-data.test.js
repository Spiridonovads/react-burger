import { constructorReducer, initialState } from "./constructor-data";
import * as type from "../actions/constructor-data";

describe("constructor", () => {
  it("constructor initialState", () => {
    expect(constructorReducer(undefined, {})).toEqual({
      data: [],
      error: false,
      loading: false,
      order: [],
      sortOrder: [],
      dragIngredient: {},
    });
  });

  it("GET_CONSTRUCTOR_INGREDIENTS_REQUEST", () => {
    const action = {
      type: type.GET_CONSTRUCTOR_INGREDIENTS_REQUEST,
    };

    expect(constructorReducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("GET_CONSTRUCTOR_INGREDIENTS_SUCCESS", () => {
    const action = {
      type: type.GET_CONSTRUCTOR_INGREDIENTS_SUCCESS,
      data: [{ 1: 1, 2: 2, 3: 3 }],
    };

    expect(constructorReducer(initialState, action)).toEqual({
      ...initialState,
      data: [{ 1: 1, 2: 2, 3: 3, qty: 0 }],
    });
  });

  it("GET_CONSTRUCTOR_INGREDIENTS_FAILED", () => {
    const action = {
      type: type.GET_CONSTRUCTOR_INGREDIENTS_FAILED,
    };

    expect(constructorReducer(initialState, action)).toEqual({
      ...initialState,
      error: true,
    });
  });

  it("CONSTRUCTOR_ORDER_SORT", () => {
    const action = {
      type: type.CONSTRUCTOR_ORDER_SORT,
      value: [1],
    };

    expect(constructorReducer(initialState, action)).toEqual({
      ...initialState,
      sortOrder: [1],
    });
  });

  it("ADD_ITEM", () => {
    const action = {
      type: type.ADD_ITEM,
      payload: { 1: 1 },
    };

    expect(constructorReducer(initialState, action)).toEqual({
      ...initialState,
      dragIngredient: { 1: 1 },
      order: [{ 1: 1 }],
    });
  });

  it("ADD_ITEM_PROPERTIES", () => {
    const action = {
      type: type.ADD_ITEM_PROPERTIES,
    };

    expect(constructorReducer(initialState, action)).toEqual({
      ...initialState,
      data: [],
    });
  });

  it("DELETE_ITEM", () => {
    const action = {
      type: type.DELETE_ITEM,
      id: 0,
      index: 0,
    };

    expect(constructorReducer(initialState, action)).toEqual({
      ...initialState,
      data: [],
      order: [],
    });
  });

  it("DELETE_CONSTRUCTOR", () => {
    const action = {
      type: type.DELETE_CONSTRUCTOR,
    };

    expect(constructorReducer(initialState, action)).toEqual({
      ...initialState,
      data: [],
      order: [],
      sortOrder: [],
    });
  });

  it("BUN", () => {
    const action = {
      type: type.BUN,
      ingredient: { type: "bun" },
    };

    expect(constructorReducer(initialState, action)).toEqual({
      ...initialState,
      order: [{ type: "bun" }],
    });
  });
});
