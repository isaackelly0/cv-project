//name
//email
//phone number
import React, { Component } from "react";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = (e) => {
    //if (e.target.className === "name") {
    //this.setState({ name: e.target.value });
    //}
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };
  callback = (e) => {
    //this.props.dataTransfer(e.target.value);
    // if (e.target.className === "name") {
    //   this.setState({ name: e.target.value });
    //   this.props.dataTransfer(e.target.value);
    // } else if (e.target.className === "email") {
    //   this.setState({ email: e.target.value });
    //   this.props.dataTransfer(e.target.value);
    // } else if (e.target.className === "number") {
    //   this.setState({ number: e.target.value });
    //   this.props.dataTransfer(e.target.value);
    // }
  };
  render() {
    return (
      <div>
        <h1>Contact Information</h1>
        <span>
          <p>Name:</p>
          <input
            type="text"
            className="name"
            name="name"
            onChange={this.handleChange}
            onSubmit={this.callback}
            value={this.state.name}
          ></input>
        </span>
        <span>
          <p>Email:</p>
          <input
            type="text"
            className="email"
            //onChange={this.callback}
            value={this.state.email}
          ></input>
        </span>
        <span>
          <p>Phone Number:</p>
          <input
            type="text"
            className="number"
            //`onChange={this.callback}
            value={this.state.number}
          ></input>
        </span>
      </div>
    );
  }
}
export default Info;
