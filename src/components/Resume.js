import React, { Component } from "react";
class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    return <p>{this.state.form}</p>;
  }
}
export default Resume;
