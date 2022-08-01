import React from 'react'
import Logo from './logo.png'
import Clock from './clock-solid.svg'
import FormIn from './FormIn'


const Home = () => {
    const NextBtn = () => {
        var x = document.getElementById('section-1');
        var y = document.getElementById('section-2');
        if (x.style.display === "") {
            x.style.display = "none";
            y.style.display = 'flex';
        } 
    }
    return (
        <>
            <div className="home " id='section-1'>
                <div className="logo"><a href=""><img src={Logo} className="logo" alt="logo" /></a></div>
                <div className="text-zone">
                    <h2 className="title-text">90-Day Feedback Form</h2>
                    <p className="text-2">Please Complete your schedule performance review</p>
                    <button className="btn-submit" onClick={NextBtn}>Start</button>
                    <p className="small-text"><img src={Clock} width={15} alt="logo" />
                        Takes 2 minutes</p>
                </div>
            </div>
            <div className="home " id='section-2'>
                <FormIn />
               
            </div>
        </>
    )
}

export default Home