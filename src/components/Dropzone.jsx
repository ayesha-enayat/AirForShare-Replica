import React from 'react'
import { useDropzone } from 'react-dropzone'
import "./index.scss"

const Dropzone = ({textElement}) => {
    const onDrop = acceptedFiles => {
        console.log("accepted files", acceptedFiles)
    }
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div className='dropzone' {...getRootProps()}>
            <input {...getInputProps()} />
            <div>
                {textElement}
            </div>
        </div>
    )
}

export default Dropzone
