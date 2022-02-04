import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { IUserState } from "./reducers/userReducer";
import thunk from "redux-thunk";

export interface IRootState {
  user: IUserState;
}

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
