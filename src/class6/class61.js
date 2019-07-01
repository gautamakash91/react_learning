import React, { Component } from "react";

export default class Class61 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            col: ""
        }
    }

    handleBtn=()=> {
        fetch("http://www.colr.org/json/color/random").
        then( (response)=> response.json() ).
        then( (res_json) =>{
            this.setState({
                col: "#"+res_json.colors[0].hex
            })
        } )
    }


    render() {
        return (
            <div style={{backgroundColor: this.state.col, height: 100, width:100}}>
                <button onClick={this.handleBtn}>
                    click me
                </button>
            </div>
        )
    }
}