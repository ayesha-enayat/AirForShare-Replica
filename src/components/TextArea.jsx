import React, { useRef } from 'react'
import "./index.scss"

const TextArea = ({onChange}) => {
    const textAreaRef = useRef();
    const resizeTextArea =(e)=>{
        textAreaRef.current.style.height = "24px";
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";

    }
  return (
    <textarea onChange={onChange} ref={textAreaRef} onInput={resizeTextArea} className='text-area' placeholder='Type something ...' ></textarea>
  )
}

export default TextArea
