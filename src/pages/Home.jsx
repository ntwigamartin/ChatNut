import React from 'react'
import Sidebar from '../home_components/Sidebar'
import Chat from '../home_components/Chat'

export const Home = () => {
  return (
    <div className='home'>
        <div className="container">
            <Sidebar />
            <Chat />
        </div>
    </div>
  )
}
