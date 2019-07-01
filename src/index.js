import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import App from "./app";
import MyComp from "./class1/mycomp";
import MyArray from "./class2/class2";
import Class3 from "./class3/class3";
import Class31 from "./class3/class3_1";
import MyRenderer from "./class4/conditional_render";
import Class5 from "./class5/class5";
import Class52 from "./class5/class52";
import Trial from "./trial";
import Class61 from "./class6/class61";
import Class62 from "./class6/class62";

ReactDOM.render(<Class62 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
