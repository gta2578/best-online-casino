import React, {useState} from "react";
import {RegistrationForm} from "../registrationForm/RegistrationForm";

import './Signup.css'


export const Signup = () => {

    const [isBtnClicked, setIsBtnClicked] = useState(false);

    const handleClickRegisterBtn = () => {
        setIsBtnClicked(true);
    }


    return (
        <div onClick={handleClickRegisterBtn} className='signupContainer'>
            <button onClick={handleClickRegisterBtn} className='signupBtn'>join now</button>
            <RegistrationForm isBtnClicked={isBtnClicked} setIsBtnClicked={setIsBtnClicked} />
        </div>
    )
}