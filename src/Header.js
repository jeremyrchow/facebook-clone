import React from 'react'
import "./Header.css";

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from"@material-ui/icons/Add";
import { Avatar, IconButton } from '@material-ui/core';
import NotificationsNoneTwoToneIcon from '@material-ui/icons/NotificationsNoneTwoTone';
import CommentTwoToneIcon from '@material-ui/icons/CommentTwoTone';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ user} ,dispatch] = useStateValue();

return (
  <div className="header">
    <div className="header__left">
      <img src="../logo192.png"></img>
    </div>
    <div className="header__input">
      <SearchIcon />
      <input placeholder="Search" type="text"/>
    </div>

    <div className="header__center">
      <div className="header__option header__option--active">
        <HomeIcon fontSize="large" />
      </div>
      <div className="header__option">
        <VideoLibraryIcon fontSize="large" />
      </div>
      <div className="header__option">
        <PeopleIcon fontSize="large" />
      </div>
    </div>
    <div className="header__right">
      <div className="header__info">
        <Avatar src={user.photoURL} />
        // <PersonIcon />
        <h4> {user.displayName} </h4>
      </div>
      <IconButton>
        <AddIcon/>
      </IconButton>
      <IconButton>
        <NotificationsNoneTwoToneIcon/>
      </IconButton>
      <IconButton>
        <CommentTwoToneIcon/>
      </IconButton>
      <IconButton>
        <ExpandMoreTwoToneIcon />
      </IconButton>

    </div>
    
  </div>
)
}

export default Header
