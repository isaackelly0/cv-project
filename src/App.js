import React, { Component } from "react";
//import ReactDOM from "react-dom";
import Work from "./components/work";
import Info from "./components/info";
import Education from "./components/education";
//import Resume from "./components/Resume";

class App extends Component {
  constructor() {
    super();
    this.state = { form: "" };
  }
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
      <div className="App">
        <Work />
        <Info />
        <Education />
      </div>
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
