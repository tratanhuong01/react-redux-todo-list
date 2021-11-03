import React, { Component } from "react";
import Item from "../components/Item";
import { connect } from "react-redux";
import NotItem from "../components/NotItem";
class Contain extends Component {
  render() {
    var todos = this.props.todos;
    if (Array.isArray(todos) && todos.length > 0)
      todos = todos.map((item, index) => {
        return <Item item={item} key={index} />;
      });
    return (
      <div
        id="contain"
        className="w-full py-2 h-80 xl:max-h-80 overflow-y-auto 
        wrapper-content-right"
      >
        {Array.isArray(todos) && todos.length > 0 ? todos : <NotItem />}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state.item,
  };
};

export default connect(mapStateToProps, null)(Contain);
