export const WS_CONNECTION_START: "WS_CONNECTION_START_FEED" = "WS_CONNECTION_START_FEED";
export const WS_CONNECTION_SUCCESS: "WS_CONNECTION_SUCCESS" =
  "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR: "WS_CONNECTION_ERROR" = "WS_CONNECTION_ERROR";
export const WS_GET_MESSAGE: "WS_GET_MESSAGE" = "WS_GET_MESSAGE";
export const WS_CONNECTION_CLOSED: "WS_CONNECTION_CLOSED" =
  "WS_CONNECTION_CLOSED";

export interface IGetSocketStart {
  readonly type: typeof WS_CONNECTION_START;
  readonly wsUrl: string;
}
export const getSocketStart = (wsUrl: string): IGetSocketStart => ({
  type: WS_CONNECTION_START,
  wsUrl: wsUrl
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
  | IGetSocketStart
  | IGetSocketSuccess
  | IGetSocketError
  | IGetSocketMessage
  | IGetSocketClosed;
