import React, { Component } from "react";

export default class RefTextInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  onFocusInput = (value) => {
    console.log("inputref", this.inputRef.current);
    this.inputRef.current.focus();
    this.inputRef.current.value = value;
  };
  render() {
    return (
      <div className="my-3">
        <h2>ref text input</h2>
        <div>
          <input type="text" className="border border-gray-500" ref={this.inputRef} />
        </div>
        <div className="my-3">
          <button className="px-5 py-3 bg-red-500 text-white" onClick={this.onFocusInput.bind(this, 'default')} >
            Focus Input
          </button>
        </div>
      </div>
    );
  }
}
