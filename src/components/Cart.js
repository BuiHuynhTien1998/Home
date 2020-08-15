import React from "react";
import {
  Grid,
  withStyles,
  Typography,
  Button,
  Snackbar,
} from "@material-ui/core";
import axios from "axios";
import CartProducts from "./CartProducts";
import { connect } from "react-redux";
import CheckOutForm from "./CheckOutForm";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const style = () => ({
  container: {
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    padding: "50px",
    display: "flex",
  },
  Products: {
    minHeight: "600px",
    width: "70%",
    display: "flex",
    flexDirection: "column",
    marginRight: "10px",
  },
  Checkout: {
    width: "15%",
    position: "fixed",
    right: "150px",
  },
  CheckoutContainer: {
    backgroundColor: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
  },
});

class Cart extends React.Component {
  state = {
    open: false,
    openAlert: false,
    alert: "",
    severity: "success",
  };
  handleToggleForm = () => {
    this.setState({ open: !this.state.open });
  };
  handleCheckout = () => {
    if (this.props.quantity <= 0) {
      this.setState({
        alert: "Unsuccessful",
        severity: "error",
        openAlert: true,
        open: false,
      });
    } else {
      this.setState({ open: true });
    }
  };
  handleCloseSnackbar = () => {
    this.setState({ openAlert: false });
  };
  handleSendForm = (form) => {
    axios
      .post("https://5f2e33dc64699b0016028a4d.mockapi.io/cart", {
        ...form,
        id: "order" + Date.now() + Math.random(),
        products: this.props.cart_data,
      })
      .then((res) => {
        this.setState({
          alert: "Successful",
          severity: "success",
          openAlert: true,
          open: false,
        });
        this.props.clearCart();
      })
      .catch((err) => {
        this.setState({
          alert: "Unsuccessful",
          severity: "error",
          openAlert: true,
          open: false,
        });
      });
  };
  render() {
    const total = this.props.cart_data.reduce((total, pic) => {
      return (total = total + pic.quantity * pic.price);
    }, 0);
    const { classes } = this.props;
    return (
      <Grid className={classes.container}>
        <Grid className={classes.Products}>
          {this.props.cart_data.map((cart) => {
            return (
              <CartProducts
                deleteCart={this.props.deleteCart}
                updateCart={this.props.updateCart}
                key={cart.id}
                cart={cart}
              />
            );
          })}
        </Grid>
        <Grid className={classes.Checkout}>
          <Grid className={classes.CheckoutContainer}>
            <Typography
              style={{ display: "flex", justifycontent: "flexStart" }}
              variant="h5"
            >
              Total: {total}$
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleCheckout}
            >
              Purchase
            </Button>
          </Grid>
        </Grid>
        <CheckOutForm
          open={this.state.open}
          handleClose={this.handleToggleForm}
          handleSendForm={this.handleSendForm}
        />
        <Snackbar
          open={this.state.openAlert}
          autoHideDuration={6000}
          onClose={this.handleCloseSnackbar}
        >
          <Alert
            onClose={this.handleCloseSnackbar}
            severity={this.state.severity}
          >
            {this.state.alert}
          </Alert>
        </Snackbar>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  const quantity = state.cart.reduce((count, product_in_cart) => {
    return (count = count + product_in_cart.quantity);
  }, 0);
  return {
    cart_data: state.cart,
    quantity: quantity,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateCart: (id_cart, value) => {
      dispatch({ type: "UPDATE_CART", payload: { id_cart, value } });
    },
    deleteCart: (id_cart) => {
      dispatch({ type: "DELETE_CART", payload: id_cart });
    },
    clearCart: () => {
      dispatch({ type: "CLEAR_CART" });
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(Cart));
