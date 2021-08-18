import React from 'react'
import './Contact.css'
import { Avatar } from "@material-ui/core";

function Contact({profilePic, username}) {
  return (
    <div className="contact">
      <Avatar 
          src={profilePic}
          className="post__avatar" />
      <p>{username}</p>
      

    </div>
  )
}

export default Contact
