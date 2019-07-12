import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Link
} from "react-router-dom";
import Class5 from "../class5/class5";
import Class3 from "../class3/class3";
import Login from "./login";

export default class MyRouter extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to="setting"><button>Go to settings</button></Link>
          <Link to="/">Go to home</Link>
          <Link to="home2">Go to home</Link>

          <Route exact path="/" component={Login} />
          <Route path="/home2" component={Class3} />
          <Route path="/setting" component={Class5} />
        </BrowserRouter>
      </div>
    )
  }
}