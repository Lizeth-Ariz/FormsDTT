import React, { Component } from "react";
//import CheckBox from "./Checkbox";
import { Button, TextBox, RadioButtonGroup } from "./ui-components/index";

class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftEndPosition: "",
      rightEndPosition: "",
      strand: {
        title: "Strand",
        name: "strand",
        arrayOptions: [
          { value: "forward" },
          { value: "reverse" },
          { value: "both" }
        ],
        selectOption: "",
        arrayDisabledOptions: []
      }
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    console.log("final data is", data);
  };
  handleInputChangeText = (text) => {
    this.setState({
      leftEndPosition: text
    });
  };

  clear = () => {
    document.getElementById("txt1").value = "";
    document.getElementById("txt2").value = "";
    this.setState({
      leftEndPosition: ""
    });
  };

  render() {
    return (
      <div className="container">
        Absolute genome left position:
        <TextBox
          id="txt1"
          name="leftEndPosition"
          style={{ marginRight: "1%", marginLeft: "1%" }}
          value={this.state.leftEndPosition}
          onChangeText={this.handleInputChangeText}
        />
        (1-4639676)
        <br />
        Absolute genome right position:
        <TextBox
          id="txt2"
          name="rightEndPosition"
          style={{ marginRight: "1%", marginLeft: "1%" }}
          value={this.state.rightEndPosition}
          onChangeText={this.handleInputChangeText}
        />
        (1-4639676)
        <br />
        <RadioButtonGroup
          name={this.state.strand.name}
          title={this.state.strand.title}
          option={this.state.strand.arrayOptions}
          onChange={this.handleChange}
        />
        <br />
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

export default Form1;
