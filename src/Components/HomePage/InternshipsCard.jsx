import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import internship from "../../images/internship.jpg";
import '../../CSS/HomePage/Homecard.css';
// import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "3px",
  },
  media: {
    height: 140,
  },
  html: {
    backgroundColor: "red"
  }
});

const InternshipsCard = (props) => {
  const classes = useStyles();
  const token = localStorage.getItem("token");
  if(token == null){
    return <Redirect to="/signup" />
  }
  return (
    <>
        <Card className="card">
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={internship}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className="card_info">
              <b>Company: </b>{props.comp_name}
              <br/>
              <b>Description:</b> {props.description}
              <br/>
              <b>Location:</b> {props.location}
              <br/>
              <b>Domain:</b> {props.domain}
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" className="card-btn">
              See details
            </Button>
            {/* <a href="/"><BookmarkBorderIcon color="primary" fontSize="large" /></a> */}
          </CardActions>
        </Card>
      {/* </Container> */}
    </>
  );
}

export default InternshipsCard;