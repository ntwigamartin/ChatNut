import React from 'react'

export const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>ChatNut</span>
            <span className='title'>Login</span>
            <form>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Sign in</button>
            </form>
            <p>Do not have an account? Register</p>
        </div>

    </div>
  )
}
