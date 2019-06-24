import React from "react";

export default class Class31 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: 0,
      arr: []
    }
  }

  handleInput = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleInput2 = (e) => {
    this.setState({
      age: e.target.value
    })
  }

  push_to_arr = () => {
    this.state.arr.push({name: this.state.name, age: this.state.age});
    this.setState({
      name: "",
      age:0,
      arr: this.state.arr
    });
  }

  remove_from_arr(s) {
    var index = this.state.arr.indexOf(s);
    this.state.arr.splice(index, 1);
    this.setState({
      arr: this.state.arr
    });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={this.handleInput}
        />
        <input
          value={this.state.age}
          onChange={this.handleInput2}
        />

        <button
          onClick={
            this.push_to_arr.bind(this)
          }
        >
          Push
        </button>

        <ol>
          {this.state.arr.map((s) => (
            <li>
              {s.name}
              {s.age}
              <button onClick={this.remove_from_arr.bind(this, s)}>
                x
              </button>
            </li>
          ))}
        </ol>

      </div>
    )
  }
}