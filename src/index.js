import React from "react";
import ReactDOM  from "react-dom";
import './index.css'

import { BrowserRouter as Router } from "react-router-dom";

import App from './App'
import { StateProvider } from "./context/StateProvider";
import reducer from "./context/reducer";
import { initialState } from "./context/initialState";

ReactDOM.render(
    <React.StrictMode>
        <StateProvider initialState={initialState}  reducer = {reducer}>
            <App/>
        </StateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
