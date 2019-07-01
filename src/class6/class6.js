import React, { Component } from "react";

export default class Class6 extends Component {
    constructor(props){
        super(props);

        this.state = {
            answer: [false, false],
            score: 0,
            q1_message:"",
            submit: false
        }
    }
    handleQ1=(e)=>{
        if(e.target.value == "true"){
            this.state.answer[0] = true;
            this.setState({
                answer: this.state.answer,
                q1_message: "Correct Answer"
            });
        }else{
            this.state.answer[0] = false;
            this.setState({
                answer: this.state.answer,
                q1_message: "Wrong Answer"

            });
        }
    }

    handleQ2=(e)=>{
        if(e.target.value == "true"){
            this.state.answer[1] = true;
            this.setState({
                answer: this.state.answer
            });
        }else{
            this.state.answer[1] = false;
            this.setState({
                answer: this.state.answer
            });
        }
    }

    calculateScore=()=>{
        var a = this.state.answer;
        var sc = this.state.score;
        for(var i=0; i<a.length;i++){
            if(a[i]==true){
                sc += 1;
            }
        }

        this.setState({
            score: sc,
            submit: true
        });
        
    }

    render() {
        return (
            <div>
                1. What is the full form of HTML? <br />
                <input
                    type="radio"
                    name="q1"
                    value="true"
                    onChange={this.handleQ1}
                />Hyper text markup language<br />
                <input type="radio" name="q1" value="false" onChange={this.handleQ1} />Hooper text markup language<br />
                <input type="radio" name="q1" value="false" onChange={this.handleQ1} />Hinder text markup languafe<br />
                <input type="radio" name="q1" value="false" onChange={this.handleQ1} />Hungry text markup languafe<br />

                2. What is the full form of CSS? <br />
                <input type="radio" name="q2" value="true" onChange={this.handleQ2}/>Cascade Stylesheet<br />
                <input type="radio" name="q2" value="false" onChange={this.handleQ2}/>Climber Stylesheet<br />
                <input type="radio" name="q2" value="false" onChange={this.handleQ2}/>Cucumber Stylesheet<br />
                <input type="radio" name="q2" value="false" onChange={this.handleQ2}/>Carrot Stylesheet<br />

                <button
                    onClick={this.calculateScore}
                >
                    submit
                </button>

                {this.state.submit==true? this.state.score:"" }
                
            </div>
        )
    }
}