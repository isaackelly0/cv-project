import React, { Component } from "react";
import ReactDOM from "react-dom";
import Resume from "./components/Resume";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { form: { display: "block" }, resume: { display: "none" } };
    this.toggle = (e) => {
      if (e === "true") {
        this.setState({
          form: { display: "none" },
          resume: { display: "flex" },
        });
      } else {
        this.setState({
          form: { display: "block" },
          resume: { display: "none" },
        });
      }
    };
    this.submitForm = (e) => {
      e.preventDefault();
      this.toggle("true");
      ReactDOM.render(
        <Resume
          name={this.state.name}
          email={this.state.email}
          number={this.state.number}
          school={this.state.school}
          study={this.state.study}
          dateOfStudy={this.state.dateOfStudy}
          company={this.state.company}
          position={this.state.position}
          tasks={this.state.tasks}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          callback={this.toggle}
        />,
        document.getElementById("resume")
      );
    };
  }
  handleChange = (e) => {
    const target = e.target;
    this.setState({ [target.name]: target.value });
  };
  render() {
    //const { form } = this.state;
    return (
      <div className="container">
        <form
          onSubmit={this.submitForm}
          style={this.state.form}
          autoComplete="off"
        >
          <div className="row">
            <h1>Contact Info</h1>
            <span className="col-lg-4 col-md-6">
              <p>Name:</p>
              <input type="text" onChange={this.handleChange} name="name"></input>
            </span>
            <span className="col-lg-4 col-md-6">
              <p>Email:</p>
              <input
              type="text"
              onChange={this.handleChange}
              name="email"
              ></input>
            </span>
            <span className="col-lg-4 col-md-6">
              <p>Phone Number:</p>
              <input
                type="text"
                onChange={this.handleChange}
                name="number"
              ></input>
            </span>
          </div>
          <div className="row">
            <h1>Education</h1>
            <span className="col-lg-4 col-md-6">
              <p>School Name:</p>
              <input
                type="text"
                onChange={this.handleChange}
                name="school"
              ></input>
            </span>
            <span className="col-lg-4 col-md-6">
              <p>Field of Study:</p>
              <input
                type="text"
                onChange={this.handleChange}
                name="study"
              ></input>
            </span>
            <span className="col-lg-4 col-md-6">
              <p>Date of Study:</p>
              <input
                type="text"
                onChange={this.handleChange}
                name="dateOfStudy"
              ></input>
            </span>
          </div>
          <div className="row">
            <h1>Work History</h1>
            <span className="col-lg-4 col-md-6">
              <p>Company Name:</p>
              <input
                type="text"
                onChange={this.handleChange}
                name="company"
              ></input>
            </span>
            <span className="col-lg-4 col-md-6">
              <p>Position:</p>
              <input
              type="text"
              onChange={this.handleChange}
              name="position"
              ></input>
            </span>
            <span className="col-lg-4 col-md-6">
              <p>Tasks:</p>
              <input
              type="text"
              onChange={this.handleChange}
              name="tasks"
              ></input>
            </span>
            <span className="col-lg-4 col-md-6">
              <p>Start Date:</p>
              <input
              type="text"
              onChange={this.handleChange}
              name="startDate"
              ></input>
            </span>
            <span className="col-lg-4 col-md-6">
              <p>End Date:</p>
              <input
              type="text"
              onChange={this.handleChange}
              name="endDate"
              ></input>
            </span> 
          </div>
          <button className="btn-success btn">ENTER</button>
        </form>
        <span id="resume" style={this.state.resume}>
        </span>
      </div>
    );
  }
}

export default App;
