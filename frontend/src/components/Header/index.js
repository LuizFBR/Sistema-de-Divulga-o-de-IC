import React, { useState } from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, CustomToolbar } from './styles';
import { InputBase, makeStyles, fade, SwipeableDrawer } from '@material-ui/core';



import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));


export default function Header() {

  const classes = useStyles();
  const [timeOut, setTimeOut] = useState(0);
  const [showDrawer, setShowDrawer] = useState(false);

  const handleInput = (event) => {
    const inputValue = event.target.value;

    if (timeOut) clearTimeout(timeOut);
    setTimeOut(setTimeout(() => {
      console.log(inputValue)

      // TODO Handle search ICs
    }, 500));
  }

  const openDrawer = () => setShowDrawer(true);
  const closeDrawer = () => setShowDrawer(false);


  const renderDrawerContent = () => <div
    className={clsx(classes.list, {
      [classes.fullList]: 'left',
    })}
    role="presentation"
    onClick={closeDrawer}
    onKeyDown={closeDrawer}
  >
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </div>;

  return (

    <Container>
      <AppBar position="static" style={{ backgroundColor: '#000', color: '#fff' }} >
        <CustomToolbar >
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => openDrawer()}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            UniIC
          </Typography>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleInput}
          />
        </CustomToolbar>
      </AppBar>
      <SwipeableDrawer
        anchor='left'
        open={showDrawer}
        onClose={closeDrawer}
        onOpen={openDrawer}
      >
        {renderDrawerContent()}
      </SwipeableDrawer>
    </Container>

  );
}
