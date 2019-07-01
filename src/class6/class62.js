import React, { Component } from "react";


export default class Class62 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            col: "",
            sbt: false,
            email: "",
            password: "",
            message:""
        }
    }

    handleLogin = () => {
        fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
        })
            .then((response) => response.json())
            .then((res_json) => {
                if(res_json.token){
                    this.setState({
                        message: "Login Successful"
                    })
                }else{
                    this.setState({
                        message: "Login Failed"
                    })
                }
            })
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePwd = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div style={{ border: "1px black solid", width:200, margin: "auto", textAlign:"center"}}>
                    <input value={this.state.email} onChange={this.handleEmail} />
                    <br />
                    <input type="password" value={this.state.password} onChange={this.handlePwd} />
                    <br />
                    <button
                        disabled={this.state.sbt}
                        onClick={this.handleLogin}
                    >
                        Submit
                    </button>
                    <br />
                    {this.state.message}
                </div>

            </div>
        )
    }
}