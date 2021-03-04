import React, { Component } from 'react';




class TextBox extends Component {
    constructor() {
      super();
  
      this.state = {
        message: ""
      };
    }
  
    handleChange(val) {
      this.setState({ message: val});
    }
  
    render() {
      return (
        <div className="App">
          <input onChange={(e) => this.handleChange(e.target.value)} />
          <p>{this.state.message}</p>
        </div>
      );
    }
  }
  
  export default TextBox;