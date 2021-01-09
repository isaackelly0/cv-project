import React, { Component } from "react";
class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    return <p>{this.props}</p>;
  }
}
export default Resume;
