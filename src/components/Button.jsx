import React from 'react'

const ThemeButton = ({disabled,title,onClick}) => {
  return (
    <div>
      <button style={{borderColor: disabled && "#a1a3a1"}} disabled={disabled} className='theme-button' onClick={onClick}>{title}</button>
    </div>
  )
}

export default ThemeButton
