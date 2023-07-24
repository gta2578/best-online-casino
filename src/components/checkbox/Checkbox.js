import React from "react";

import './Checkbox.css'


export const Checkbox = ({ text }) => {


    return(
        <>
            <input className="custom-checkbox" id="myCheckbox" type="checkbox"/>
            <label htmlFor="myCheckbox">{text}</label>
        </>
    )
}