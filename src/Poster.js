import React, { useState } from 'react'
import './Poster.css'

import {Avatar} from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryicon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function Poster() {
  const [input,setInput] = useState("")
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    setImageUrl("");
  };
  return (
    <div className="poster">
      <div className="poster__top">
        <Avatar />
        <form>
          <input 
            className="poster__input" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder={"What's on your mind?"} 
          />
          <input
            value={imageUrl}
            onChange ={(e) => setImageUrl(e.target.value)}
            placeholder="image URL (optional)"/>

          <button onClick={handleSubmit} type="submit">
            Hidden submit text
          </button>
        </form>
      </div>
      <div className="poster__bottom">
        <div className="poster__option">
          <VideocamIcon style= {{color: "red"}}/>
          <h3> Live Video </h3>
        </div>
        <div className="poster__option">
          <PhotoLibraryicon style= {{color: "blue"}}/>
          <h3>Photo/Video</h3>
        </div>
        <div className="poster__option">
          <InsertEmoticonIcon style= {{color: "orange"}}/>
          <h3>Feeling/Activity</h3>
        </div>
        
      </div>
    </div>
  )
}

export default Poster
