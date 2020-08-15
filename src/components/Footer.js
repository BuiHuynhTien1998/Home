import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
const useStyle = makeStyles({
  container: {
    backgroundColor: "rgba(0,0,0,0.9)",
    height: "350px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    margin: "0px",
  },
  Top: {
    display: "flex",
    flexDirection: "row",
    height: "150px",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: "50px",
  },
  TopItems: {
    width: "200px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
  },
  IconContainer: {
    display: "flex",
  },
  Icon: {
    marginRight: "10px",
    cursor: "pointer",
    fontSize: "30px",
    "&:hover": {
      color: "rgba(255,255,255,0.7)",
    },
  },
  Logo: {
    width: "200px",
    height: "100px",
    backgroundColor: "#c62828",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "120px",
    padding: "0px",
  },
  options: {
    display: "flex",
    color: "white",
    cursor: "pointer",
    width: "100px",
    "&:hover": {
      color: "rgba(255,255,255,0.7)",
    },
  },
  Bot: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    minHeight: "50px",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(255,255,255,0.7)",
  },
  BotItemsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: "50px",
    alignItems: "center",
    justifyContent: "center",
  },
  BotItems: {
    fontSize: "12px",
    margin: "10px",
    cursor: "pointer",
    "&:hover": {
      color: "white",
    },
  },
  Bebui: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: "50px",
    alignItems: "flexStart",
    justifyContent: "center",
  },
});

export default function Footer(props) {
  const classes = useStyle(props);
  return (
    <Grid className={classes.container}>
      <Grid className={classes.Top}>
        <Grid className={classes.TopItems}>
          <Grid className={classes.Logo}>
            <Typography variant="h1">BA</Typography>
          </Grid>
        </Grid>
        <Grid className={classes.TopItems}>
          <Typography className={classes.options}>
            <b> ABOUT US </b>
          </Typography>
          <Typography className={classes.options}>
            <b> HELP/FAQS </b>
          </Typography>
          <Typography className={classes.options}>
            <b> CAREERS</b>
          </Typography>
          <Typography className={classes.options}>
            <b> INTERNSHIPS</b>
          </Typography>
        </Grid>
        <Grid className={classes.TopItems}>
          <Typography className={classes.options}>
            <b> ADVERTISING </b>
          </Typography>
          <Typography className={classes.options}>
            <b> BASTUDIO.COM </b>
          </Typography>
          <Typography className={classes.options}>
            <b>DIGITALcomics</b>
          </Typography>
        </Grid>
        <Grid className={classes.TopItems}>
          <Typography className={classes.options}>
            <b>BA_INSIDER</b>
          </Typography>
          <Typography className={classes.options}>
            <b>BA_MASTERCARD5</b>
          </Typography>
        </Grid>
        <Grid className={classes.TopItems}>
          <Typography className={classes.options}>
            <b>FOLLOW US</b>
          </Typography>
          <Grid className={classes.IconContainer}>
            <FacebookIcon className={classes.Icon}></FacebookIcon>
            <InstagramIcon className={classes.Icon}></InstagramIcon>
            <TwitterIcon className={classes.Icon}></TwitterIcon>
            <YouTubeIcon className={classes.Icon}></YouTubeIcon>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.Bot}>
        <Grid className={classes.BotItemsContainer}>
          <Typography className={classes.BotItems}>Terms of Use</Typography>
          <Typography className={classes.BotItems}>Privacy Policy</Typography>
          <Typography className={classes.BotItems}>
            Your California Privacy Rights
          </Typography>
          <Typography className={classes.BotItems}>
            Do Not Sell My Info
          </Typography>
          <Typography className={classes.BotItems}>
            Children's Online Privacy Policy
          </Typography>
          <Typography className={classes.BotItems}>
            License Agreement
          </Typography>
          <Typography className={classes.BotItems}>
            Interest-Based Ads
          </Typography>
          <Typography className={classes.BotItems}>
            Marvel Insider Terms
          </Typography>
        </Grid>
        <Grid className={classes.Bebui}>
          <Typography className={classes.BotItems}>
            WAS MADE BY: Bui Huynh Tien 98
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
