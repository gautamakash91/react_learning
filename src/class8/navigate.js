import React from "react";
import {
  BrowserRouter,
  Link,
  Route
} from "react-router-dom";
import MyComp from "../class1/mycomp";
import Class5 from "../class5/class5";
import Trial from "./trial";

export default class MyRouter extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          {/* <Link to="class5">go to class 5</Link> */}

          <Route exact path="/" component={MyComp} />
          <Route path="/class5" component={Class5} />
          <Route path="/akash" component={Trial} />

        </BrowserRouter>
      </div>
    );
  }
}