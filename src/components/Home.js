import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, makeStyles, Grid, Typography } from "@material-ui/core";
const useStyle = makeStyles({
  container: {
    paddingLeft: "200px",
    paddingRight: "100px",
  },
  Titles: {
    fontSize: "30px",
    marginTop: "20px",
    display: "flex",
    justifyContent: "flexStart",
  },
  Row: {
    display: "flex",
    flexDirection: "row",
  },
  Rowitems: {
    display: "flex",
    flexDirection: "column",
    width: "260px",
    minHeight: "20px",
    margin: "10px",
    cursor: "pointer",
  },
  Columnitems: {
    display: "flex",
    flexDirection: "row",
    minHeight: "20px",
    margin: "10px",
    cursor: "pointer",
    paddingBottom: "10px",
    borderBottom: "1px solid rgba(0,0,0,0.2)",
  },
  ColumnitemsImg: {
    width: "400px",
    height: "300px",
    display: "flex",
    overflow: "hidden",
    marginRight: "10px",
  },
});

export default function Home(props) {
  const classes = useStyle(props);

  var items = [
    {
      name: "WINTER SOLDIER",
      description: "Arrival In This Year",
      src:
        "https://buihuynhtien1998.github.io/MY_IMG/img/5eabcc675dc1358a8327cf42955fd3af.jpg",
    },
    {
      name: "I CAN DO THIS ALL DAY",
      description: "Now In Your Store",
      src:
        "https://buihuynhtien1998.github.io/MY_IMG/img/captain-america-marvel-comics-wallpaper-hd-1080p-292847.jpg",
    },
    {
      name: "SAY GREEN !!!",
      description: "Don't Make Me Angry",
      src:
        "https://buihuynhtien1998.github.io/MY_IMG/img/hulk-halk-marvel-comics-3767.jpg",
    },
    {
      name: "THE BA UNIVERSE",
      description: "Thousands Of Stories",
      src:
        "https://buihuynhtien1998.github.io/MY_IMG/img/marvel-5-1920x1080.jpg",
    },
  ];

  return (
    <div>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <Grid className={classes.container}>
        <Grid>
          <Typography className={classes.Titles}>
            <b>BA AT HOME</b>
          </Typography>
          <Grid className={classes.Row}>
            <Grid className={classes.Rowitems}>
              <Grid style={{ height: "148px", overflow: "hidden" }}>
                <img
                  src="https://buihuynhtien1998.github.io/MY_IMG/img/1.jpg"
                  style={{ maxWidth: "100%" }}
                ></img>
              </Grid>
              <Typography
                style={{
                  display: "flex",
                  textAlign: "left",
                }}
              >
                <b>
                  Marvel At Home: Here’s How to Stay Connected With Your
                  Favorite Super Heroes
                </b>
              </Typography>
            </Grid>
            <Grid className={classes.Rowitems}>
              <Grid style={{ height: "148px", overflow: "hidden" }}>
                <img
                  src="https://buihuynhtien1998.github.io/MY_IMG/img/2.jpeg"
                  style={{ maxWidth: "100%" }}
                ></img>
              </Grid>
              <Typography
                style={{
                  display: "flex",
                  textAlign: "left",
                }}
              >
                <b>
                  Learn How to Draw Tony Stark's Hulkbuster Armor on Marvel LIVE
                </b>
              </Typography>
            </Grid>
            <Grid className={classes.Rowitems}>
              <Grid style={{ height: "148px", overflow: "hidden" }}>
                <img
                  src="https://buihuynhtien1998.github.io/MY_IMG/img/3.jpg"
                  style={{ maxWidth: "100%" }}
                ></img>
              </Grid>
              <Typography
                style={{
                  display: "flex",
                  textAlign: "left",
                }}
              >
                <b>Make Your Video Calls Worthy With These Backgrounds</b>
              </Typography>
            </Grid>
            <Grid className={classes.Rowitems}>
              <Grid style={{ height: "148px", overflow: "hidden" }}>
                <img
                  src="https://buihuynhtien1998.github.io/MY_IMG/img/4.jpg"
                  style={{ maxWidth: "100%" }}
                ></img>
              </Grid>
              <Typography
                style={{
                  display: "flex",
                  textAlign: "left",
                }}
              >
                <b>
                  Everything We Saw During the July 'Marvel’s Avengers' WAR
                  TABLE Livestream
                </b>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Typography className={classes.Titles}>
            <b>BA PODCASTS</b>
          </Typography>
          <Grid className={classes.Row}>
            <Grid className={classes.Rowitems}>
              <Grid style={{ height: "148px", overflow: "hidden" }}>
                <img
                  src="https://buihuynhtien1998.github.io/MY_IMG/img/5.jpg"
                  style={{ maxWidth: "100%" }}
                ></img>
              </Grid>
              <Typography
                style={{
                  display: "flex",
                  textAlign: "left",
                }}
              >
                <b>
                  'Marvel's Agents of S.H.I.E.L.D.' Star Elizabeth Henstridge
                  Talks to Women of Marvel About Her Directorial Debut
                </b>
              </Typography>
            </Grid>
            <Grid className={classes.Rowitems}>
              {" "}
              <Grid style={{ height: "148px", overflow: "hidden" }}>
                <img
                  src="https://buihuynhtien1998.github.io/MY_IMG/img/6.jpg"
                  style={{ maxWidth: "100%" }}
                ></img>
              </Grid>
              <Typography
                style={{
                  display: "flex",
                  textAlign: "left",
                }}
              >
                <b>This Week in Marvel Heralds the Reign of Emperor Hulkling</b>
              </Typography>
            </Grid>
            <Grid className={classes.Rowitems}>
              {" "}
              <Grid style={{ height: "148px", overflow: "hidden" }}>
                <img
                  src="https://buihuynhtien1998.github.io/MY_IMG/img/7.jpg"
                  style={{ maxWidth: "100%" }}
                ></img>
              </Grid>
              <Typography
                style={{
                  display: "flex",
                  textAlign: "left",
                }}
              >
                <b>
                  Peter David Tells the Story Behind Spider-Man and "The Death
                  of Jean DeWolff"
                </b>
              </Typography>
            </Grid>
            <Grid className={classes.Rowitems}>
              {" "}
              <Grid style={{ height: "148px", overflow: "hidden" }}>
                <img
                  src="https://buihuynhtien1998.github.io/MY_IMG/img/8.jpg"
                  style={{ maxWidth: "100%" }}
                ></img>
              </Grid>
              <Typography
                style={{
                  display: "flex",
                  textAlign: "left",
                }}
              >
                <b>
                  All-Star Artist Javier Garrón on the Influence of Alan Davis
                  and 'ClanDestine'
                </b>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Typography className={classes.Titles}>
            <b>THE LATEST</b>
          </Typography>
          <Grid>
            <Grid className={classes.Columnitems}>
              <Grid className={classes.ColumnitemsImg}>
                <img
                  src="https://buihuynhtien1998.github.io/MY_IMG/img/9.jpg"
                  style={{ maxWidth: "100%" }}
                ></img>
              </Grid>
              <Typography style={{ textAlign: "left", fontSize: "20px" }}>
                <b>
                  21 Times Tony Stark Rolled His Eyes in the Marvel Cinematic
                  Universe
                </b>
              </Typography>
            </Grid>
            <Grid className={classes.Columnitems}>
              {" "}
              <Grid className={classes.ColumnitemsImg}>
                <img
                  src="https://buihuynhtien1998.github.io/MY_IMG/img/10.jpg"
                  style={{ maxWidth: "100%" }}
                ></img>
              </Grid>
              <Typography style={{ textAlign: "left", fontSize: "20px" }}>
                <b>
                  Get to Know Lauri-ell, the Newly Revealed Half-Sister of
                  Captain Marvel
                </b>
              </Typography>
            </Grid>
            <Grid className={classes.Columnitems}>
              {" "}
              <Grid className={classes.ColumnitemsImg}>
                <img
                  src="https://buihuynhtien1998.github.io/MY_IMG/img/11.png"
                  style={{ maxWidth: "100%" }}
                ></img>
              </Grid>
              <Typography style={{ textAlign: "left", fontSize: "20px" }}>
                <b>Marvel Games Comic Connection: Wolverine and Daken</b>
              </Typography>
            </Grid>
            <Grid className={classes.Columnitems}>
              {" "}
              <Grid className={classes.ColumnitemsImg}>
                <img
                  src="https://buihuynhtien1998.github.io/MY_IMG/img/12.jpg"
                  style={{ maxWidth: "100%" }}
                ></img>
              </Grid>
              <Typography style={{ textAlign: "left", fontSize: "20px" }}>
                <b> Who Is Wraith?</b>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

function Item(props) {
  return (
    <Paper>
      <div
        style={{
          width: "100%",
          height: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <img
          src={props.item.src}
          style={{ maxWidth: "100%", opacity: "1" }}
        ></img>
      </div>
      <div
        style={{
          color: "white",
          width: "600px",
          backgroundColor: "rgba(0,0,0,0.7)",
          position: "absolute",
          left: "50%",
          bottom: "-80px",
          transform: "translate(-50%, -50%)",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <h1>{props.item.name}</h1>
        <h2>{props.item.description}</h2>
        <button
          style={{
            width: "200px",
            height: "50px",
            backgroundColor: "transparent",
            border: "1px solid white",
            cursor: "pointer",
            color: "white",
            outline: "none",
          }}
        >
          View Now
        </button>
      </div>
    </Paper>
  );
}
