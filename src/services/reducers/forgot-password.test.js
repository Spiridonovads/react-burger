import { initialState, forgotReducer } from "./forgot-password-data";
import * as type from "../actions/forgot-password-data";

describe("forgot", () => {
  it("forgot initialState", () => {
    expect(forgotReducer(undefined, {})).toEqual({
      data: {},
      error: false,
      loading: false,
    });
  });

  it("GET_FORGOT_REQUEST", () => {
    const action = {
      type: type.GET_FORGOT_REQUEST,
    };

    expect(forgotReducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("GET_FORGOT_SUCCESS", () => {
    const action = {
      type: type.GET_FORGOT_SUCCESS,
			data: [{1:1}]
    };

    expect(forgotReducer(initialState, action)).toEqual({
      ...initialState,
      data: [{1:1}]
    });
  });

  it("GET_FORGOT_FAILED", () => {
    const action = {
      type: type.GET_FORGOT_FAILED
    };

    expect(forgotReducer(initialState, action)).toEqual({
      ...initialState,
      error: true
    });
  });

  it("DELETE_FORGOT", () => {
    const action = {
      type: type.DELETE_FORGOT
    };

    expect(forgotReducer(initialState, action)).toEqual({
      ...initialState,
      data: {}
    });
  });

});
