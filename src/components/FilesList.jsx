import React from 'react'
import { CiFileOn } from "react-icons/ci";
import Dropzone from './Dropzone';
import { IoIosAdd } from "react-icons/io";

const FilesList = () => {
  return (
    <div className='files-list'>
      <div>     
    <CiFileOn />
    <span>index.html</span>
      </div>
      <div >
      <Dropzone textElement={
        <span className='add-more-files'>
            <IoIosAdd />
            <p>Add File</p> 
            <span className='upto5MB'>(upto 5MB)</span>
            </span>
        }/>
      </div>
      
    </div>
  )
}

export default FilesList
