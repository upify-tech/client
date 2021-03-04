import React from 'react';
import { Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import course from "../../images/course.jpg";
import '../../CSS/HomePage/Homecard.css';
// import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:"3px"
  },
  media: {
    height: 140,
  },
});

const CoursesCard = (props) => {
    const classes = useStyles();
    const token = localStorage.getItem("token");
    if(token == null){
      return <Redirect to="/signup" />
    }
    return(
    <>
    <Card className="card">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={course}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className="card_info">
              <b>Tutor Name: </b>{props.tutor_name}
              <br/>
              <b>Description:</b> {props.description}
              <br/>
              <b>Domain:</b> {props.domain}
              <br/>
              <b>Duration:</b> {props.duration}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className="card-btn" href={props.link} target="/c">
        See details
        </Button>
        {/* <a href="/"><BookmarkBorderIcon color="primary" fontSize="large"/></a> */}
      </CardActions>
    </Card>
    </>
    );
}

export default CoursesCard;