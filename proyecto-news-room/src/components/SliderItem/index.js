import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';


  const SliderItem =(props) => {
    const {title, img_url} = props.data
      console.log(props.data)
      const useStyles = makeStyles(theme => ({
        toolbar: {
          borderBottom: `1px solid ${theme.palette.divider}`,
        },
        toolbarTitle: {
          flex: 1,
        },
        toolbarSecondary: {
          justifyContent: 'space-between',
          overflowX: 'auto',
        },
        toolbarLink: {
          padding: theme.spacing(1),
          flexShrink: 0,
        },
        mainFeaturedPost: {
          position: 'relative',
          backgroundColor: theme.palette.grey[800],
          color: theme.palette.common.white,
          marginBottom: theme.spacing(4),
          backgroundImage: `url(${img_url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          maxHeight:'320px'
        },
        overlay: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        },
        mainFeaturedPostContent: {
          position: 'relative',
          padding: theme.spacing(3),
          [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
          },
        },  
      }));

    const classes = useStyles();

    return (
        <Paper className={classes.mainFeaturedPost}>
        {
          <img
            style={{ display: 'none' }}
            src={img_url}
            alt="background"
          />
        }
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Multiple lines of text that form the lede, informing new readers quickly and
                efficiently about what&apos;s most interesting in this post&apos;s contents.
              </Typography>
              <Link variant="subtitle1" href="#">
                Continue reading…
              </Link>
            </div>
          </Grid>
        </Grid>
      </Paper>
    )
  }
  
  export default SliderItem;