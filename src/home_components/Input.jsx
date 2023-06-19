import React from 'react'
import upload from '../img/upload2.png'
import attach from '../img/attach.png'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' />
      <div className="send">
        <img src={attach} alt="" />
        <input type="file" style={{display:"none"}} id='file'/>
        <label htmlFor="file">
          <img src={upload} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input