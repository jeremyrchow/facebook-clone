import React from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import Poster from './Poster';
import Post from './Post';
function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <Poster />
      <Post
        profilePic = "https://media-exp1.licdn.com/dms/image/C5603AQFAKN4ErXYy1w/profile-displayphoto-shrink_200_200/0/1554765001760?e=1634774400&v=beta&t=ZI3wZE0CAV0IrQCiYhelSZd8oHFKiLqqG8u6O4eas0U"
        message="Hello from californiaHello from californiaHello from californiaHello from california"
        timestamp="12:09 AM"
        username="jchowster"
        image="https://content.fortune.com/wp-content/uploads/2019/10/GettyImages-1158402857.jpg?resize=750,500" 
         />
      <Post
        profilePic = "https://media-exp1.licdn.com/dms/image/C5603AQFAKN4ErXYy1w/profile-displayphoto-shrink_200_200/0/1554765001760?e=1634774400&v=beta&t=ZI3wZE0CAV0IrQCiYhelSZd8oHFKiLqqG8u6O4eas0U"
        message= "Hello from not california"
        timestamp="12:09 AM"
        username="jchowster"
         />
      <Post />
    </div>
  )
}

export default Feed
