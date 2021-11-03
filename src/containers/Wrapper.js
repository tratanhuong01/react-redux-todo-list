import React, { Component } from "react";
import ModeColor from "../components/ModeColor";
import Contain from "./Contain";
import Header from "./Header";

class Wrapper extends Component {
  render() {
    return (
      <div
        className="p-2 absolute top-1/2 left-1/2 transform 
        -translate-y-1/2 -translate-x-1/2 bg-white rounded-xl 
        dark:bg-dark-third sm:w-11/12 lg:w-10/12 xl:w-1/3"
      >
        <ModeColor />
        <Header />
        <Contain />
      </div>
    );
  }
}

export default Wrapper;
