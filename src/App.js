import React, { Component } from "react";
import { Spin } from "antd";
// import { PersistGate } from "redux-persist/es/integration/react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./redux/store";

import Login from "./pages/login/Login";
const { store, persistor } = configureStore({});
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Spin />} persistor={persistor}>
        <ConnectedRouter history={history}>
          <>
            <Switch>
              <Route exact path="/" component={Login} />
            </Switch>
          </>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
