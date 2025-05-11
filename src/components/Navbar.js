import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
    const handleOnChange = (col) => {
        props.colorHandler(col.target.value);
    }
    return (
            <nav  className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link nav-item" to="/">Home</Link></li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/About">{props.about}</Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex">
                <label  style={{color:props.mode==='light'?'black':'white'}} className= 
                        "form-check-label" htmlFor="flexSwitchCheckDefault">Change Mode</label>
                    <button  onClick={props.modeHandler}  className={`bg-${props.mode==='light'?'dark':'white'} mx-2 rounded`} style={{width:"30px",height:"30px",cursor:"pointer",border:"1px solid",borderColor:props.mode==="dark"?"white":"black"}}></button>
                </div>
                    {/* <input type="color" onChange={handleOnChange} id="" /> <p className="mx-2 my-1" style={{ color: props.mode === "light" ? "black" : "white" }}> Choose any color to apply on background </p> */}
                </div>
            </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string,
}
Navbar.defaultProps = {
    title: "set yout title here",
    about: "set your about here"
}