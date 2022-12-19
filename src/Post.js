import { Avatar } from '@mui/material';
import React from 'react'
import './Post.css';
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import { forwardRef } from 'react';

const Post = forwardRef(
    ({displayName, username, verified, text, image, avatar}, ref) => {
  return (
    <div className='post' ref={ref}>
        <div className="post__avatar">
            <Avatar src={avatar}/>
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        {displayName}{" "}
                        <span className='post__headerSpeacial'>
                            {verified && <VerifiedUserIcon className="post__badge" />} @{username}
                        </span> 
                    </h3>
                    
                </div>
                <div className="post__headerDescription">
                    <p>{text}</p>
                </div>
            </div>
            {/* <img src="https://pbs.twimg.com/media/Fj_mOcOWIAMJin2?format=png&name=small" alt="" /> */}
            <img src={image} alt="" />
            {/* <img src="https://pbs.twimg.com/media/FkHCtxeaMAAx_3e?format=jpg&name=900x900" alt="" /> */}

            <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <PublishIcon fontSize="small" />
            </div>
        </div>
    </div>
  );
});
export default Post