import * as Types from "./../constants/ActionTypes";
var data = localStorage.getItem("todos");
var initialState = data ? JSON.parse(data) : [];
var index = 0;
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LIST_TODO:
      return state;
    case Types.ADD_TODO:
      let newTodo = action.todo;
      newTodo.ID = state.length;
      state.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state));
      return [...state];
    case Types.EDIT_TODO:
      let editTodo = action.todo;
      index = state.findIndex((item) => item.ID === action.todo.ID);
      state[index] = editTodo;
      localStorage.setItem("todos", JSON.stringify(state));
      return [...state];
    case Types.DELETE_TODO:
      index = state.findIndex((item) => item.ID === action.todo.ID);
      state.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(state));
      return [...state];
    case Types.COMPLETED_TODO:
      index = state.findIndex((item) => item.ID === action.todo.ID);
      state[index].IsCompleted = action.todo.IsCompleted;
      state[index].TimeCompleted =
        action.todo.IsCompleted === true ? new Date().toLocaleString() : "";
      localStorage.setItem("todos", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};

export default myReducer;
