import React, { useEffect, useRef } from 'react'
import "./index.scss"

const TextArea = ({ value, onChange }) => {
  const textAreaRef = useRef();
  const resizeTextArea = (e) => {
    textAreaRef.current.style.height = "24px";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";

  }
  useEffect(() => {
    resizeTextArea()
  }, [value])
  return (
    <textarea value={value} onChange={onChange} ref={textAreaRef} onInput={resizeTextArea} className='text-area' placeholder='Type something ...' ></textarea>
  )
}

export default TextArea
