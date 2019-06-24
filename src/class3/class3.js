import React from "react";

export default class Class3 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      num: 0,
      arr: []
    }
  }

  handleInput = (e) => {
    this.setState({
      num: e.target.value
    })
  }

  push_to_arr = (e) => {
    this.state.arr.push(this.state.num);
    this.setState({
      num: 0,
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
          value={this.state.num}
          onChange={this.handleInput}
        />
        <button
          onClick={
            this.push_to_arr.bind(this, 2)
          }
        >
          Push
        </button>

        <ol>
          {this.state.arr.map((s) => (
            <li>
              {s}
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