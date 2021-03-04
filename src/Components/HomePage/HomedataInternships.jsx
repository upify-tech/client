import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../../CSS/HomePage/Homecard.css';
import internship from "../../images/internship.jpg";
// import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';


const HomedataInternships = (props) => {

  return (
    <>
      <Card className="card">
        <CardActionArea>
          <CardMedia
            className="media"
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
          <Button size="small" color="primary" href={props.link} target="/i" className="card-btn">
            <b>See details</b>
          </Button>
          {/* <a href="/"><BookmarkBorderIcon color="primary" fontSize="large"/></a> */}
        </CardActions>
      </Card>
    </>
  );
}


export default HomedataInternships;




// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import './css/Homecard.css'



// const Homedata=(props)=> {

//   return (
//     <Card className="cards">
//       <CardActionArea>
//         <CardMedia
//           className="card"
//           image={props.imgsrc}
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p" className="card_info">
//           {props.sname}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }



// import React from 'react';
// import './index.css';
// import './css/Homecard.css'

// function Homedata(props){
//     return (
//         <>
//             <div className="cards">
//             <div className="card">
//                 <img src={props.imgsrc} className="card_img" alt="netflix_photo"></img>
//                 <div className="card_info">
//                     <span className="card_category">{props.title}</span>
//                     <h3 className="card_title">{props.sname}</h3>
//                     <a href={props.link}  rel="noreferrer" >
//                         <button >Start nowARRAYSkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</button>
//                     </a>
//                 </div>
//             </div>
//             </div>
//         </>
//     );
// }

// export default Homedata;

