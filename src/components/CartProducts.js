import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    overflow: "hidden",
    marginBottom: "10px",
    backgroundColor: "white",
    padding: "20px",
    position: "relative",
  },
  infor: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "20px",
  },
  Name: {
    marginBottom: "10px",
  },
  Price: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  SL: {
    marginBottom: "10px",
  },
  btn: {
    position: "absolute",
    right: "10px",
    marginLeft: "70%",
  },
}));
export default function CartProducts(props) {
  const classes = useStyles();
  const { img, name, price, quantity } = props.cart;
  const handleChangeQuantity = (event) => {
    if (Number(event.target.value) === 0) {
      return props.deleteCart(props.cart.id_cart);
    }
    props.updateCart(props.cart.id_cart, event.target.value);
  };
  const handldeDeleteFromCart = () => {
    props.deleteCart(props.cart.id_cart);
  };
  return (
    <Grid container className={classes.container}>
      <Grid style={{ width: "200px" }}>
        <img src={img} alt="cart img" style={{ maxWidth: "100%" }}></img>
      </Grid>
      <Grid className={classes.infor}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.btn}
          onClick={handldeDeleteFromCart}
        >
          <b> Delete</b>
        </Button>
        <Typography variant="h4" className={classes.Name}>
          <b>{name}</b>
        </Typography>
        <Typography className={classes.SL} variant="h5">
          <b>Quantity: </b>
          {quantity}
        </Typography>
        <Typography className={classes.Price}>
          <b style={{ fontSize: "30px", marginRight: "5px" }}>Price: </b>
          <Typography variant="h4" color="secondary">
            {price * quantity}$
          </Typography>
        </Typography>
        <TextField
          error
          id="outlined-error-helper-text"
          variant="outlined"
          type="number"
          value={quantity}
          onChange={handleChangeQuantity}
        ></TextField>
      </Grid>
    </Grid>
  );
}
