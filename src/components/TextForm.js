import React,{useState} from 'react';

export default function TextForm(props) {
     
    
    const handleUpClick=()=>{
         
        //console.log("UpperCase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)

     }
     const handleLowClick=()=>{
         
       // console.log("LowerCase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText)

     }
     const handleOnChange=(event)=>{ 
         console.log("On change")
         setText(event.target.value);

     }

    const [text, setText] = useState("");
  return( 
  <>
  
  <div style={{color: props.mode==='dark'?'white':'black'}}>

  <div className="mb-3">
      <h1>{props.heading}
      </h1>
    <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}  aria-label="With textarea" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
  <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To Lowercase</button>
  </div>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>

   <h1 >
       Your Text Summary
   </h1>
   <p>{text.split(" ").length} words and {text.length} characters</p>
   <h2>Preview</h2>
   <p>{text.length>0?text:"Nothing to preview"}</p>
   <p>{0.008*text.split(" ").length} Minutes to read</p>

  </div>
  </>
  )
}
