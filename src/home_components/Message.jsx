import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/16747487/pexels-photo-16747487/free-photo-of-car-on-street-of-tulum-mexico.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" 
            alt="ijk" 
            />
          <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://images.pexels.com/photos/16747487/pexels-photo-16747487/free-photo-of-car-on-street-of-tulum-mexico.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"  
            alt="ijk" />
      </div>
    </div>
  )
}

export default Message