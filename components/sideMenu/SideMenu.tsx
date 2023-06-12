'use client'

import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Person2Icon from '@mui/icons-material/Person2';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings'
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { Drawer} from '@mui/material';
import { useMediaQuery }  from "@mui/material";
import { useState } from 'react';

import scss from './SideMenu.module.scss'
import Link from 'next/link';

import {  signOut } from "next-auth/react";


const drawerWidth = 240;



const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const menuRouteList = ["data", "profile", "settings",""]
const menuListTranslation = ["data", "profile", "settings", "Sing Out"]
const menuListIcons = [
  <EqualizerIcon/>,
  <Person2Icon/>,
  <SettingsIcon/>,
  <ExitToAppIcon/>
]

const SideMenu = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  

  const handleDrawerToogle = () => {
    setOpen(!open);
  };
  const mobileCheck = useMediaQuery('(min-width:600px)')

  const handleListItemButtonClick = (text:string) => {
    text === "Sing Out" ? signOut() : null;
    setOpen(false) 
}
  return (
    <Drawer anchor='left' variant="permanent" open={open} sx={{
      width:drawerWidth,
     
            [`& .MuiDrawer-paper`]:{
               left:0,
               top: mobileCheck ? 64 :57,
               flexShrink: 0,
               whiteSpace: 'nowrap',
               boxSizing: 'border-box',
               ...(open && {
                ...openedMixin(theme),
                "& .Muidrawer-paper":openedMixin(theme)
              }),
              ...(!open && {
                ...closedMixin(theme),
                "& .MuiDrawer-paper":closedMixin(theme)
              })   
            },
    }}>
    <div className={scss.drawerHader}>
      <IconButton onClick={handleDrawerToogle}>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </div>
    <Divider />
   
    <Divider />
    <List>
      {menuListTranslation.map((text, index) => (
        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
          <Link className={scss.link} href={`/dashboard/${menuRouteList[index]}`}>
          <ListItemButton
          onClick={()=>handleListItemButtonClick(text)}
            sx={{
              minHeight: 48, 
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
            title={text}
            aria-label={text}
          >
            <ListItemIcon
              onClick={()=> setOpen(false)}
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {menuListIcons[index]}
            </ListItemIcon>
            <ListItemText primary={text} sx={{ color: theme.palette.text.primary,opacity: open ? 1 : 0 }} />
          </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  </Drawer>
  )
}

export default SideMenu



/*
 <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
*/