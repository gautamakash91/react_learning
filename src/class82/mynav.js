import React, { Component } from "react";
import {
  BrowserRouter,
  Link,
  Route
} from "react-router-dom";

import Class5 from "../class5/class5";
import Class6 from "../class6/class6";


export default class MyNav extends Component {
  render() {
    return (
      <div>
        Logo
        <BrowserRouter>
          <Link
          to={{
            pathname:"mcq",
            state:{
              a: 10
            }
          }}
          >MCQ</Link>
          {/* <Link to="mcq">go to mcq page</Link> */}
          <Route exact path="/" component={Class5} />
          <Route path="/mcq" component={Class6} />

        </BrowserRouter>
      </div>
    )
  }
}