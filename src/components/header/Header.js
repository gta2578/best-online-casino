import React, {useState} from "react";
import { NavBar } from "../navBar/NavBar";
import { Signup } from "../signup/Signup";
import { Login } from "../login/Login";
import casinoLogo from '../../icons/casino.svg';

import './Header.css'
import {MobileMenu} from "../mobileMenu/MobileMenu";


export const Header = () => {

    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

    const handleClickBurgerBtn = () => {
        setIsMobileMenuOpened(!isMobileMenuOpened);
    }


    return (
        <header className='headerContainer'>
            <div className='headerWrapper'>
                <div className='burgerBtnContainer'>
                    <div onClick={handleClickBurgerBtn} className='burgerMenuBtn'>
                        <div className={`line ${isMobileMenuOpened ? 'firstLine' : ''}`}></div>
                        <div className={`line ${isMobileMenuOpened ? 'secondLine' : ''}`}></div>
                        <div className={`line ${isMobileMenuOpened ? 'thirdLine' : ''}`}></div>
                    </div>
                    <MobileMenu isMobileMenuOpened={isMobileMenuOpened} />
                </div>
                <NavBar />
                <div className='registrationContainer'>
                    <img className='casinoLogo' src={casinoLogo} alt=""/>
                    <div className='registrationWrapper'>
                        <Signup />
                        <Login />
                        <div className='languageIcon'></div>
                    </div>
                </div>
            </div>
        </header>
    )
}