import { initialState, wsReducer } from "./socket-data";
import * as type from "../actions/socket-data";

describe("socket", () => {
  it("socket initialState", () => {
    expect(wsReducer(undefined, {})).toEqual({
      wsConnected: false,
      data: {},
    });
  });

  it("WS_CONNECTION_SUCCESS", () => {
    const action = {
      type: type.WS_CONNECTION_SUCCESS,
    };

    expect(wsReducer(initialState, action)).toEqual({
      ...initialState,
      wsConnected: true,
    });
  });

  it("WS_CONNECTION_ERROR", () => {
    const action = {
      type: type.WS_CONNECTION_ERROR,
      payload: "kjh",
    };

    expect(wsReducer(initialState, action)).toEqual({
      ...initialState,
      error: "kjh",
      wsConnected: false,
    });
  });

  it("WS_CONNECTION_CLOSED", () => {
    const action = {
      type: type.WS_CONNECTION_CLOSED,
    };

    expect(wsReducer(initialState, action)).toEqual({
      ...initialState,
      wsConnected: false,
    });
  });

  it("WS_GET_MESSAGE", () => {
    const action = {
      type: type.WS_GET_MESSAGE,
			payload: "jk"
    };

    expect(wsReducer(initialState, action)).toEqual({
      ...initialState,
      data: 'jk'
    });
  });
});
