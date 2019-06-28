import React, { Component } from "react";
import "./style.css";

export default class Class51 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 7,
      b: 5,
      sum: 0,
      message: ""
    }
  }

  handleBtn=()=> {
    this.setState({
      sum: this.state.a + this.state.b
    },function(){
      if (this.state.sum > 10) {
        this.setState({
          message: "sum greater than 5"
        })
      } else {
        this.setState({
          message: "sum less than 5"
        })
      }
    })
  }

  render() {
    return (
      <div>
        {this.state.message}
        <button
          onClick={this.handleBtn}
        >
          Add
        </button>
      </div>
    )
  }
}