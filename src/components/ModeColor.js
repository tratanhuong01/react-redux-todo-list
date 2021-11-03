import React, { Component } from "react";
import * as actions from "./../actions/index";
import { connect } from "react-redux";
class ModeColor extends Component {
  onChangeModeColor = () => {
    this.props.onChangeModeColor(this.props.mode);
  };
  render() {
    return (
      <div className="w-full p-2 mb-2 relative">
        <p
          className="text-3xl font-bold text-center flex items-center 
            justify-center dark:text-white"
        >
          To Do List
        </p>
        <span
          onClick={this.onChangeModeColor}
          className="w-10 h-10 rounded-full flex justify-center cursor-pointer
            absolute top-1 right-2 border-2 border-solid border-green-500 bg-green-500 
            text-white dark:text-black dark:bg-white dark:border-white"
        >
          <i className="bx bxs-moon text-2xl flex items-center"></i>
        </span>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mode: state.mode,
  };
};
const mapDispatchToProp = (dispatch, props) => {
  return {
    onChangeModeColor: (mode) => {
      dispatch(actions.changMode(mode));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(ModeColor);
