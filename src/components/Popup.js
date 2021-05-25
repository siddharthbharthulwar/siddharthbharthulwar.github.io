import React, { useState, useEffect } from 'react'
import './Popup.css'

function Popup(props) {

    var image = require('../img/' + props.index.imgFileName)

    return (props.trigger) ? (
        
        <div className = "popup" >
            <div className = "popup-inner">
                <i class="fa fa-times" style = {{cursor: "pointer"}}aria-hidden="true" onClick = {() => props.setTrigger(false)}></i>
                <h1>{props.index.title}</h1>
                <h3>{props.index.dates}</h3>
                <img src = {image.default}></img>
            </div>
        </div>
    ) : "";
}

export default Popup
