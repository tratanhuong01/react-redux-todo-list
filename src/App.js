import Wrapper from "./containers/Wrapper";
import { connect } from "react-redux";
import React, { Component } from "react";

class App extends Component {
  render() {
    var { Data, Mode } = this.props;
    return (
      <div className={Mode.mode === "light" ? "" : "dark"}>
        <div
          className="w-full h-screen relative bg-green-500 
        dark:bg-dark-second"
        >
          <Wrapper />
        </div>
        <div
          className={
            Data.Modal === true
              ? "w-full bg-opacity-50 h-screen fixed top-0 left-0 bg-gray-500"
              : ""
          }
        >
          {Data.DataModal}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    Data: state.modal,
    Mode: state.mode,
  };
};
export default connect(mapStateToProps)(App);
