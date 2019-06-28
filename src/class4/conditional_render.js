import React, {Component} from "react";
import "./style.css";

export default class MyRenderer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      arr: []
    }
  }

  handleName(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleAge(event) {
    this.setState({
      age: event.target.value
    })
  }

  handleBtn = () => {
    this.state.arr.push({ name: this.state.name, age: this.state.age });
    this.setState({
      arr: this.state.arr
    })
  }

  handleRadio=(e)=>{
    console.log(e.target.value);
  }

  render() {

    return (
      <div>
        <div>
          <input onChange={this.handleName.bind(this)} />
          <input onChange={this.handleAge.bind(this)} />

          <input type="radio" name="myradio" onChange={this.handleRadio} value="true" />
          <input type="radio" name="myradio" onChange={this.handleRadio} value="false" />
          
          <button
            className="mybtn"
            onClick={this.handleBtn}
          >
            Push
          </button>

          {this.state.arr.length == 0 ? "Array is empty" :
            <ol>
              {this.state.arr.map((single) => (
                <li>
                  {single.name}
                  {single.age}
                </li>
              ))}
            </ol>
          }
        </div>
      </div>
    );
  }
}