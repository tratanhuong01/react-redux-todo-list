import * as Types from "../constants/ActionTypes";
import Edit from "./../components/Edit";
var initialState = {
  Modal: false,
  DataModal: "",
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.EDIT_VIEW_TODO:
      state.Modal = true;
      state.DataModal = <Edit item={action.todo} />;
      return { ...state };
    case Types.CLOSE_MODAL:
      state.Modal = false;
      state.DataModal = "";
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
