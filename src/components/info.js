//name
//email
//phone number
import React, { Component } from "react";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", number: "" };
  }
  callback = (e) => {
    this.setState({ name: e.target.value });
    this.props.dataTransfer(e.target.value);
  };
  render() {
    return (
      <div>
        <h1>Contact Information</h1>
        <span>
          <p>Name:</p>
          <input
            type="text"
            onChange={this.callback}
            value={this.state.name}
          ></input>
        </span>
        <span>
          <p>Email:</p>
          <input type="text"></input>
        </span>
        <span>
          <p>Phone Number:</p>
          <input type="text"></input>
        </span>
      </div>
    );
  }
}
export default Info;
