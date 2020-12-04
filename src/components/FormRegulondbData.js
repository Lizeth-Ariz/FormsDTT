import React, { Component } from "react";
import CheckBox from "./Checkbox";
import {
  Button,
  TextBox,
  RadioButtonGroup,
  CheckBoxGroup
} from "./ui-components/index";

class FormRegulondbData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftEndPosition: "",
      rightEndPosition: "",
      strand: "both",
      covered: true,
      elements: [
        { id: 1, value: "gene", isChecked: true },
        { id: 2, value: "promoter", isChecked: true },
        { id: 3, value: "operon", isChecked: true },
        { id: 4, value: "tf binding site", isChecked: true },
        { id: 5, value: "rna", isChecked: true },
        { id: 6, value: "riboswitch", isChecked: true },
        { id: 7, value: "traslational attenuattor", isChecked: true },
        { id: 8, value: "trascriptional attenuattor", isChecked: true },
        { id: 9, value: "ppGpp", isChecked: true }
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
  handleInputChangeTextLeft = (text) => {
    this.setState({
      leftEndPosition: text
    });
  };
  handleInputChangeTextRight = (text) => {
    this.setState({
      rightEndPosition: text
    });
  };
  handleDemo = () => {
    document.getElementById("txt1").value = "3851220";
    document.getElementById("txt2").value = "3851712";
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
              id="txt1"
              style={{ marginRight: "1%", marginLeft: "1%" }}
              value={this.state.leftEndPosition}
              name="leftEndPosition"
              onChangeText={this.handleInputChangeTextLeft}
            />
            (1-4639676)
          </label>
          <br />
          <label>
            Absolute genome right position:
            <TextBox
              id="txt2"
              style={{ marginRight: "1%", marginLeft: "1%" }}
              value={this.state.rightEndPosition}
              name="rightEndPosition"
              onChangeText={this.handleInputChangeTextRight}
            />
            (1-4639676)
          </label>
        </div>
        <RadioButtonGroup
          title="Strand"
          arrayOptions={["forward", "reverse", "both"]}
          selectOption="both"
          onChange={(selectOption) => {
            console.log(selectOption);
          }}
        />
        <br />

        <CheckBoxGroup
          className="elements"
          title="Elements to display"
          arrayOptions={[
            "gene",
            "promoter",
            "operon",
            "tf binding site",
            "rna",
            "riboswitch",
            "traslational attenuattor",
            "trascriptional attenuattor",
            "ppGpp"
          ]}
          selectOption="covered"
          onChange={(selectOption) => {
            console.log(selectOption);
          }}
        />
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
          style={{
            float: "left",
            marginRight: "2%",
            marginTop: "2%",
            background: "#C93A1D"
          }}
        >
          Go
        </Button>
        <Button
          type="reset"
          onClick={this.clear}
          style={{ float: "left", marginTop: "2%", marginRight: "2%" }}
        >
          Reset
        </Button>
        <Button onClick={this.handleDemo} style={{ marginTop: "2%" }}>
          Demo
        </Button>
      </div>
    );
  }
}

export default FormRegulondbData;
