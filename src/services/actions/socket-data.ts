export const WS_CONNECTION_START_FEED: "WS_CONNECTION_START_FEED" = "WS_CONNECTION_START_FEED";
export const WS_CONNECTION_START_PROFILE: "WS_CONNECTION_START_PROFILE" = "WS_CONNECTION_START_PROFILE";
export const WS_CONNECTION_SUCCESS: "WS_CONNECTION_SUCCESS" =
  "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR: "WS_CONNECTION_ERROR" = "WS_CONNECTION_ERROR";
export const WS_GET_MESSAGE: "WS_GET_MESSAGE" = "WS_GET_MESSAGE";
export const WS_CONNECTION_CLOSED: "WS_CONNECTION_CLOSED" =
  "WS_CONNECTION_CLOSED";

export interface IGetSocketStartFeed {
  readonly type: typeof WS_CONNECTION_START_FEED;
}
export const getSocketStartFeed = (): IGetSocketStartFeed => ({
  type: WS_CONNECTION_START_FEED,
});
export interface IGetSocketStartProfile {
  readonly type: typeof WS_CONNECTION_START_PROFILE;
}
export const getSocketStartProfile= (): IGetSocketStartProfile => ({
  type: WS_CONNECTION_START_PROFILE,
});

export interface IGetSocketSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
  readonly payload: Event;
}

export interface IGetSocketError {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: Event;
}

export interface IGetSocketMessage {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: object;
}

export interface IGetSocketClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
  readonly payload?: Event;
}

export const getSocketClose = (): IGetSocketClosed => ({
  type: WS_CONNECTION_CLOSED,
});

export type TSocketActions =
  | IGetSocketStartProfile
  | IGetSocketStartFeed
  | IGetSocketSuccess
  | IGetSocketError
  | IGetSocketMessage
  | IGetSocketClosed;
