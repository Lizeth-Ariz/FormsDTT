import React, { Component } from "react";
import { IconButton } from "./ui-components/index";
class DttGraphic extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSubmit = (event) => {
  };
  handleInputChange = (event) => {
    
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
