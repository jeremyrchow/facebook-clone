import React from 'react'
import './Contacts.css'
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Contact from './Contact';
import { IconButton } from '@material-ui/core';
function Contacts() {
  return (
    <div className="contacts" >
      <div className="contacts__header">
        <h3> Contacts </h3>
        <div className="contacts__icons">
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          <IconButton>
            <SearchIcon/>
          </IconButton>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
          
          
        </div>
      </div>

      <div className="contacts__list">
        <Contact
          profilePic={"https://media-exp1.licdn.com/dms/image/C5603AQFAKN4ErXYy1w/profile-displayphoto-shrink_100_100/0/1554765001760?e=1634774400&v=beta&t=gKMoe6dH8ZC18W79obELln65L0_p_nUrJwuP9LAUJGI"}
          username={"Jeremy Chow"}
        />
        <Contact
          profilePic={"https://media-exp1.licdn.com/dms/image/C5603AQFAKN4ErXYy1w/profile-displayphoto-shrink_100_100/0/1554765001760?e=1634774400&v=beta&t=gKMoe6dH8ZC18W79obELln65L0_p_nUrJwuP9LAUJGI"}
          username={"Jeremy Chow"}
        />
        <Contact
          profilePic={"https://media-exp1.licdn.com/dms/image/C5603AQFAKN4ErXYy1w/profile-displayphoto-shrink_100_100/0/1554765001760?e=1634774400&v=beta&t=gKMoe6dH8ZC18W79obELln65L0_p_nUrJwuP9LAUJGI"}
          username={"Jeremy Chow"}
        />
        <Contact
          profilePic={"https://media-exp1.licdn.com/dms/image/C5603AQFAKN4ErXYy1w/profile-displayphoto-shrink_100_100/0/1554765001760?e=1634774400&v=beta&t=gKMoe6dH8ZC18W79obELln65L0_p_nUrJwuP9LAUJGI"}
          username={"Jeremy Chow"}
        />
        
      </div>
    </div>
  )
}

export default Contacts
