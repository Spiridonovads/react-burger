import type { Middleware, MiddlewareAPI } from "redux";
import type {
  TApplicationActions,
  AppDispatch,
  RootState,
  TWSStoreActions
} from "../types/types";
import { getCookie } from "../../utile/cookie";

export const socketMiddleware = (wsUrl: string, wsActions: TWSStoreActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TApplicationActions) => {
      const { dispatch } = store;
      const token = getCookie("accessToken");
      const { wsInitProfile, wsInitFeed, onOpen, onClose, onError, onMessage } = wsActions;

      if (action.type === wsInitProfile && token) {
        // объект класса WebSocket
        socket = new WebSocket(`${wsUrl}?token=${token}`);
      }
      if (action.type === wsInitFeed) {
        // объект класса WebSocket
        socket = new WebSocket(`${wsUrl}/all`);
      }
      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = (event) => {
          const { data } = event;
          dispatch({ type: onMessage, payload: JSON.parse(data) });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };
      }

      next(action);
    };
  }) as Middleware;
};
