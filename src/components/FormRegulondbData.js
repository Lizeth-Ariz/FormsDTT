import React, { Component } from "react";
import CheckBox from "./Checkbox";
import { Button, TextBox, RadioButton } from "./ui-components/index";

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
  handleInputChangeText = (text) => {
    this.setState({
      leftEndPosition: text,
      rightEndPosition: text
    });
  };
  clear = () => {
    this.setState({
      leftEndPosition: "",
      rightEndPosition: ""
    });
  };
  render() {
    return (
      <div className="container">
        <div>
          <label>
            Absolute genome left position:
            <TextBox
              id="position"
              style={{ marginRight: "1%", marginLeft: "1%" }}
              value={this.state.leftEndPosition}
              name="leftEndPosition"
              onChangeText={this.handleInputChangeText}
            />
            (1-4639676)
          </label>
          <br />
          <label>
            Absolute genome right position:
            <TextBox
              id="position"
              style={{ marginRight: "1%", marginLeft: "1%" }}
              value={this.state.rightEndPosition}
              name="rightEndPosition"
              onChangeText={this.handleInputChangeText}
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
          (Draw only the elements that are completely contained in the selected
          range)
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

        <Button
          type="submit"
          onClick={this.handleSubmit}
          style={{ float: "left", marginRight: "2%", marginTop: "2%" }}
        >
          Go
        </Button>
        <Button type="reset" onClick={this.clear} style={{ marginTop: "2%" }}>
          Reset
        </Button>
      </div>
    );
  }
}

export default FormRegulondbData;
