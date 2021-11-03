import React, { Component } from "react";
import * as actions from "./../actions/index";
import { connect } from "react-redux";
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.item;
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  editTodo = (event) => {
    event.preventDefault();
    this.props.editTodo(this.state, this.props.Data);
  };
  closeModal = () => {
    this.props.closeModal(this.props.Data);
  };
  render() {
    return (
      <div
        className="w-2/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 rounded-lg
        -translate-y-1/2 border-2 border-gray-300 border-solid shadow-xl bg-white 
        dark:bg-dark-third dark:text-white"
      >
        <div className="w-full relative py-3 border-b-2 border-gray-300 border-solid">
          <p className="font-bold text-2xl text-center">Edit ToDo</p>
          <span
            onClick={this.closeModal}
            className="w-10 h-10 bg-gray-300 rounded-full font-bold text-2xl 
                flex justify-center pt-1 cursor-pointer top-2 right-2 absolute 
                dark:bg-dark-main dark:text-white"
          >
            &times;
          </span>
        </div>
        <div className="w-full p-2">
          <form action="" method="POST">
            <div className="w-full py-2 flex">
              <label className="w-3/12 flex items-center mr-6 font-bold">
                ID :
              </label>
              <input
                type="text"
                className="w-9/12 p-2 bg-gray-100 border-solid 
                    border-blue-500 border-2 rounded-lg dark:border-dark-third 
                    shadow-lg dark:bg-dark-second"
                placeholder="ID"
                name="ID"
                onChange={this.onChange}
                value={this.state.ID}
                disabled
              />
            </div>
            <div className="w-full py-2 flex">
              <label className="w-3/12 flex items-center mr-6 font-bold">
                Content :
              </label>
              <input
                type="text"
                className="w-9/12 p-2 bg-gray-100 border-solid 
                    border-blue-500 border-2 rounded-lg  dark:border-dark-third 
                    shadow-lg dark:bg-dark-second"
                placeholder="Content"
                name="Content"
                value={this.state.Content}
                onChange={this.onChange}
              />
            </div>
            {/* <div className="w-full py-2 flex">
              <label className="w-3/12 flex items-center mr-4 font-bold">
                Tình Trạng :
              </label>
              <select
                name="IsCompleted"
                value={this.state.IsCompleted}
                onChange={this.onChange}
                className="w-1/2 p-2 pl-0 border-2 border-solid border-blue-500 rounded-lg 
                dark:border-dark-third shadow-lg dark:bg-dark-second"
              >
                <option value={true}>Completed</option>
                <option value={false}>Uncompleted</option>
              </select>
            </div> */}
            <div className="w-full py-2 my-2 h-12">
              <button
                onClick={this.editTodo}
                type="button"
                className="px-5 py-2 bg-blue-500 text-white 
                    float-right mr-1 rounded-lg"
              >
                Lưu
              </button>
              <button
                type="button"
                onClick={this.closeModal}
                className="px-5 py-2 bg-gray-500 text-white 
                float-right mr-1 rounded-lg"
              >
                Hủy
              </button>
            </div>
          </form>
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
    closeModal: (data) => {
      dispatch(actions.closeModal(data));
    },
    editTodo: (todo, data) => {
      dispatch(actions.editTodo(todo, data));
      dispatch(actions.closeModal(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(Edit);
