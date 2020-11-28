import React, { Component } from "react";
import CheckBox from "./Checkbox";

class FormRegulondbData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftEndPosition: "",
      rightEndPosition: "",
      strand: "both",
      covered: true,
      elements: [
        { id: 1, value: "gene", isChecked: false },
        { id: 2, value: "promoter", isChecked: false },
        { id: 3, value: "operon", isChecked: false },
        { id: 4, value: "tf binding site", isChecked: false },
        { id: 5, value: "rna", isChecked: false },
        { id: 6, value: "riboswitch", isChecked: false },
        { id: 7, value: "traslational attenuattor", isChecked: false },
        { id: 8, value: "trascriptional attenuattor", isChecked: false },
        { id: 9, value: "ppGpp", isChecked: false }
      ]
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    console.log("final data is", data);
  };
  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      //[name]: value
      [event.target.name]: event.target.value
    });
    if (event.target.type === "checkbox") {
      this.setState({ [event.target.name]: event.target.checked });
    }
    if (event.target.type === "checkbox" && event.target.name === "element") {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  handleAllChecked = (event) => {
    let elements = this.state.elements;
    elements.forEach((element) => (element.isChecked = event.target.checked));
    this.setState({ elements: elements });
  };

  handleCheckChieldElement = (event) => {
    let elements = this.state.elements;
    elements.forEach((element) => {
      if (element.value === event.target.value)
        element.isChecked = event.target.checked;
    });
    this.setState({ elements: elements });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Absolute genome left position:
              <input
                className="form"
                type="number"
                name="leftEndPosition"
                onChange={this.handleInputChange}
              />
              (1-4639676)
            </label>
            <br />
            <label>
              Absolute genome right position:
              <input
                className="form"
                type="number"
                name="rightEndPosition"
                onChange={this.handleInputChange}
              />
              (1-4639676)
            </label>
          </div>
          <div>
            Strand
            <br />
            <input
              className="radio"
              type="radio"
              value="forward"
              name="strand"
              onChange={this.handleInputChange}
            />
            forward
            <input
              className="radio"
              type="radio"
              value="reverse"
              name="strand"
              onChange={this.handleInputChange}
            />
            reverse
            <input
              className="radio"
              type="radio"
              value="both"
              name="strand"
              defaultChecked={this.state.strand}
              onChange={this.handleInputChange}
            />
            both
          </div>
          <div>
            Covered <br />
            <input
              className="radio"
              type="checkbox"
              value="covered"
              defaultChecked={this.state.covered}
              name="covered"
              onChange={this.handleInputChange}
            />
            (Draw only the elements that are completely contained in the
            selected range)
          </div>
          <div className="elements">
            Elements to display:
            <br />
            <input
              type="checkbox"
              onClick={this.handleAllChecked}
              value="checkedall"
            />{" "}
            All
            <dl>
              {this.state.elements.map((element) => {
                return (
                  <CheckBox
                    handleCheckChieldElement={this.handleCheckChieldElement}
                    {...element}
                  />
                );
              })}
            </dl>
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

export default FormRegulondbData;
