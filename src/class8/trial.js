import React, { Component } from "react";
// import {
//     Link
// } from "react-router-dom";

export default class Trial extends Component{
    constructor(props){
        super(props);
        this.state = {
            a: [{name: "", age: 10},2,3,4,5] 
        }
    }

    componentDidMount(){
        this.state.a.reverse();
        this.setState({
            a:this.state.a
        })
    }

    render(){
        return(
            <div>
                {/* <Link to="/">Take me home</Link> */}
                This is my trial.
                {this.state.a.map( (single)=>(
                    <div>
                        {single}
                        <button onClick={this.handleDelete.bind(this, single)}>x</button>
                    </div>
                ) )}
            </div>
        )
    }
}