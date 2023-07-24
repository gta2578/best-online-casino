import React from "react";
import {Signup} from "../signup/Signup";
import {Login} from "../login/Login";

import './MobileMenu.css'

export const MobileMenu = ({ isMobileMenuOpened }) => {


    return (
        <div className={`menuContainer ${isMobileMenuOpened ? 'visible' : ''}`}>
            <ul className='mobileMenu'>
                <li className='mobileMenuItem'>Home</li>
                <li className='mobileMenuItem'>
                    <Signup />
                    <Login />
                </li>
                <li className='mobileMenuItem'>support</li>
                <li className='mobileMenuItem'>games</li>
                <li className='mobileMenuItem'>promotions</li>
                <li className='mobileMenuItem'>banking</li>
                <li className='mobileMenuItem'>change language:</li>
            </ul>
        </div>
    )
}