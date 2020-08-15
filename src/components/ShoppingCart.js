import React from "react";
import { withStyles } from "@material-ui/core";

import ProductsList from "./ProductsList";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import axios from "axios";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import { connect } from "react-redux";
const style = () => ({
  container: {
    display: "flex",
    witdh: "100%",
  },
});
class ShoppingCart extends React.Component {
  state = {
    products: [],
    loading: false,
    page: 1,
    limit: 10,
  };
  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("https://5f2e33dc64699b0016028a4d.mockapi.io/MarVelComics")
      .then((res) => {
        const { data } = res;
        this.setState({ products: data, loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleChangePage = (page) => {
    this.setState({ page: page });
  };
  render() {
    const { classes } = this.props;
    const { page, limit } = this.state;
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route
            path="/products/:id"
            render={(props) => <ProductDetail products={this.state.products} />}
          ></Route>
          <Route path="/products">
            <ProductsList
              total={this.state.products.length}
              page={this.state.page}
              loading={this.state.loading}
              products={[...this.state.products].splice(
                (page - 1) * limit,
                limit
              )}
              limit={this.state.limit}
              handleChangePage={this.handleChangePage}
            ></ProductsList>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withStyles(style)(ShoppingCart);
