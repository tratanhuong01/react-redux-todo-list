import React, { Component } from "react";
import Control from "../components/Control";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      Content: "",
      IsCompleted: false,
    };
  }
  render() {
    return (
      <div className="w-full flex">
        <Control />
      </div>
    );
  }
}

export default Header;
