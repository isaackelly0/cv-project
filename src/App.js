import React, { Component } from "react";
import ReactDOM from "react-dom";
import Resume from "./components/Resume";

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
      <div>
        <form
          onSubmit={this.submitForm}
          className="App"
          style={this.state.form}
        >
          <div>
            <h1>Contact Info</h1>
            <p>Name:</p>
            <input type="text" onChange={this.handleChange} name="name"></input>
            <p>Email:</p>
            <input
              type="text"
              onChange={this.handleChange}
              name="email"
            ></input>
            <p>Phone Number:</p>

            <input
              type="text"
              onChange={this.handleChange}
              name="number"
            ></input>
          </div>
          <div>
            <h1>Education</h1>
            <p>School Name:</p>

            <input
              type="text"
              onChange={this.handleChange}
              name="school"
            ></input>
            <p>Field of Study:</p>

            <input
              type="text"
              onChange={this.handleChange}
              name="study"
            ></input>
            <p>Date of Study:</p>

            <input
              type="text"
              onChange={this.handleChange}
              name="dateOfStudy"
            ></input>
          </div>
          <div>
            <h1>Work History</h1>
            <p>Company Name:</p>
            <input
              type="text"
              onChange={this.handleChange}
              name="company"
            ></input>
            <p>Position:</p>
            <input
              type="text"
              onChange={this.handleChange}
              name="position"
            ></input>
            <p>Tasks:</p>
            <input
              type="text"
              onChange={this.handleChange}
              name="tasks"
            ></input>
            <p>Start Date:</p>
            <input
              type="text"
              onChange={this.handleChange}
              name="startDate"
            ></input>
            <p>End Date:</p>
            <input
              type="text"
              onChange={this.handleChange}
              name="endDate"
            ></input>
          </div>
          <button>ENTER</button>
        </form>
        <span id="resume" style={this.state.resume}>
          <button style={this.state.resume}>EDIT</button>
        </span>
      </div>
    );
  }
}

export default App;
