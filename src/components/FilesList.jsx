import React from 'react'
import { CiFileOn } from "react-icons/ci";
import Dropzone from './Dropzone';
import { IoIosAdd } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaFileImage } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa6";



const FilesList = ({ files, onDrop }) => {
  console.log(files)
  return (
    <div className='files-list'>
      {files.map((v, i) => {
        console.log(v.type)
        let icon;
        switch (v.type) {
          case 'text/html':
            icon = <FaHtml5 />
            break;
          case 'text/css':
            icon = <FaCss3Alt />
            break;
          case 'text/javascript':
            icon = <IoLogoJavascript />
            break;
          case 'image':
            icon = <FaFileImage />
            break;
          case 'application/pdf':
            icon = <FaFilePdf />
            break;
          default:
            icon = <CiFileOn />

        }
        return (
          <div key={i}>
  
            {v.type.indexOf("image") !== -1 ?
         
          
            <img  className="image-file" width={"100"} height={100} src={URL.createObjectURL(v)} alt="uploaded file" />
            :
            <>
            {icon}
            <span className='file-name'>
              {v.name.slice(0, 10)}<b>{v.name.slice(v.name.lastIndexOf("."))}</b>
            </span>
            </>
            }
          </div>

        )
      }
      )}

      <div >
        <Dropzone onDrop={onDrop} textElement={
          <span className='add-more-files'>
            <IoIosAdd />
            <p>Add File</p>
            <span className='upto5MB'>(upto 5MB)</span>
          </span>
        } />
      </div>

    </div>

  )
}



export default FilesList
