import React from 'react';
import "./Home.css";

function Home() {
    return (
        <div className="homepage-wrapper">
            <img src="Logo.png"
                alt="" />
            <div className="homepage-buttons">
                <a href='./puma' className="btn">
                    Puma
                </a>
                <a href='./adidas' className="btn">
                    Adidas
                </a>
                <a href='./airjordan' className="btn">
                    Air Jordan
                </a>
                <a href='./about' className="btn">
                    About
                </a>
            </div>
            
        </div>
    );
}

export default Home;
