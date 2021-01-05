import React, { Component } from "react";
//import ReactDOM from "react-dom";
//import Work from "./components/work";
//import Info from "./components/info";
//import Education from "./components/education";
//import Resume from "./components/Resume";

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.submitForm = (e) => {
      e.preventDefault();
      //alert(this.state);
      for (const key in this.state) {
        console.log(key + ":" + this.state[key]);
      }
    };
  }
  dataTransfer = (e) => {
    this.setState({ name: e });
  };
  handleChange = (e) => {
    const target = e.target;
    this.setState({ [target.name]: target.value });
  };
  // onSubmitForm = (e) => {
  //   e.preventDefault();
  //   ReactDOM.render(
  //     <Resume form={this.state.form} />,
  //     document.getElementById("output")
  //   );
  //   this.setState({ form: "" });
  // };
  render() {
    //const { form } = this.state;
    return (
      <form onSubmit={this.submitForm} className="App">
        <input
          type="text"
          onChange={this.handleChange}
          name="firstName"
        ></input>
        <input type="text" onChange={this.handleChange} name="email"></input>
        <input type="text" onChange={this.handleChange} name="number"></input>
        <button>ENTER</button>
      </form>
      // <Work />
      //
      // <Education />
      // <button>ENTER</button>
      // <form onSubmit={this.onSubmitForm}>
      //   <input
      //     type="text"
      //     onChange={this.handleChange}
      //     value={this.state.form}
      //   ></input>
      //   <button type="submit">ENTER</button>
      // </form>
      // <div id="output"></div>
      //</div>
    );
  }
}

export default App;
