/**

# Component (user guide)

# [FromUserData]
	
## Description  
	
[Description]

## Category   
	
[Visual]  

## Live demo 
[-]

## Installation 
[-]

## Usage 
	
[<FormUserData />]

## Props 

| Attribute | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
|           |      |         |             |


## Exception

__Category: [Error, Warning or Message]__
[Description of the exception (if necessary)]

## License

MIT License

## Author 
	
RegulonDB Team: 
[Lizeth-Ariz <user@aaa.com>]



# Component (technical guide)

## Component Type 

[HOC]

[stateful -> exportan funcion con estate y props, 
  stateless -> exportan funcion con props y sin state , 
  pure -> exporta una funcion sin props sin state, 
  HOC -> exporta una Funcion copuesta, o clase , 
  Hook -> exporta hook (react const) ]

## Dependencies

[import React, { Component } from "react";]

## States
	
| Property | Value | Desctiption |
| -------- | ----- | ----------- |
|  inputtext        |   String    |      description       |
| data | String | description	

# Functions description


## [handleSubmit]

__Description:__  

[Description of the function]


__Usage:__

```javascript
<form onSubmit={this.handleSubmit}>
```

__Scope: __

[Scope details]

__Input Parameter:__  
​__event:__ [Description]


__Return:__  
​__Void:__ []
imprime en consola: 
console.log("final data is", data);
​[Description (if necessary)]



 * 
 */

import React, { Component } from "react";
import { Button, TextArea } from "./ui-components/index";
//import ValidateFile from "./validation/validation_file";

class FormUserData extends Component {
  state = {
    dataText: ""
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    console.log("final data is", data);
  };

  handleInputChange = (text) => {
    this.setState({
      dataText: text
    });
  };

  handleFileUpload = (e) => {
    let files = e.target.files;
    console.log(files[0].type);
    let reader = new FileReader();
    try {
      if (Math.round(files[0].size / 1000) < 10240) {
        //console.log(files[0])
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
          let data64 = reader.result.split(",");
          let data = data64[1];
          let buff = new Buffer(data, "base64");
          let text = buff.toString("UTF-8");
          document.getElementById("dataText01").value = text;
          this.setState({ dataText: text });
        };
      } else {
        alert("Unsupported file size");
      }
    } catch (error) {
      console.error("no select file: " + error);
    }
  };

  clear = () => {
    document.getElementById("dataText01").value = "";
    this.setState({
      dataText: ""
    });
  };
  render() {
    return (
      <div className="container">
        <label>Enter data according to acceptable format ...</label>
        <br />
        <TextArea
          id="dataText01"
          value={this.state.dataText}
          onChangeText={this.handleInputChange}
        />
        <br />
        <input type="file" onChange={this.handleFileUpload} />
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

export default FormUserData;
