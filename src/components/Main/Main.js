import React from 'react'
import './Main.css'
import ReactPlayer from "react-player";

function Main() {
    return (
        <div>
           <div id="hero" className="hero">
               <br></br>
               <hr></hr>
               <h2>WHAT</h2>
                <h2>IS</h2>
                <h1>RHYTHMIC</h1>
                <h1>AURA?</h1>
                <hr></hr>
            </div>

            <div id="about">
                <br></br>
                <div className="aboutsection">
                    <div id="container">
                        
                    </div>  
                </div>
            </div>
            <div id="music">
                <div className="musicsection">
                <ReactPlayer url='https://www.youtube.com/watch?v=P0WnROSm-m0'/>
                </div>
            </div>
            <div id="gallery">
                <div className="gallerysection">
                    <h1>Hello</h1>
                </div> 
            </div>
            <div id="contact">
                <div className="contactsection">
                    <h1>Hello</h1>
                </div>
            </div>
        </div>
    )
}

export default Main