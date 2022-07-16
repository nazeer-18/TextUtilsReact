import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.displayMsg("converted to upperCase ","success");
    }
    const handleLoClick = () => {
        console.log("Convert to Lower case button is clicked " + text);
        setText(text.toLowerCase());
        props.displayMsg("converted to lowerCase ","success");
    }
    const handleClearClick = () => {
        console.log("clear text is clicked ");
        setText("");
        props.displayMsg("Cleared text ","warning");
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.displayMsg("Copied to clipboard  ","success");
    }
    const handleRemoveClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.displayMsg("Removed extra spaces ","success");
    }
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }

    return (
        <div style={{color:props.mode==='light'?'black':'white'}} >
            <h2>{props.heading}  </h2>
            <div className="mb-3">
                <textarea style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='dark'?'rgb(64 66 88)':'white'}} className={`form-control `} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button style={{backgroundColor:props.color, color: props.mode!==props.color?"black":props.color , border:"2px solid black"} } className="btn btn-primary mx-2" value="" onClick={handleUpClick} >Convert to Uppercase</button>
            <button style={{backgroundColor:props.color, color: props.mode!==props.color?"black":props.color , border:"2px solid black"}}  className="btn btn-primary mx-2" onClick={handleLoClick} > Convert to LowerCase </button>
            <button style={{backgroundColor:props.color, color: props.mode!==props.color?"black":props.color , border:"2px solid black"}}  className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button style={{backgroundColor:props.color, color: props.mode!==props.color?"black":props.color , border:"2px solid black"}}  className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
            <button style={{backgroundColor:props.color, color: props.mode!==props.color?"black":props.color , border:"2px solid black"}}  className="btn btn-primary mx-2" onClick={handleRemoveClick}>Remove Extra Spaces</button>
            <h2 style={{ textDecoration: "underline", marginLeft: "40%" }} className="my-2">Text Summary</h2>
            <h4 style={{ float: "left" }} >Word Count : {text.length===0?"0":text.split(" ").length} </h4>
            <h4 style={{ float: "right" }}> &nbsp;Character Count : {text.length}</h4>
            <h4 style={{ textAlign: "center" }}>Time Required To Read The Preview Is : {text.length===0?"0":0.008 *text.split(" ").length}</h4>
            <h4 style={{ textDecoration: "underline", marginLeft: "10px" }}  >Preview :-  </h4>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text.length===0?"Enter your text in above box to preview it here":text}</p>

        </div>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
}
TextForm.defaultProps = {
    heading: "write",
}
