import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return  lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
            <div style={{height:"50px"}}>
            {props.displayMsg && <div className = {`alert alert-${props.displayMsg.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.displayMsg.type)} : </strong>  {props.displayMsg.msg}
            </div>}
            </div>
    )
}
    