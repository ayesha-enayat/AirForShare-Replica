import React, { useState } from 'react'
import Dropzone from '../../components/Dropzone'
import FilesList from '../../components/FilesList'


import logoIMG from "../../assets/logo.svg"
import textgrey from "../../assets/text-grey.svg"
import filegrey from "../../assets/files-grey.svg"
import textColor from "../../assets/text-color.svg"
import fileColor from "../../assets/files-color.svg"

import "./css/style.scss"
import TextArea from '../../components/TextArea'
import ThemeButton from '../../components/Button'

const HomePage = () => {
  const [type, setType] = useState("text")
  const [textValue, setTextValue] = useState("")

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
            <div onClick={() => setType("text")} className={type === "text"}> <img src={type === "text" ? textColor : textgrey} alt="" /></div>

            <div onClick={() => setType("files")} className={type === "files"}><img src={type === "files" ? fileColor : filegrey} alt="" /></div>


          </div>
          <div className="card-container">
            {type === "text" ?
              <div className="text-section">
                <h1>Text</h1>
                <div className='resize-section'>
                  <TextArea value={textValue} onChange={(e) => setTextValue(e.target.value)} />
                </div>
                <div className="save-btn-section">
                  <span>Clear</span>
                  <ThemeButton title="Save" disabled={textValue ? false : true} />
                </div>
              </div>
              :
              <div className="files-section">
                <h1>Files</h1>
                {/* <Dropzone textElement={<>Drag and drop any files up to 2 files , 5Mbs each or <span>Browse Upgrade </span>
                  to get more space</>}/> */}
                <FilesList />
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
