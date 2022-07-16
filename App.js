import React, { useState } from "react";
// import About from "./components/About.js";
import Alert from "./components/Alert.js";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
export default function App() {
  const [mode, setMode] = useState("light");
  const [message, setMessage] = useState(null);
  const showMsg = (message, type) => {
    setMessage({
      msg: message,
      type: type
    })
    setTimeout(() => { setMessage("") }, 2000);
  }
  const modeHandler = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#04102b";
      showMsg("Dark mode is enabled", "success");
      document.title = "Text Utils - Dark Mode";
      setInterval(() => { document.title = "Download Text Utils now" }, 200);
      setInterval(() => { document.title = "Text Utils is Best🅱️❤️" }, 300);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showMsg("Dark mode is disabled", "warning");
      document.title = "Text Utils- Home"
    }
  }
  const [color, setColor] = useState("white");
  const applyBgColor = (col) => {
    document.body.style.backgroundColor = col;
    setColor(col);
  }
  return (
    <>
      {/* <BrowserRouter> */}

        <Navbar mode={mode} colorHandler={applyBgColor} modeHandler={modeHandler} title=" Text Utils" about="About" />
        <Alert displayMsg={message} />
{/* 
        <Routes>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/" element={ */}
          <div className="container my-1">
            <TextForm color={color} displayMsg={showMsg} mode={mode} heading="Enter the text to analyze below " />
          </div>
        {/* }></Route>
        </Routes>

      </BrowserRouter> */}
    </>
  )
}
