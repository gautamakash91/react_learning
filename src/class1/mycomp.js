import React from "react";
import App from "../app";
import {
    Link
} from "react-router-dom";


var a = "this is a string variable";

class MyComp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            num1: 10,
            num2: 0
        }
    }

    componentDidMount(){
        console.log("called automatically");
    }

    handleMyInput = (event) => {
        this.setState({
            num1: event.target.value
        })
    }

    btnClicked=()=>{
        console.log(this.state.num1);
        this.setState({
            num1: parseInt(this.state.num1) + 1
        })
    }

    render() {
        return (
            <div>
                <Link to="trial">Go to class 5</Link>

                {a}
                {this.state.num1}
                <h1>
                    Title
                </h1>
                <div>

                </div>
                <input value={this.state.num1} type="number" onChange={this.handleMyInput} />
                <input type="number" onChange={
                    (event) => {
                        this.setState({
                            num2: event.target.value
                        })
                    }} />

                    <button
                    style={{
                        backgroundColor:"#7733ff",
                        color: "white"
                    }}
                    onClick={this.btnClicked}
                    >
                        Click Me
                    </button>
                <App val1={this.state.num1} val2={this.state.num2} />
            </div>
        )
    }
}

export default MyComp;