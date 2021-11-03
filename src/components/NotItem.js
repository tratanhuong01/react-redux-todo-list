import React, { Component } from "react";

class NotItem extends Component {
  render() {
    return (
      <p
        className="w-full font-semibold m-3 text-center text-gray-600 
        dark:text-gray-300"
      >
        Not have todo . You can add todo
      </p>
    );
  }
}

export default NotItem;
