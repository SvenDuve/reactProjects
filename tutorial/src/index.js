import React from "react";
import * as ReactDOM from "react-dom";

// stateless fucntiona component
// always return JSX I mean alwas return somehtiung


function Greeting() {
  return (
  <div>
    <h1>Hellod This is some react frameworkd stuffy</h1>
    <ul>
      <li>super boring</li>
    </ul>
  </div>
  );
}

// const Greeting = () =>{
//   return React.createElement('h1',{},'hello I am a cockmuncher');
// }


ReactDOM.render(<Greeting />, document.getElementById('root'));