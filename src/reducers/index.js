import { combineReducers } from "redux";
import item from "./../reducers/item";
import modal from "./../reducers/modal";
import mode from "./../reducers/mode";
const myReducer = combineReducers({
  item,
  modal,
  mode,
});

export default myReducer;
