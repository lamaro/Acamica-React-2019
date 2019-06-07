import React, {useState} from 'react';
import { withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.between('sm', 'md')]: {
      display: 'none',
    }
  },
  title: {
    flexGrow: 1,
    color:'#fff',
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
    width: theme.spacing(7),
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
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  menuContent:{
    width:'100%',
    display:'flex',
    justifyContent: 'space-between',
    color:'#fff'
  }
}));

function Nav(props) {
  const classes = useStyles();
  const [open,setOpen] = useState(false)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.menuContent}>
            <IconButton
              onClick={()=>setOpen(!open)}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
            >
              <MenuIcon />
            </IconButton>
              <Typography className={classes.title} variant="h6" noWrap>
              <Link to={'/'}>Inicio </Link>
              <Link to={'/category/politica'}>Política </Link>
              <Link to={'/category/internacionales'}>Internacionales </Link>
              <Link to={'/category/tecnologia'}>Tecnología </Link>
              <Link to={'/category/espectaculos'}>Espectáculos </Link>
              <Link to={'/category/deportes'}>Deportes </Link>
            </Typography>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onKeyPress={(event)=>event.key === 'Enter' ? props.history.push(`/search/${event.target.value}`):null}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Nav);