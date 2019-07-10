import React, { Component } from "react";
import "./style.css";
import {
    Link
} from "react-router-dom";

export default class Class5 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            age: "",
            arr: [{ name: "a", age: "12", val: true }, { name: "b", age: "12", val: false }],
            val: true
        }
    }

    handleName = (e) => {
        this.state.name = e.target.value;
        this.setState({
            name: e.target.value
        })
    }

    handleAge = (e) => {
        this.setState({
            age: e.target.value
        })
    }

    handleBtn = () => {
        this.state.arr.push({ name: this.state.name, age: this.state.age, val: this.state.val })
        this.setState({
            arr: this.state.arr
        })
    }

    handleDelete(obj) {
        var index = this.state.arr.indexOf(obj);
        this.state.arr.splice(index, 1);
        this.setState({
            arr: this.state.arr
        })
    }

    render() {
        var a = "";
        if (this.state.val == true) {
            a = "login";
        } else {
            a = "logout";
        }

        return (
            <div>
                {/* <Link to="mcq">MCQ</Link> */}

                <input onChange={this.handleName} />
                <input onChange={this.handleAge} />

                <button
                    onClick={this.handleBtn}
                >
                    Add
                </button>
                <br />
                <div className="box">
                    <ol>
                        {this.state.arr.map((single) => (
                            single.val ? single.name : ""
                        )
                        )}
                    </ol>
                </div>

                <div className="box">
                    <ol>
                        {this.state.arr.map((single) => (
                            single.val == false ? single.name : ""
                        )
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}