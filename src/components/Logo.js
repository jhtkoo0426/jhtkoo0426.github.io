import React from "react";

// Styling
import "../css/logo.scss";


const Logo = () => {
    return (
        <div className='left-content'>
          <div className='icon'>
            <div className='icon-inner'>
              <p className='cn-last-name'><b>古</b></p>
              <p className='cn-first-name'><b>皓天</b></p>
            </div>
          </div>
          <div className='en-name'>
            <p className='name'>Justin Koo</p>
            <p className='title'>Data Enthusiast</p>
          </div>
        </div>
    )
}


export default Logo;