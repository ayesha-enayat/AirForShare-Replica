import React from 'react'
import logoIMG from "../../assets/logo.svg"
import textgrey from "../../assets/text-grey.svg"
import filegrey from "../../assets/files-grey.svg"
import textColor from "../../assets/text-color.svg"
import fileColor from "../../assets/files-color.svg"

import "./css/style.scss"

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <div className='header-bar'>
          <div className='logo'>
            <img src={logoIMG} alt="logo" />
          </div>
          <div className='menu'>
            <ul>
              <li>How it works</li>
              <li>Download</li>
              <li>Upgrade</li>
              <li>Feedback</li>
              <li className='login'>Login/Register</li>
            </ul>
          </div>
        </div>
        <div className="main-card">

          <div className="card-sidebar">
            <div className=''> <img src={textColor} alt="" /></div>

            <div className='active'><img src={filegrey} alt="" /></div>


          </div>
          <div className="card-container">

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
