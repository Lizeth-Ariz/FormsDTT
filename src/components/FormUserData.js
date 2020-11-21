import React, { Component } from "react";

class FormUserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputtext: "",
      data: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    console.log("final data is", data);
  };
  handleInputChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
      //[event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Enter data according to acceptable format ...</label>
            <p>
              <textarea
                type="text"
                name="inputtext"
                onChange={this.handleInputChange}
              />
            </p>
            <input type="file" name="data" onChange={this.handleInputChange} />
          </div>
          <div>
            <button type="submit">Go</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormUserData;
