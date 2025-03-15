import React, { useEffect, useState } from 'react'
import Dropzone from '../../components/Dropzone'
import FilesList from '../../components/FilesList'
import { FaDownload } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./css/style.scss"
import TextArea from '../../components/TextArea'
import ThemeButton from '../../components/Button'
import { database, ref, set, onValue, remove } from '../../db/index';

import logoIMG from "../../assets/logo.svg"
import textgrey from "../../assets/text-grey.svg"
import filegrey from "../../assets/files-grey.svg"
import textColor from "../../assets/text-color.svg"
import fileColor from "../../assets/files-color.svg"


const HomePage = () => {
  const [type, setType] = useState("text")
  const [textValue, setTextValue] = useState("")
  const [isText, setIsText] = useState(false)
  const [files, setFiles] = useState([])

  const onDrop = acceptedFiles => {
    // console.log("accepted files", acceptedFiles)
    setFiles([...files, ...acceptedFiles]);
  }

  const saveChanges = () => {
    console.log("text value", textValue);
    set(ref(database, 'sharing'), {
      text: textValue
    });
  }

  const clearText = async () => {
    await remove(ref(database, 'sharing'));
    setTextValue("")
    setIsText(false);
  }

  useEffect(() => {
    const starCountRef = ref(database, 'sharing');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data.text);
      setTextValue(data.text);
      if (data.text) {
        setIsText(true);
      }
    })
  }, [])
  var expression =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  const regex = new RegExp(expression)
  const links = textValue.match(regex) || [];
  console.log("textValue", textValue);


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
                  <TextArea value={textValue} onChange={(e) => {
                    setTextValue(e.target.value)
                    setIsText(false)
                  }} />
                </div>
                <div className='text-footer'>
                  <div className='link'>
                    {links.map((v, i) => (
                      <div key={i}>
                        <span>
                          <a href={v} target="_blank" rel="noopener noreferrer">{v}</a>
                        </span>
                      </div>
                    ))
                    }
                  </div>
                  <div className="save-btn-section">
                    <span onClick={clearText}>Clear</span>
                    {
                      isText ?
                        <ThemeButton onClick={() => {
                          navigator.clipboard.writeText(textValue);
                        }} title={"Copy"} />
                        :
                        <ThemeButton onClick={saveChanges} title="Save" disabled={textValue ? false : true} />
                    }

                  </div>
                </div>

              </div>
              :
              <div className="files-section">
                <div className='files-header'>
                  <h1>Files</h1>
                  <div className='files-btn'>
                    <div className='download-btn'><FaDownload /> Download All </div>
                    <div onClick={() => setFiles([])} className='delete-btn'><MdDelete /> Delete All </div>
                  </div>
                </div>
                {files.length ?
                  <FilesList onDrop={onDrop} files={files} />
                  :
                  <Dropzone
                    onDrop={
                      onDrop
                    }
                    textElement={
                      <>Drag and drop any files up to 2 files , 5Mbs each or <span>Browse Upgrade </span>
                        to get more space
                      </>
                    } />
                }

              </div>

            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
