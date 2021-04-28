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
        <div className="row">
          <h3>Contact Info</h3>
          <p className="col-lg-4 col-md-6">Name: {this.props.name}</p>
          <p className="col-lg-4 col-md-6">Email: {this.props.email}</p>
          <p className="col-lg-4 col-md-6">Phone Number: {this.props.number}</p>
        </div>
        <div className="row">
          <h3>Education</h3>
          <p className="col-lg-4 col-md-6">School: {this.props.school}</p>
          <p className="col-lg-4 col-md-6">Field of Study: {this.props.study}</p>
          <p className="col-lg-4 col-md-6">Study Date: {this.props.dateOfStudy}</p>
        </div>
        <div className="row">
          <h3>Work History</h3>
          <p className="col-lg-4 col-md-6">Company Name: {this.props.company}</p>
          <p className="col-lg-4 col-md-6">Position: {this.props.position}</p>
          <p className="col-lg-4 col-md-6">Tasks performed: {this.props.tasks}</p>
          <p className="col-lg-4 col-md-6">Start: {this.props.startDate}</p>
          <p className="col-lg-4 col-md-6">End: {this.props.endDate}</p>
        </div>
        <button className="btn btn-success" onClick={this.reset}>EDIT</button>
      </span>
    );
  }
}
export default Resume;
