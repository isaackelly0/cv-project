import React, { Component } from "react";
class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <span>
        <p>Name: {this.props.name}</p>
        <p>Email: {this.props.email}</p>
        <p>Phone Number: {this.props.number}</p>
        <p>School: {this.props.school}</p>
        <p>Field of Study{this.props.study}</p>
        <p>Study Date{this.props.dateOfStudy}</p>
        <p>Company Name: {this.props.company}</p>
        <p>Position: {this.props.position}</p>
        <p>Tasks performed: {this.props.tasks}</p>
        <p>Start: {this.props.startDate}</p>
        <p>End: {this.props.endDate}</p>
        <button onClick={this.props.callback("false")}>EDIT</button> //error
        //thrown, need to define this function better
      </span>
    );
  }
}
export default Resume;
