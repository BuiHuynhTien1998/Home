import React from "react";
import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  Card: {
    width: "250px",
    margin: "10px",
    marginBottom: "25px",
    borderBottomRightRadius: "5px",
    borderBottomLeftRadius: "5px",
    marginTop: "20px",
    transition: "0.2s",
    "&:hover": {
      marginTop: "0px",
      color: "red",
    },
    padding: "0px",
  },
  CardImg: {
    backgroundColor: "none",
    boxShadow: "0px 6px 6px 0px rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  CardDetail: {
    display: "flex",
    flexDirection: "column",
    padding: "5px",
    marginTop: "5px",
  },
  img: {
    maxWidth: "100%",
  },
  btnAppToCart: {
    color: "white",
    width: "100%",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderBottomRightRadius: "30px",
    borderTopLeftRadius: "30px",
    transition: "0.13s",
    backgroundColor: "rgba(220,0,0,1)",
    "&:hover": {
      backgroundColor: "rgba(200,0,0,1)",
      color: "white",
    },
  },
});

export default function Product(props) {
  const handleAddToCart = () => {
    const { id, name, price, img } = props;

    props.addToCart({
      id_cart: "cart_" + Date.now() + Math.random(),
      id_product: id,
      name,
      price,
      quantity: 1,
      img,
    });
  };
  const classes = useStyle(props);
  const { id, name, price, img } = props;

  return (
    <Grid className={classes.Card}>
      <Box className={classes.CardImg}>
        <img className={classes.img} src={img}></img>
      </Box>
      <Grid className={classes.CardDetail}>
        <Link
          style={{
            display: "flex",
            justifyContent: "flexStrat",
            textDecoration: "none",
            color: "black",
          }}
          to={"/products/" + id}
        >
          <b>{name}</b>
        </Link>
        <Typography style={{ display: "flex", justifyContent: "flexStrat" }}>
          {price}$
        </Typography>
        <div className={classes.btnAppToCart} onClick={handleAddToCart}>
          <b>ADD+</b>
        </div>
      </Grid>
    </Grid>
  );
}
