import React from "react";
import Slider from "react-slick";
import img from "./one.jpg";
import "./style.css";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import react from "./images/react.png";
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

export default class Trial extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 6
    };

    return (
      <div>
        <Grid>
          <AppBar position="static" color="white">
            <Toolbar>
              <Typography style={{ flexGrow: 1 }} variant="h6" color="inherit">
                <img style={{ height: 20 }} src={"https://firebasestorage.googleapis.com/v0/b/nextstacks.appspot.com/o/NextStack%20Logo.png?alt=media&token=6c4ba45d-05a9-4e1f-a7dc-9ee86006218c"} />
              </Typography>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ margin: 0 }}
                >
                  Login
                </Button>

              </div>
            </Toolbar>
          </AppBar>

          <Grid item xs={12} md={6}>
            <div className="sec1_container">
              <h2 className="sec1_title">
                Track your shows automatically
              </h2>
              <p className="sec1_body">
                With ShowTrackr you can track your favorite TV shows automatically, so you never loose track of your TV shows ever again.
              </p>
              <TextField
                id="filled-name"
                placeholder="enter phonenumber"
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: <InputAdornment position="start"> <Icon color="primary">phone</Icon> </InputAdornment>,
                }}
              />
            </div>
          </Grid>

          <Grid item xs={12} md={6}>

          </Grid>
          <Grid item xs={12} md={12}>
            <h2 className="sec1_title">
              Our Programs
            </h2>
          </Grid>
        </Grid>


        <Slider {...settings} className="slider_container">
          <div className="card_background">
            <img src={react} className="img" />
            <h2 className="sec1_title" style={{ color: "#66e0ff" }}>React JS</h2>
          </div>
          <div style={{ textAlign: "center" }}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="Settings">
                    {/* <Icon>check</Icon> */}
                  </IconButton>
                }
                title="React JS"
                subheader="Frontend library developed by Facebook"
              />
              {/* <CardMedia
                image={"./images/html.png"}
                title="Paella dish"
              /> */}
              <img src={react} style={{ width: "50%", margin: "auto", paddingBottom: 20 }} />
              <CardContent style={{ padding: 0 }}>
                {/* <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal to cook together with your
                  guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography> */}
              </CardContent>
              {/* <CardActions disableSpacing>
                <IconButton aria-label="Add to favorites">
                <Icon>check</Icon>                  
                </IconButton>
                <IconButton aria-label="Share">
                <Icon>check</Icon>
                  
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="Show more"
                >
                    <Icon>check</Icon>                  
                </IconButton>
              </CardActions> */}

            </Card>
          </div>
          <div>
            <img src={img} className="img" />

          </div>
          <div>
            <img src={img} className="img" />

          </div>
          <div>
            <img src={img} className="img" />

          </div>
          <div>
            <img src={img} className="img" />

          </div>
        </Slider>

        <Grid container>
          <Grid item xs={12} md={6}>
            <div className="sec1_container">

              <h2 className="sec1_title">
                Easy-to-use interfaces
              </h2>
              <p className="sec1_body">
                Since most of our features work in a completely automated way, you will mainly use our apps to discover new TV shows recommended for you and discuss the most interesting episodes with like-minded people.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>

          </Grid>
        </Grid>
      </div>
    );
  }
}