import React, { Component } from "react";
import "./Resume.css";
class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.reset = () => {
      this.props.callback("false");
    };
  }
  render() {
    return (
      <span>
        <div>
          <h1>Contact Info</h1>
          <p>Name: {this.props.name}</p>
          <p>Email: {this.props.email}</p>
          <p>Phone Number: {this.props.number}</p>
        </div>
        <div>
          <h1>Education</h1>
          <p>School: {this.props.school}</p>
          <p>Field of Study{this.props.study}</p>
          <p>Study Date{this.props.dateOfStudy}</p>
        </div>
        <div>
          <h1>Work History</h1>
          <p>Company Name: {this.props.company}</p>
          <p>Position: {this.props.position}</p>
          <p>Tasks performed: {this.props.tasks}</p>
          <p>Start: {this.props.startDate}</p>
          <p>End: {this.props.endDate}</p>
        </div>
        <button onClick={this.reset}>EDIT</button>
      </span>
    );
  }
}
export default Resume;
