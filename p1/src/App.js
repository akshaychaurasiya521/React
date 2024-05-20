import React, { useState } from 'react';
import './index.css';
function App() {
  //set usestate
  const [text, tnext] = useState("Enter Your Text Here");
  //uppercase
  const up = () => {
    let newText = text.toUpperCase();
    tnext(newText);
  };
  //lowercase
  const lw = () => {
    let newText = text.toLowerCase();
    tnext(newText);
  };
  //cleartext
  const cltext = () => {
    let newText = "";
    tnext(newText);
  };
  //Editable Textarea
  const f1 = (event) => {
    tnext(event.target.value);
  };
  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-12'>
          <h1>You text here</h1>
          <textarea rows="10" cols="80" value={text} onChange={f1}></textarea>
          <button onClick={lw}>lower case</button>
          <button onClick={up}>uppercase</button>
          <button onClick={cltext}>Clear text</button>
          <h1 id='a1'>Text summery</h1>
          <p> you type {text.split(" ").length} words and {text.length} characters</p>
          <br></br>
          <br></br>
          <h1 id='a1'>Preview text</h1>
          <p>{text}</p>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  )
}
export default App;
