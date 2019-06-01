import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NewsItem from '../../components/NewsItem'
import Slider from '../../components/Slider'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const NewsGrid = ({ classes, news }) => {
  console.log('dentro del newsgrid',news)
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
         {news[0].title}
        </Grid>
        <Grid item xs={12} sm={6}>
          <NewsItem data={news[0]} />
        </Grid>
        <Grid item xs={12} sm={6}>
        <NewsItem data={news[1]} />
        </Grid>
        <Grid item xs={6} sm={3}>
        <NewsItem data={news[2]} />
        </Grid>
        <Grid item xs={6} sm={3}>
          <NewsItem />
        </Grid>
        <Grid item xs={6} sm={3}>
          <NewsItem />
        </Grid>
        <Grid item xs={6} sm={3}>
          <NewsItem />
        </Grid>
      </Grid>
    </div>
  );
}

NewsGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsGrid);