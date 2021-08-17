import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import ChatIcon from "@material-ui/icons/Chat";
import PeopleIcon from "@material-ui/icons/People"
import { useStateValue } from './StateProvider';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import StoreIcon from '@material-ui/icons/Store';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import HistoryIcon from '@material-ui/icons/History';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import FlagIcon from '@material-ui/icons/Flag';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={PeopleIcon} title="Friends"/>
      <SidebarRow Icon={SupervisedUserCircleIcon} title="Groups"/>
      <SidebarRow Icon={ChatIcon} title="Messenger"/>
      <SidebarRow Icon={StoreIcon} title="Marketplace"/>
      <SidebarRow Icon={VideoLibraryIcon} title="Watch"/>
      <SidebarRow Icon={HistoryIcon} title="Memories"/>
      <SidebarRow Icon={FlagIcon} title="Pages"/>
      <SidebarRow Icon={ChromeReaderModeIcon} title="News"/>
      <SidebarRow Icon={EventAvailableIcon} title="Events"/>
      <SidebarRow Icon={ExpandMoreTwoToneIcon} title="See More"/>
    </div>
  )
}

export default Sidebar
