import { initialState, orderNumberReducer } from "./order-number";
import * as type from "../actions/order-number";

describe("order", () => {
  it("order initialState", () => {
    expect(orderNumberReducer(undefined, {})).toEqual({
      data: {},
      error: false,
      loading: false,
    });
  });

  it("GET_ORDER_NUMBER_REQUEST", () => {
    const action = {
      type: type.GET_ORDER_NUMBER_REQUEST,
    };

    expect(orderNumberReducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("GET_ORDER_NUMBER_SUCCESS", () => {
    const action = {
      type: type.GET_ORDER_NUMBER_SUCCESS,
      data: { 1: 1 },
    };

    expect(orderNumberReducer(initialState, action)).toEqual({
      ...initialState,
      data: { 1: 1 },
    });
  });

  it("GET_ORDER_NUMBER_FAILED", () => {
    const action = {
      type: type.GET_ORDER_NUMBER_FAILED
    };

    expect(orderNumberReducer(initialState, action)).toEqual({
      ...initialState,
      error: true
    });
  });

  it("ORDER_NUMBER_DELETE", () => {
    const action = {
      type: type.ORDER_NUMBER_DELETE
    };

    expect(orderNumberReducer(initialState, action)).toEqual({
      ...initialState,
      data: {}
    });
  });
});
