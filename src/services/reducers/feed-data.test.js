import { initialState, feedReducer } from "./feed-data";
import * as type from "../actions/feed-data";

describe("feed", () => {
  it("feed initialState", () => {
    expect(feedReducer(undefined, {})).toEqual({
      data: [],
      error: false,
      loading: false,
      modalState: false,
      order: {},
    });
  });

  it("SET_FEED_MODAL_STATE", () => {
    const action = {
      type: type.SET_FEED_MODAL_STATE,
			modalState: true
    };

    expect(feedReducer(initialState, action)).toEqual({
      ...initialState,
      modalState: true
    });
  });

  it("GET_FEED_ORDER", () => {
    const action = {
      type: type.GET_FEED_ORDER,
			order: {1:1}
    };

    expect(feedReducer(initialState, action)).toEqual({
      ...initialState,
      order: {1:1}
    });
  });
});
