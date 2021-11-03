import React, { Component } from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";
class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      Content: "",
      TimeCompleted: "",
      IsCompleted: false,
    };
  }

  addTodo = () => {
    this.props.addTodo(this.state);
    this.setState({
      Content: "",
    });
  };
  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <Fragment>
        <div className="w-3/4 p-2">
          <input
            className="w-full py-2 px-3.5 rounded-full border-2 border-solid 
            border-green-500 font-semibold dark:border-dark-third shadow-lg"
            placeholder="Add todo"
            name="Content"
            onChange={this.onChange}
            value={this.state.Content}
          />
        </div>
        <div className="w-1/4 p-2">
          <button
            onClick={this.addTodo}
            type="button"
            className="w-full p-2 border-2 border-solid hover:bg-red-500 border-red-500 
            dark:bg-dark-main dark:text-white dark:border-white dark:hover:bg-dark-third
            rounded-full font-semibold text-gray-700 hover:border-white hover:text-white"
          >
            Add
          </button>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProp = (dispatch, props) => {
  return {
    addTodo: (todo) => {
      dispatch(actions.addTodo(todo));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(Control);
