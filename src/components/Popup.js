import React, { useState, useEffect } from 'react'
import './Popup.css'

function Popup(props) {


    return (props.trigger) ? (
        
        <div className = "popup" >
            <div className = "popup-inner">
                <i class="fa fa-times" style = {{cursor: "pointer"}}aria-hidden="true" onClick = {() => props.setTrigger(false)}></i>
                <h1>{props.index.title}</h1>
                <h3>{props.index.dates}</h3>
            </div>
        </div>
    ) : "";
}

export default Popup
