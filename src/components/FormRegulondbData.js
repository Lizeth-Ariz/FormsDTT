//import { lab } from "d3";
import React, { Component } from "react";
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
        { id: 1, value: "gene", isCheck: true },
        { id: 2, value: "promoter", isCheck: true },
        { id: 3, value: "operon", isCheck: true },
        { id: 4, value: "tf binding site", isCheck: true },
        { id: 5, value: "rna", isCheck: true },
        { id: 6, value: "riboswitch", isCheck: true },
        { id: 7, value: "traslational attenuattor", isCheck: true },
        { id: 8, value: "trascriptional attenuattor", isCheck: true },
        { id: 9, value: "ppGpp", isCheck: true }
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
      [event.target.name]: event.target.value
    });
  };

  handleAllChecked = (event) => {
    let elements = this.state.elements;
    elements.forEach((element) => (element.isCheck = event.target.checked));
    console.log(elements);
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
  handleChangeStrand = (event) => {
    this.setState({
      strand: event
    });
  };
  handleDemo = (e) => {
    document.getElementById("txt1").value = "3851220";
    document.getElementById("txt2").value = "3851712";
  };
  clear = () => {
    document.getElementById("txt1").value = "";
    document.getElementById("txt2").value = "";
  };
  render() {
    return (
      <div className="container">
        <div>
          <label>
            Absolute genome left position:
            <TextBox
              id="txt1"
              type="number"
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
              type="number"
              style={{ marginRight: "1%", marginLeft: "1%" }}
              value={this.state.rightEndPosition}
              name="rightEndPosition"
              onChangeText={this.handleInputChangeTextRight}
            />
            (1-4639676)
          </label>
          <RadioButtonGroup
            title="Strand"
            name="strand"
            arrayOptions={["forward", "reverse", "both"]}
            selectOption="both"
            onChange={this.handleChangeStrand}
          />
          <br />
          <CheckBoxGroup
            title="Covered"
            name="covered"
            arrayOptions={[
              {
                id: "covered",
                value:
                  "(Draw only the elements that are completely contained in the selected range)",
                isCheck: this.state.covered
              }
            ]}
            onChange={(selectOption) => {
              //console.log(selectOption);
            }}
          />
          <br />
        </div>
        <input
          type="checkbox"
          name="checkAll"
          onClick={this.handleAllChecked}
        />
        CHECK ALL
        <div>
          <CheckBoxGroup
            title="Genetic Elements"
            name="elements"
            arrayOptions={this.state.elements}
            onChange={(selectOption) => {
              //console.log(elements);
              this.setState({ elements: selectOption });
            }}
          />
        </div>
        <br />
        <Button
          type="submit"
          label="Go"
          onClick={this.handleSubmit}
          style={{
            float: "left",
            marginLeft: "5%",
            marginRight: "2%",
            background: "#C93A1D"
          }}
        />
        <Button
          type="reset"
          label="Reset"
          onClick={this.clear}
          style={{ float: "left", marginRight: "2%" }}
        />
        <Button label="Demo" onClick={this.handleDemo} />
      </div>
    );
  }
}

export default FormRegulondbData;
