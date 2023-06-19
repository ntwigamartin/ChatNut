import React from 'react'
import upload from '../img/upload.png'

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>ChatNut</span>
            <span className='title'>Register</span>
            <form>
                <input type="text" placeholder='name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display:"none"}} type="file" id='file'/>
                <label htmlFor="file">
                    <img src={upload} alt=""/>
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Already have an account? Login</p>
        </div>

    </div>
  )
}
