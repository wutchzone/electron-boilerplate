import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { HashRouter, Route, Switch, NavLink } from "react-router-dom";

import reducers from "./reducers";
import Home from "./components/Home";
import NodeRED from "./components/NodeRED";

// Import SCSS
import "../assets/scss/index.scss";

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default (
    <Provider store={createStoreWithMiddleware(reducers)}>
        <HashRouter>
            <div id="app">
                <navbar>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/nodered">NodeRED</NavLink>
                </navbar>
                <main>
                    <Route path="/nodered" component={NodeRED} />
                    <Route path="/" exact component={Home} />
                </main>
            </div>
        </HashRouter>
    </Provider>
);
