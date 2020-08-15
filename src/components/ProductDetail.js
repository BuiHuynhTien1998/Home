import React from "react";
import { withStyles, Grid, Typography, TextField } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

const style = () => ({
  container: {
    backgroundColor: "rgba(0,0,0,0)",
    padding: "20px",
  },
  Top: {
    display: "flex",
    paddingLeft: "100px",
    paddingRight: "100px",
  },
  Img: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "50px",
  },
  Infor: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  InforItems: {
    display: "flex",
    color: "black",
    marginBottom: "10px",
  },
  btnAddToCart: {
    color: "white",
    width: "300px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderBottomRightRadius: "30px",
    borderTopLeftRadius: "30px",
    transition: "0.13s",
    backgroundColor: "rgba(220,0,0,1)",
    marginTop: "100px",
    "&:hover": {
      backgroundColor: "rgba(200,0,0,1)",
    },
  },
  btnFind: {
    color: "white",
    width: "300px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",

    borderBottomRightRadius: "30px",
    borderTopLeftRadius: "30px",
    transition: "0.13s",
    width: "100%",
    backgroundColor: "rgba(220,0,0,1)",
    "&:hover": {
      backgroundColor: "rgba(200,0,0,1)",
    },
  },
  Bot: {
    backgroundColor: "black",
    marginTop: "20px",
    display: "flex",
    padding: "20px",
    paddingLeft: "100px",
  },
  BOTInforItems: {
    display: "flex",
    color: "white",
  },
  BotLeft: {
    width: "400px",
    display: "flex",
    flexDirection: "column",
    borderRight: "2px solid red",
    paddingRight: "100px",
  },
  BotRight: {
    paddingLeft: "20px",
  },
  textField: {
    color: "white",
  },
  textField1: {
    display: "flex",
  },
});

class ProductDetail extends React.Component {
  state = {
    quantity: 1,
  };
  componentDidMount() {
    axios
      .get(
        `https://5f2e33dc64699b0016028a4d.mockapi.io/MarVelComics/${this.props.match.params.id}`
      )
      .then((res) => {
        const { id, name, price, Published, writer, src } = res.data;
        this.setState({
          id,
          name,
          price,
          Published,
          writer,
          img: src,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  handleClickBtn = () => {
    const { id, name, price, img, quantity } = this.state;
    this.props.addToCart({
      id_cart: "cart_" + Date.now() + Math.random(),
      id_product: id,
      name,
      price,
      img,
      quantity,
    });
  };
  render() {
    const { id, name, price, img, Published, writer } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Grid className={classes.Top}>
          <Grid className={classes.Img}>
            <img src={img}></img>
          </Grid>
          <Grid className={classes.Infor}>
            <Typography className={classes.InforItems} variant="h3">
              {name}
            </Typography>
            <Typography className={classes.InforItems} variant="h4">
              Published: {Published}
            </Typography>
            <Typography className={classes.InforItems} variant="h4">
              Writer: {writer}
            </Typography>
            <Typography className={classes.InforItems} variant="h4">
              Price: {price}$
            </Typography>
            <Grid className={classes.textField1}>
              {" "}
              <TextField
                error
                id="outlined-error-helper-text"
                variant="outlined"
                type="number"
                value={this.state.quantity}
                onChange={(event) => {
                  this.setState({ quantity: Number(event.target.value) });
                }}
                InputProps={{
                  inputProps: {
                    min: 1,
                  },
                }}
              ></TextField>
            </Grid>
            <div className={classes.btnAddToCart} onClick={this.handleClickBtn}>
              <b>ADD</b>
            </div>
          </Grid>
        </Grid>
        <Grid className={classes.Bot}>
          <Grid className={classes.BotLeft}>
            <Typography variant="h6" className={classes.BOTInforItems}>
              <b> PRINT ISSUE</b>
            </Typography>
            <Typography className={classes.BOTInforItems}>
              In Stores Now
            </Typography>
            <TextField
              error
              id="outlined-error-helper-text"
              label="Enter Zip Code"
              variant="outlined"
              style={{ marginBottom: "10px", marginTop: "20px" }}
              InputProps={{
                classes: {
                  input: classes.textField,
                },
              }}
            />
            <div className={classes.btnFind}>
              <b>FIND A STORE</b>
            </div>
          </Grid>
          <Grid className={classes.BotRight}>
            <Typography variant="h5" className={classes.BOTInforItems}>
              <b>DIGITAL ISSUE</b>
            </Typography>
            <Typography
              className={classes.BOTInforItems}
              style={{ marginBottom: "20px" }}
            >
              Read online or on your iPhone, iPad or Android Device
            </Typography>
            <Typography className={classes.BOTInforItems}>
              Digital issue is not currently available
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch({ type: "ADD_TO_CART", payload: product });
    },
  };
};
export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(style)(ProductDetail)));
