import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    //maxWidth: 345,
  },
});

function ImgMediaCard({data, height}) {
  const classes = useStyles();
  const {title, img_url, url, date, source_id} = data
  return (
    <Card className={classes.card}>
      <Link href={url}>
        <CardActionArea> 
            <CardMedia
              component="img"
              alt={title}
              height={height}
              image={img_url}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {date}
              </Typography>
            </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
      <Link href={url} className={classes.link}>
        Ver nota
      </Link>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;