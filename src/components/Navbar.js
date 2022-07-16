import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
    const handleOnChange = (col) => {
        props.colorHandler(col.target.value);
    }
    return (
        <div style={{ position: 'sticky', top: "0px", bottom: "800px" }} className="blank">
            <nav className={`navbar navbar-expand-lg bg-${props.mode === "light" ? "light" : "dark"} navbar-${props.mode === "light" ? "light" : "dark"}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <a className="navbar-brand" href="#">Home</a>
                    {/* <a className="navbar-brand" href="#About">{props.about}</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" onClick={props.modeHandler} id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault"> {props.mode === "light" ? "Enable" : "Disable"} Dark Mode</label>
                    </div>
                    {/* <div className ="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label style={{color:props.mode==="light"?"green":"red"}} className="form-check-label text-" htmlFor="flexSwitchCheckDefault">  Dark Mode</label>
                    </div> */} &nbsp;
                    <input type="color" onChange={handleOnChange} id="" /> <p className="mx-2 my-1" style={{ color: props.mode === "light" ? "black" : "white" }}> Choose any color to apply on background </p>
                </div>
            </nav>

        </div>
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