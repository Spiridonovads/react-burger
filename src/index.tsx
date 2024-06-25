import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/app";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./services/reducers/root";
import thunkMiddleware from "redux-thunk";
import { socketMiddleware } from "./services/socket/middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import { wsActions } from "./services/types/types";
import { HashRouter } from "react-router-dom";

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware, socketMiddleware(wsActions))
  )
);

const root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
