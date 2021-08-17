import React from 'react'
import "./Header.css";

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from"@material-ui/icons/Add";
import { Avatar, IconButton } from '@material-ui/core';
import NotificationsNoneTwoToneIcon from '@material-ui/icons/NotificationsNoneTwoTone';
import CommentTwoToneIcon from '@material-ui/icons/CommentTwoTone';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ user} ,dispatch] = useStateValue();

return (
  <div className="header">
    <div className="header__left">
      <img src="data:image/png;base64,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"></img>
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
        <OndemandVideoOutlinedIcon fontSize="large" />
      </div>
      <div className="header__option">
        <PeopleIcon fontSize="large" />
      </div>
      <div className="header__option">
        <StorefrontOutlinedIcon fontSize="large" />
      </div>
      <div className="header__option">
        <SportsEsportsOutlinedIcon fontSize="large" />
      </div>
    </div>
    <div className="header__right">
      <div className="header__info">
        <Avatar src={user.photoURL} />
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
