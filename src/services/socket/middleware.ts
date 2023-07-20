import type { Middleware, MiddlewareAPI } from "redux";
import type {
  TApplicationActions,
  AppDispatch,
  RootState,
  TWSStoreActions
} from "../types/types";

export const socketMiddleware = (wsActions: TWSStoreActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TApplicationActions) => {
      const { dispatch } = store;
      
      const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;

      if (action.type === wsInit) {
        // объект класса WebSocket
        socket = new WebSocket(action.wsUrl);
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
