import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Badge,
  makeStyles,
} from "@material-ui/core";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import SearchIcon from "@material-ui/icons/Search";
import RemoveIcon from "@material-ui/icons/Remove";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { connect } from "react-redux";
const usestyle = makeStyles({
  container: {
    width: "100%",
    minHeight: "50px",
    background: "black",
    display: "flex",
    flexDirection: "column",
  },
  navTop: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "50px",
    borderBottom: "1px solid rgba(255,255,255,0.4)",
  },
  navTopItems: {
    width: "100%",
    color: "white",
    display: "flex",
    flexDirection: "row",
  },
  masterCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    borderRight: "1px solid rgba(255,255,255,0.4)",
  },
  search: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flexStrat",
    width: "100%",
    paddingLeft: "10px",
    color: "white",
  },
  textField: {
    color: "white",
    height: "5px",
  },
  Login: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },

  navLogo: {
    width: "100%",
    height: "100%",
    borderLeft: "1px solid rgba(255,255,255,0.4)",
    borderRight: "1px solid rgba(255,255,255,0.4)",
    display: "flex",
    justifyContent: "center",
    padding: "0px",
    alignItems: "center",
  },
  logo: {
    width: "270px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c62828",
    color: "white",
  },
  navBot: {
    display: "flex",
    flexDirection: "row",
    height: "35px",
    color: "rgba(255,255,255,0.5)",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "2px solid rgba(0,0,0,1)",
  },
  navBotItems: {
    color: "rgba(255,255,255,0.5)",
    textDecoration: "none",
    transition: "0.13s",
    height: "100%",
    marginRight: "20px",
    marginLeft: "8px",
    cursor: "pointer",
    fontSize: "13px",
    borderBottom: "2px solid rgba(0,0,0,0)",
    "&:hover": {
      borderBottom: "2px solid red",
      color: "rgba(255,255,255,1)",
    },
  },
  cart: {
    fontSize: "25px",
    marginLeft: "50px",
    cursor: "pointer",
  },
});
function Header(props) {
  const classes = usestyle(props);
  return (
    <Grid className={classes.container}>
      <Grid className={classes.navTop}>
        <Grid className={classes.navTopItems}>
          <Grid className={classes.Login}>
            <LinkedInIcon />
            <Typography style={{ cursor: "pointer" }}>SIGN IN</Typography>
            <RemoveIcon
              style={{ marginRight: "2px", marginLeft: "2px" }}
            ></RemoveIcon>
            <Typography style={{ cursor: "pointer" }}>JOIN</Typography>
            <Link to="/cart" style={{ color: "white" }}>
              <Badge badgeContent={props.quantity} color="secondary">
                <ShoppingBasketIcon
                  className={classes.cart}
                ></ShoppingBasketIcon>
              </Badge>
            </Link>
          </Grid>
        </Grid>
        <Grid className={classes.navLogo}>
          <Grid className={classes.logo}>
            <Typography variant="h3">BA STUDIO</Typography>
          </Grid>
        </Grid>
        <Grid className={classes.navTopItems}>
          <Grid className={classes.masterCard}>
            <CreditCardIcon
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
            <Typography style={{ cursor: "pointer" }}>MASTERCARD</Typography>
          </Grid>
          <Grid className={classes.search}>
            <SearchIcon style={{ cursor: "pointer", marginRight: "10px" }} />
            <TextField
              error
              id="outlined-error-helper-text"
              variant="filled"
              InputProps={{
                classes: {
                  input: classes.textField,
                },
              }}
              id="standard"
              label="Search"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.navBot}>
        <Link className={classes.navBotItems} to="/">
          HOME
        </Link>
        <Grid className={classes.navBotItems}>CHARACTERS</Grid>
        <Link className={classes.navBotItems} to="/products">
          COMICS
        </Link>
        <Grid className={classes.navBotItems}>MOVIES</Grid>
        <Grid className={classes.navBotItems}>TV SHOW</Grid>
        <Grid className={classes.navBotItems}>GAMES</Grid>
        <Grid className={classes.navBotItems}>NEWS</Grid>
        <Grid className={classes.navBotItems}>MORE</Grid>
      </Grid>
    </Grid>
  );
}
const mapStateToProps = (state) => {
  const quantity = state.cart.reduce((count, product_in_cart) => {
    return (count = count + product_in_cart.quantity);
  }, 0);
  return {
    quantity: quantity,
  };
};

export default connect(mapStateToProps)(Header);
