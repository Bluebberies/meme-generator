import React from 'react';
import '../index.css';

function Header(){
    return(
        <div className='header'>
            <img  src='./images/troll-face.png' alt="" className='troll'/>
            <h1>Meme Generator</h1>
            <p>React Course - Project</p>
        </div>
    )
}

export default Header