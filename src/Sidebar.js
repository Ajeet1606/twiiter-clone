import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SidebarOptions from './SidebarOptions';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import NewTweet from '@mui/icons-material/Add';
import NewTweet from '@mui/icons-material/AddCircleRounded';
// import { Button } from '@mui/material';



function Sidebar() {
  return (
    <div className = "sidebar">
        {/*Twitter icon */}
        <TwitterIcon className='sidebar__twitterIcon'/>
        <SidebarOptions active Icon={HomeIcon} /*text = "Home"*/ />
        <SidebarOptions Icon={SearchIcon}/>
        <SidebarOptions Icon={NotificationsNoneIcon}/>
        <SidebarOptions Icon={MailOutlineIcon} />
        <SidebarOptions Icon={BookmarkBorderIcon} />
        <SidebarOptions Icon={ListAltIcon}/>
        <SidebarOptions Icon={PermIdentityIcon}  />
        <SidebarOptions Icon={MoreHorizIcon}  />
        <SidebarOptions Icon={NewTweet}  />

        {/*Button -> New Tweet */}
        {/* <Button variant='outlined' className='sidebar__tweet' fullWidth>
          Tweet
        </Button> */}
    </div>
  )
}

export default Sidebar