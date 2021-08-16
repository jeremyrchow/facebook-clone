import React from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import Poster from './Poster';
function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <Poster />
      
    </div>
  )
}

export default Feed
