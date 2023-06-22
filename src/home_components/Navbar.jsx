import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">ChatNut</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/16747487/pexels-photo-16747487/free-photo-of-car-on-street-of-tulum-mexico.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""/>
        <span>Martin</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar