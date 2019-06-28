import React, { Component } from "react";
import "./style.css";

export default class Class52 extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name:"branded watch",
        price: 20000,
        img: "https://images-na.ssl-images-amazon.com/images/I/71gdBQP%2BqGL._UL1500_.jpg",
        val: true
    }
  }


  render() {
    return (
      <div>
          <img src={this.state.img} />
          {this.state.val.toString()}
      </div>
    )
  }
}