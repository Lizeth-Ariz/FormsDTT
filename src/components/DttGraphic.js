import React, { Component } from "react";
import { IconButton } from "./ui-components/index";
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
                <IconButton
                  icon="add"
                  style={{
                    background: "#000",
                    float: "left",
                    marginRight: "1%"
                  }}
                />
                <IconButton
                  icon="remove"
                  style={{
                    background: "#000",
                    float: "left",
                    marginRight: "1%"
                  }}
                />
                <IconButton
                  icon="crop_free"
                  style={{
                    background: "#000",
                    float: "left",
                    marginRight: "1%"
                  }}
                />
                <IconButton
                  icon="
                  cloud_download"
                  style={{
                    background: "#000",
                    float: "right",
                    marginRight: "1%"
                  }}
                />
                <a
                  style={{
                    float: "right",
                    marginRight: "1%",
                    marginTop: "1%"
                  }}
                  href="./CodeColors"
                >
                  Help
                </a>
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
