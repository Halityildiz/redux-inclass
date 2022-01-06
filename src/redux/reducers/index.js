<<<<<<< HEAD
import { combineReducers } from "redux";
import appReducer from "./appReducer";
import userReducer from "./userReducer";
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  news: newsReducer,
});
=======
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import userReducer from './userReducer';
import newsReducer from './newsReducer';

const rootReducer = combineReducers({
    app: appReducer,
    user: userReducer,
    news: newsReducer,
})
>>>>>>> dfe6716159433c670a50fd8d94d11bb31f1e5fcd

export default rootReducer;
