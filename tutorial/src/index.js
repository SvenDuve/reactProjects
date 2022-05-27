import React from "react";
import * as ReactDOM from "react-dom";

function Greeting() {
  return <h1>This is me and my first component</h1>;
}


ReactDOM.render(<Greeting />, document.getElementById('root'));