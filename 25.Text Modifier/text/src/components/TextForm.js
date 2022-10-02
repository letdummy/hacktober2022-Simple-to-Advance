import React,{useState} from 'react'



export default function Thisfun(props) {
  const handleupClick=()=>{
    console.log("uppercase clicked->"+text)
    let newText=text.toUpperCase();
    setText(newText)

  }
  const handleloClick=()=>{
    console.log("lowercase clicked->"+text)
    let newText=text.toLowerCase();
    setText(newText)

  }
  const handledelClick=()=>{
    console.log("clear clicked->"+text)
    let newText='';
    setText(newText)

  }
  const extraSpace=()=>{
    console.log("clear clicked->"+text)
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))

  }
  const handleOnChange=(event)=>{
    console.log("on change")
    setText(event.target.value)
  }
  const[text,setText]=useState('');
    return (
        
       <>
       <div>
    <div className="container">
      <h1>{props.heading}</h1>
      
      <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange}rows="8"></textarea>
    </div>
 <button className="btn btn-primary mx-2" onClick={handleupClick}>convert to uppercase</button>
 <button className="btn btn-secondary mx-2" onClick={handleloClick}>convert to lowercase</button>
 <button className="btn btn-warning mx-2" onClick={handledelClick}>clear</button>
 <button className="btn btn-danger mx-2" onClick={extraSpace}>Remove extra space</button>
        </div>
        <div className="container" my-3>
          <h1>Your text summary</h1>
          <p>{text.split(" ").length-1} words and  {text.length} characters</p>
        <p>{0.008*text.split(" ").length}-Minute(s) read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
        </>
      )
}


