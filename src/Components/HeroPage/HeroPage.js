import React from 'react';
import heroImage from '../../assessts/heroPage.jpg';
import './HeroPage.css'

const HeroPage = () => {
    return (
      <section>
        <div className="homepage-container">
            <div className="left">
            <div className="content">
                    <h1> 
                        Using <b>AI</b> 
                    <br/>
                    To give you <br/>
                    Super- <i>powers</i> 
                    </h1>
                    <input type="text"/>              
                    <button>Contact</button>
                </div>
            </div>
            <div className="right">
                
            </div>

        </div>
    </section>


    );
}

export default HeroPage
