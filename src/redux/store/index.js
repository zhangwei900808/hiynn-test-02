import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "../reducers";

export const history = createBrowserHistory();

const persistConfig = {
  key: "test_root",
  storage
};
const finalReducer = persistReducer(persistConfig, rootReducer(history));

export default function configureStore({ preloadedState }) {
  const store = createStore(
    finalReducer,
    compose(
      applyMiddleware(
        routerMiddleware(history) // for dispatching history actions
        // ... other middlewares ...
      )
    )
  );
  let persistor = persistStore(store);
  return { store, persistor };
}
