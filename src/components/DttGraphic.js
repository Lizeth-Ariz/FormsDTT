import React, { Component } from "react";

class DttGraphic extends Component {
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
        <table>
          <caption>
            <h1>DTT Results</h1>
          </caption>
          <tbody>
            <tr>
              <th>
                <a href="./CodeColors">Help</a>
              </th>
            </tr>
            <tr>
              <td>
                <canvas></canvas>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DttGraphic;
