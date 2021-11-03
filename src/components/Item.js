import React, { Component } from "react";
import * as actions from "./../actions/index";
import { connect } from "react-redux";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: this.props.item.ID,
      Content: this.props.item.Content,
      TimeCompleted: this.props.item.TimeCompleted,
      IsCompleted: this.props.item.IsCompleted,
    };
  }
  deleteTodo = () => {
    this.props.deleteTodo(this.props.item);
  };
  editViewTodo = () => {
    this.props.editViewTodo(this.props.item, {
      Modal: this.props.Data.Modal,
      DataModal: this.props.Data.DataModal,
    });
  };
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    var todo = this.state;
    todo.IsCompleted = value;
    this.setState({
      [name]: value,
    });
    this.props.onChange(this.state);
  };
  render() {
    return (
      <div className="w-full py-3 pl-4 flex dark:text-white">
        <div className="w-1/12 flex">
          <div className="flex items-center">
            <input
              onChange={this.onChange}
              type="checkbox"
              className="flex items-center"
              name="IsCompleted"
              style={{ transform: "scale(1.4)" }}
              checked={this.state.IsCompleted === true ? true : false}
            />
          </div>
        </div>
        <div className="w-9/12 flex">
          <div className="flex flex-wrap items-center font-semibold">
            <p className="w-full font-bold">{this.props.item.Content}</p>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              TimeCompleted :{" "}
              {this.props.item.TimeCompleted === ""
                ? "Empty"
                : this.props.item.TimeCompleted}
            </p>
          </div>
        </div>
        <div className="w-2/12 flex">
          <div className="w-full flex items-center">
            <div
              className="w-6 h-6 rounded-full flex justify-center items-center 
            cursor-pointer hover:bg-red-500 hover:text-white mr-5"
              onClick={this.editViewTodo}
            >
              <i
                className="bx bx-edit-alt flex items-center font-bold 
              text-xm mb-0.5"
              ></i>
            </div>
            <div
              className="w-6 h-6 rounded-full flex justify-center items-center 
            cursor-pointer hover:bg-red-500 hover:text-white"
              onClick={this.deleteTodo}
            >
              <span className="flex items-center font-bold text-xm mb-0.5">
                &times;
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    Data: state.modal,
  };
};
const mapDispatchToProp = (dispatch, props) => {
  return {
    deleteTodo: (todo) => {
      dispatch(actions.deleteTodo(todo));
    },
    editViewTodo: (todo, data) => {
      dispatch(actions.editViewTodo(todo, data));
    },
    onChange: (todo) => {
      dispatch(actions.CompletedTodo(todo));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(Item);
