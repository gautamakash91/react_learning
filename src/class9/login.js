import React, { Component } from "react";
import{
    Redirect
} from "react-router-dom";

export default class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            email:"",
            password: "",
            loggedin: false
        }
    }
    handleEmail=(e)=>{
        this.setState({
            email: e.target.value
        })
    }

    handlePassword=(e)=>{
        this.setState({
            password: e.target.value
        })
    }

    login=()=>{
        //api call
        fetch("localhost/API/index.php")
        .then( response => response.json() )
        .then( (rjson)=>{
            console.log(rjson);
        } )
        // this.setState({
        //     loggedin: true
        // })
    }

    render(){
        if(this.state.loggedin == true){
            return <Redirect to="home" />
        }
        return(
            <div>
                <input onChange={this.handleEmail} />
                <input onChange={this.handlePassword} />
                <button
                    onClick={this.login}
                >
                <img src={"https://firebasestorage.googleapis.com/v0/b/login-a21f3.appspot.com/o/react.png?alt=media&token=cf63f030-503d-4fd5-a7c9-7ba17e97d7ed"} style={{width:100}} />
                    
                </button>
            </div>
        )
    }
}