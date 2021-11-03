import * as Types from "../constants/ActionTypes";
var initialState = {
  mode: "light",
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.MODE_UI:
      console.log(action);
      if (action.mode.mode === "light") {
        state.mode = "dark";
      } else {
        state.mode = "light";
      }
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
