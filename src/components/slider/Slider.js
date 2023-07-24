import React from "react";

import './Slider.css'



export const Slider = () => {


    return (
        <div className="css-slider-wrapper">
            <input type="radio" name="slider" className="slide-radio1" defaultChecked id="slider_1"/>
            <input type="radio" name="slider" className="slide-radio2" id="slider_2"/>
            <input type="radio" name="slider" className="slide-radio3" id="slider_3"/>
            <input type="radio" name="slider" className="slide-radio4" id="slider_4"/>
            <input type="radio" name="slider" className="slide-radio5" id="slider_5"/>
            <input type="radio" name="slider" className="slide-radio6" id="slider_6"/>
            <div className="slider-pagination">
                <label htmlFor="slider_1" className="page1"></label>
                <label htmlFor="slider_2" className="page2"></label>
                <label htmlFor="slider_3" className="page3"></label>
                <label htmlFor="slider_4" className="page4"></label>
                <label htmlFor="slider_5" className="page5"></label>
                <label htmlFor="slider_6" className="page6"></label>
            </div>


            <div className="next control">
                <label htmlFor="slider_1" className="numb1"><div className='rightArrow'></div></label>
                <label htmlFor="slider_2" className="numb2"><div className='rightArrow'></div></label>
                <label htmlFor="slider_3" className="numb3"><div className='rightArrow'></div></label>
                <label htmlFor="slider_4" className="numb4"><div className='rightArrow'></div></label>
                <label htmlFor="slider_5" className="numb5"><div className='rightArrow'></div></label>
                <label htmlFor="slider_6" className="numb6"><div className='rightArrow'></div></label>
            </div>
            <div className="previous control">
                <label htmlFor="slider_1" className="numb1"><div className='leftArrow'></div></label>
                <label htmlFor="slider_2" className="numb2"><div className='leftArrow'></div></label>
                <label htmlFor="slider_3" className="numb3"><div className='leftArrow'></div></label>
                <label htmlFor="slider_4" className="numb4"><div className='leftArrow'></div></label>
                <label htmlFor="slider_5" className="numb5"><div className='leftArrow'></div></label>
                <label htmlFor="slider_6" className="numb6"><div className='leftArrow'></div></label>
            </div>

            <div className="slider slide1">
                <div className='sliderText1'></div>
                <div className='sliderClients1'></div>
                <div className='mobileTextContainer1'>
                    <p className='mobileTextWrapper'><span className='highlightedText'>€2,500 </span><span className='mobileUppercaseText'>WELCOME PACKAGE</span></p>
                    <p className='mobileTextWrapper'><span className='mobileSmallText'>plus </span><span className='highlightedText'>150% </span><span className='mobileUppercaseText'>BONUS</span></p>
                    <p className='mobileTextWrapper'><span className='mobileSmallText'>and </span><span className='highlightedText'>100 </span><span className='mobileUppercaseText'>FREE SPINS</span></p>
                </div>
                <button className='mobileRegisterBtn'>register now</button>
            </div>
            <div className="slider slide2">
                <div>
                    <h2>Here can be your ad :)</h2>
                </div>
            </div>
            <div className="slider slide3">
                <div>
                    <h2>Full screen animation slider</h2>
                </div>
            </div>
            <div className="slider slide4">
                <div>
                    <h2>css3 slider</h2>
                </div>
            </div>
            <div className="slider slide5">
                <div>
                    <h2>5 slider</h2>
                </div>
            </div>
            <div className="slider slide6">
                <div>
                    <h2>6 slider</h2>
                </div>
            </div>
        </div>
    )
}