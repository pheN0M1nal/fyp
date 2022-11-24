import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const reducer = combineReducers({
  productList: productListReducer,
});

const bindMiddleware = (middleware) => {
  if (Server_API_URL.includes("beta1")) {
    const composeEnhancers =
      window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
    return composeEnhancers(middleware);
  }
  return middleware;
};

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk, bindMiddleware];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// const store = createStore(
//   reducer /* preloadedState, */,
//   +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
