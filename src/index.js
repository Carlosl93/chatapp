import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as firebase from 'firebase'

//Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

//Reducer
import chatReducer from "./reducers/index.js";
import { sendMessage } from "./actions/messages.js";

const logger = createLogger();

const store = createStore(
    chatReducer,
    applyMiddleware(thunkMiddleware, createLogger)
  );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);