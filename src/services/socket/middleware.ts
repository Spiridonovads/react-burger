import type { Middleware, MiddlewareAPI } from 'redux';
import type { TApplicationActions, AppDispatch, RootState } from '../types/types';
import { getCookie } from '../../utile/cookie';

export const socketMiddleware = (wsUrl: string): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    
    let socket: WebSocket | null = null;

    return next => (action: TApplicationActions) => {
      const { dispatch } = store;
      const token = getCookie('accessToken')
   
      if (action.type === 'WS_CONNECTION_START' && token) {
            // объект класса WebSocket
        socket = new WebSocket(`${wsUrl}?token=${token}`);
      }
      if (socket) {

                // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          dispatch({ type: 'WS_CONNECTION_SUCCESS', payload: event });
        };

                // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch({ type: 'WS_CONNECTION_ERROR', payload: event });
        };

                // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          const { data } = event;
          dispatch({ type: 'WS_GET_MESSAGE', payload: JSON.parse(data) });
        };
                // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch({ type: 'WS_CONNECTION_CLOSED', payload: event });
        };
      }

      next(action);
    };
    }) as Middleware;
}; 

