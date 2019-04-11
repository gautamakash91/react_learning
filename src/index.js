import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import MyRouter from "./router/router";
// import BS from "./router/bs";
import Chat from "./chat";
// import Code from "./code";

// import * as monaco from 'monaco-editor';

// monaco.editor.create(document.getElementById('container'), {
//   value: [
//     'function x() {',
//     '\tconsole.log("Hello world!");',
//     '}'
//   ].join('\n'),
//   language: 'javascript'
// });

ReactDOM.render(<Chat />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
