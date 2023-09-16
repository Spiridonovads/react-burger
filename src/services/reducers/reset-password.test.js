import { resetReducer, initialState } from "./reset-password-data";
import * as type from "../actions/reset-password-data"

describe("reset", () => {
  it("reset initialState", () => {
    expect(resetReducer(undefined, {})).toEqual({
      data: {},
      error: false,
      loading: false,
    });
  });

  it("GET_RESET_REQUEST", () => {
    const action = {
      type: type.GET_RESET_REQUEST,
    };

    expect(resetReducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("GET_RESET_SUCCESS", () => {
    const action = {
      type: type.GET_RESET_SUCCESS,
      data: { 1: 1 },
    };

    expect(resetReducer(initialState, action)).toEqual({
      ...initialState,
      data: { 1: 1 },
    });
  });

  it("GET_RESET_FAILED", () => {
    const action = {
      type: type.GET_RESET_FAILED,
    };

    expect(resetReducer(initialState, action)).toEqual({
      ...initialState,
      error: true
    });
  });

  it("DELETE_RESET", () => {
    const action = {
      type: type.DELETE_RESET,
    };

    expect(resetReducer(initialState, action)).toEqual({
      ...initialState,
      data: {}
    });
  });
});