import logo from './mainimage.png';
import './App.css';
import * as React from 'react';
// eslint-disable-next-line
import * as Material from '@mui/material';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/HomeOutlined';
import MailIcon from '@mui/icons-material/MailOutlined';
import LibraryIcon from '@mui/icons-material/LibraryAddCheckSharp';
import HistoryIcon from '@mui/icons-material/History';
import LikeIcon from '@mui/icons-material/ThumbUpOutlined';
import DislikeIcon from '@mui/icons-material/ThumbDownOutlined';
import MessageIcon from '@mui/icons-material/MessageOutlined';
import YourVidsIcon from '@mui/icons-material/VideoLibrarySharp';
import SubsIcon from '@mui/icons-material/SubscriptionsSharp';
import OrigsIcon from '@mui/icons-material/YouTube';
import TrendingIcon from '@mui/icons-material/ExploreOutlined'
import ShortsIcon from '@mui/icons-material/Fireplace'
import TextField from '@mui/material/TextField'
import WatchIcon from '@mui/icons-material/WatchLaterOutlined'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import RecommendedVideos from './RecommendedVideos';

function App() {
  return (

    <div className="App">
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="YouTube Logo" width="160" style={{
    top: 4, left : "-44.5%"}}/>
          </Typography>
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </Toolbar>
      </AppBar>
    </Box>
    <Drawer open="true">
      <Fab aria-label="add">
        <AddIcon />
      </Fab>
    <List>
        {['Home', 'Explore'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <TrendingIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        {['Shorts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <ShortsIcon/>
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
        ))}
        {['Subscriptions', 'Originals'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {index % 2 === 0 ? <SubsIcon/> : <OrigsIcon/>}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Libary', 'History'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 3 === 0 ? <LibraryIcon /> : <HistoryIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        {['Your videos'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <YourVidsIcon />
              </ListItemIcon>
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>
        ))}
        {['Messages', 'Liked videos'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 3 === 0 ? <MessageIcon /> : <LikeIcon />}
              </ListItemIcon>
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>
        ))}

      {['Disliked videos'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DislikeIcon />
              </ListItemIcon>
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>
        ))}
      {['Watch later'].map((text, index, count) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <WatchIcon />
            </ListItemIcon>
            <ListItemText primary={text} secondary="Later videos"/>
          </ListItemButton>
        </ListItem>
      ))}
      </List>
      </Drawer>
      <main>
      <RecommendedVideos />
      </main>
    </div>
  );
}

function RestartVideos() {
  console.log("Restarting videos...");
}
function DelimitString(string) {
  string.documents("");
}

export default App;
