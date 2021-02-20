import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../../CSS/HomePage/Homecard.css';
import jobs from "../../images/jobs.jpg";
// import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';


const HomedataJobs = (props) => {

  return (
    <>
      <Card className="card">
        <CardActionArea>
          <CardMedia
            className="media"
            image={jobs}
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
              <br/>
              <b>Location:</b> {props.location}
            </Typography>

          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href={props.link} target="/new" className="card-btn">
            <b>See details</b>
          </Button>
          {/* <a href="/"><BookmarkBorderIcon color="primary" fontSize="large"/></a> */}
        </CardActions>
      </Card>
    </>
  );
}


export default HomedataJobs;



