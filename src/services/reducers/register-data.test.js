import { registerReducer, initialState } from "./register-data";
import * as type from "../actions/register-data";

describe("register", () => {
  it("register initialState", () => {
    expect(registerReducer(undefined, {})).toEqual({
      data: {},
      error: false,
      loading: false,
    });
  });

  it("GET_REGISTER_REQUEST", () => {
    const action = {
      type: type.GET_REGISTER_REQUEST,
    };

    expect(registerReducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("GET_REGISTER_SUCCESS", () => {
    const action = {
      type: type.GET_REGISTER_SUCCESS,
      data: { 1: 1 },
    };

    expect(registerReducer(initialState, action)).toEqual({
      ...initialState,
      data: { 1: 1 },
    });
  });

  it("GET_REGISTER_FAILED", () => {
    const action = {
      type: type.GET_REGISTER_FAILED,
    };

    expect(registerReducer(initialState, action)).toEqual({
      ...initialState,
      error: true
    });
  });

  it("DELETE_REGISTER", () => {
    const action = {
      type: type.DELETE_REGISTER,
    };

    expect(registerReducer(initialState, action)).toEqual({
      ...initialState,
      data: {}
    });
  });
});
