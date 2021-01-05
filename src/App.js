import React, { Component } from "react";
//import ReactDOM from "react-dom";
//import Work from "./components/work";
import Info from "./components/info";
//import Education from "./components/education";
//import Resume from "./components/Resume";

class App extends Component {
  constructor() {
    super();
    this.state = { name: "" };
    this.submitForm = (e) => {
      e.preventDefault();
      alert(this.state.name);
    };
  }
  dataTransfer = (e) => {
    this.setState({ name: e });
  };
  // handleChange = (e) => {
  //   this.setState({ form: e.target.value });
  // };
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
        <Info dataTransfer={this.dataTransfer} />
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
