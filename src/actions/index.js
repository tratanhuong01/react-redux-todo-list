import * as Types from "./../constants/ActionTypes";

export const addTodo = (todo) => {
  return {
    type: Types.ADD_TODO,
    todo,
  };
};
export const deleteTodo = (todo) => {
  return {
    type: Types.DELETE_TODO,
    todo,
  };
};
export const editViewTodo = (todo, data) => {
  return {
    type: Types.EDIT_VIEW_TODO,
    todo,
    data,
  };
};
export const editTodo = (todo, data) => {
  return {
    type: Types.EDIT_TODO,
    todo,
    data,
  };
};

export const closeModal = (data) => {
  return {
    type: Types.CLOSE_MODAL,
    data,
  };
};

export const CompletedTodo = (todo) => {
  return {
    type: Types.COMPLETED_TODO,
    todo,
  };
};

export const changMode = (mode) => {
  return {
    type: Types.MODE_UI,
    mode,
  };
};
