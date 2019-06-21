import React from "react";

export default class MyArray extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            arr: []
        }
    }

    componentDidMount(){
        this.state.arr.push({number: 2});
        console.log(this.state.arr);
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}