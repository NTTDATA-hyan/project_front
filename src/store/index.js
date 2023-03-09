import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import movieReducer from "./modules/movies/reducers";

const reducers = combineReducers({ movie: movieReducer });

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
