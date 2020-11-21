import React, { Component } from "react";

class FormRegulondbData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftEndPosition: "",
      rightEndPosition: "",
      strand: "both",
      covered: true,
      element: {}
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

  selectElements = (event) => {
    console.log("seleccionando");
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
            <input
              id="selectall"
              type="checkbox"
              value="all"
              name="element"
              onChange={this.selectElements}
            />
            All
            <br />
            <input
              type="checkbox"
              value="gene"
              name="element"
              onChange={this.handleInputChange}
            />
            gene
            <br />
            <input
              type="checkbox"
              value="promoter"
              name="element"
              onChange={this.handleInputChange}
            />
            promotter
            <br />
            <input
              type="checkbox"
              value="operon"
              name="element"
              onChange={this.handleInputChange}
            />
            operon
            <br />
            <input
              type="checkbox"
              value="tf_binding_site"
              name="element"
              onChange={this.handleInputChange}
            />
            tf binding site
            <br />
            <input
              type="checkbox"
              value="srna"
              name="element"
              onChange={this.handleInputChange}
            />
            srna
            <br />
            <input
              type="checkbox"
              value="riboswitch"
              name="element"
              onChange={this.handleInputChange}
            />
            riboswitch
            <br />
            <input
              type="checkbox"
              value="traslational attenuattor"
              name="element"
              onChange={this.handleInputChange}
            />
            traslational attenuattor
            <br />
            <input
              type="checkbox"
              value="trascriptional attenuattor"
              name="element"
              onChange={this.handleInputChange}
            />
            trascriptional attenuattor
            <br />
            <input
              type="checkbox"
              value="ppGpp"
              name="element"
              onChange={this.handleInputChange}
            />
            ppGpp
            <br />
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
