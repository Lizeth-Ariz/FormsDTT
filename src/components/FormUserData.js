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

class FormUserData extends Component {
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
    this.setState({
      //[name]: value
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Enter data according to acceptable format ...</label>
            <p>
              <textarea
                type="text"
                name="inputtext"
                onChange={this.handleInputChange}
              />
            </p>
            <input type="file" name="data" onChange={this.handleInputChange} />
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

export default FormUserData;
