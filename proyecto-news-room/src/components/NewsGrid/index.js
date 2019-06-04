import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
  const destacadas = news.slice(0, 3).map(newsItem => {
    return newsItem
  })

  const secundarias = news.slice(6, 8).map(newsItem => {
    return (
    <Grid item xs={12} sm={6}>
      <NewsItem data={newsItem} height="300" />
    </Grid>
    )
  })

  const grillaRoll = news.slice(9, 20).map(newsItem => {
    return (
    <Grid item xs={6} sm={3}>
      <NewsItem data={newsItem} height="140"/>
    </Grid>
    )
  })
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
         <Slider data={destacadas}/>
        </Grid>
        {secundarias}
        {grillaRoll}
      </Grid>
    </div>
  );
}

NewsGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsGrid);