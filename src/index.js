import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import App from "./app";
import MyComp from "./class1/mycomp";
import MyArray from "./class2/class2";
import Class3 from "./class3/class3";
import Class31 from "./class3/class3_1";

ReactDOM.render(<Class31 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
