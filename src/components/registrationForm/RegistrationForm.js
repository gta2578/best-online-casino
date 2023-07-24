import React, { useState } from "react";
import { Checkbox } from "../checkbox/Checkbox";
import showPasswordIcon from '../../icons/show_password.png';
import hidePasswordIcon from '../../icons/hide_password.png';

import './RegistrationForm.css'



export const RegistrationForm = ({ isBtnClicked, setIsBtnClicked }) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const handleChange = (e, setter) => {
        setter(e.target.value)
    }

    const handleClosePopup = () => {
        setIsBtnClicked(false);
    }

    const handleClickPasswordIcon = () => {
        setShowPassword(!showPassword);
    }

    const handleClickConfirmPasswordIcon = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    const onFocusInput = () => {

    }


    const firstCheckboxText = 'I would like to receive news and special promotions';
    const secondCheckboxText = 'I would like to receive exclusive offers WhatsApp/SMS/Other Services';
    const thirdCheckboxText = "I'm over 18 and I have read and accepted the T&C and Privacy Policy Terms and Conditions";


    return (
        <>
            <div className={`formContainer ${isBtnClicked ? 'visiblePopup' : ''}`}>
                <div onClick={handleClosePopup} className='closeIcon'>
                    <div className='lineOne'></div>
                    <div className='lineTwo'></div>
                </div>
                <div className='adTextContainer'>
                    <div className='adText'>
                        <div className='bigAdText'><span className='mainText'>150% bonus </span><span className='secondaryText'>up to</span></div>
                        <div className='bigAdText'><span className='mainText'>€500 </span><span className='secondaryText'>plus</span></div>
                        <div className='smallAdText'><span className='mainText'>100 free spins </span><span className='secondaryText'>on your </span></div>
                        <div className='smallAdText'><span className='secondaryText'>first deposit</span></div>
                    </div>
                </div>
                <h2 className='registerTitle'>Register</h2>
                <form name="registration">
                    <div className='inputContainer'>
                        <div className='inputWrapper'>
                            <label htmlFor="firstNameId">First name<span className='star'>*</span></label>
                            <input onChange={(e) => handleChange(e, setName)} id='firstNameId' className="inputField" type="text" required value={name} name="firstName"/>
                        </div>
                        <div className='inputWrapper'>
                            <label htmlFor="lastNameId">Last name<span className='star'>*</span></label>
                            <input onChange={(e) => handleChange(e, setLastName)} id='lastNameId' className="inputField" type="text" required value={lastName} name="lastName"/>
                        </div>
                    </div>
                    <div className='inputContainer'>
                        <div className='inputWrapper'>
                            <label htmlFor="countryId">Country<span className='star'>*</span></label>
                            <input onChange={(e) => handleChange(e, setCountry)} id='countryId' className="inputField" type="text" required value={country} name="country"/>
                        </div>
                        <div className='inputWrapper'>
                            <label htmlFor="phoneId">Phone number<span className='star'>*</span></label>
                            <input onChange={(e) => handleChange(e, setPhone)} id='phoneId' className="inputField" type="tel" required value={phone} name="phone"/>
                        </div>
                    </div>
                    <div className='inputContainer'>
                        <div className='inputWrapper'>
                            <label htmlFor="emailId">Email address<span className='star'>*</span></label>
                            <input onChange={(e) => handleChange(e, setEmail)} id='emailId' className="inputField" type="email" required value={email} name="email"/>
                        </div>
                        <div className='inputWrapper'>
                            <label htmlFor="passwordId">Password<span className='star'>*</span></label>
                            <input onChange={(e) => handleChange(e, setPassword)} id='passwordId' className="inputField" type={`${showPassword ? 'text' : 'password'}`} required value={password} name="password"/>
                            {showPassword ? <img className='passwordIcon' onClick={handleClickPasswordIcon} src={hidePasswordIcon} alt=""/> : <img className='passwordIcon' onClick={handleClickPasswordIcon} src={showPasswordIcon} alt="show password"/>}
                        </div>
                    </div>
                    <div className='inputContainer'>
                        <div className='inputWrapper'>
                            <label htmlFor="confirmPasswordId">Confirm password<span className='star'>*</span></label>
                            <input onChange={(e) => handleChange(e, setConfirmPassword)} id='confirmPasswordId' className="inputField" type={`${showConfirmPassword ? 'text' : 'password'}`} required value={confirmPassword} name="confirmPassword"/>
                            {showConfirmPassword ? <img className='passwordIcon' onClick={handleClickConfirmPasswordIcon} src={hidePasswordIcon} alt=""/> : <img className='passwordIcon' onClick={handleClickConfirmPasswordIcon} src={showPasswordIcon} alt="show password"/>}
                        </div>
                    </div>
                    <div className='checkboxGroup'>
                        <div className='checkboxContainer'>
                            <Checkbox text={firstCheckboxText} />
                        </div>
                        <div className='checkboxContainer'>
                            <Checkbox text={secondCheckboxText} />
                        </div>
                        <div className='checkboxContainer'>
                            <Checkbox text={thirdCheckboxText} />
                        </div>
                        <button className='registerBtn'>register <span className='arrow'> > </span></button>
                        <div className='haveAccountContainer'>
                            <span>Have an account?</span>
                            <a href="">Log in</a>
                        </div>
                    </div>
                </form>
            </div>
            <div onClick={handleClosePopup} className={`disabledGround ${isBtnClicked ? 'visiblePopup' : ''}`}></div>
        </>
    )
}