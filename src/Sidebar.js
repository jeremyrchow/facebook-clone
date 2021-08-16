import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import ChatIcon from "@material-ui/icons/Chat";
import PeopleIcon from "@material-ui/icons/People"
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Icon={ChatIcon} title="Jeremy Chow" />
      <SidebarRow Icon={PeopleIcon} title="Friends"/>
      <SidebarRow Icon={ChatIcon} title="Messenger"/>
      <SidebarRow Icon={PeopleIcon} title="Marketplace"/>
      <SidebarRow Icon={PeopleIcon} title="Videos"/>
      
    </div>
  )
}

export default Sidebar
