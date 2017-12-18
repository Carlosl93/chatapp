import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as firebase from 'firebase'

//Redux
import { createStore } from "redux";
import { Provider } from "react-redux";

//Reducer
import chatReducer from "./reducers/index.js";
import { sendMessage } from "./actions/messages.js";

let store = createStore(chatReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
