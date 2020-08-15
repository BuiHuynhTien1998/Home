import React from "react";
import {
  Grid,
  makeStyles,
  Paper,
  CircularProgress,
  Box,
} from "@material-ui/core";
import Product from "./Product";
import Pagination from "@material-ui/lab/Pagination";
import { connect } from "react-redux";
import Carousel from "react-material-ui-carousel";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyle = makeStyles({
  container: {
    paddingLeft: "0px",
    paddingRight: "0px",
    marginTop: "10px",
    margin: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  PaginationContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
  },
  Loading: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

function ProductsList(props) {
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

  let total = 0;
  if (props.total % props.limit > 0) {
    total = Math.floor(props.total / props.limit) + 1;
    console.log(total);
  } else {
    console.log(props.total, props.limit);
    total = props.total / props.limit;
    console.log(total);
  }
  const { products, loading, page, handleChangePage } = props;
  const handleChange = (e, page) => {
    props.handleChangePage(page);
  };

  const classes = useStyle();
  return (
    <div>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>

      {loading ? (
        <Box className={classes.Loading}>
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <Grid container className={classes.container}>
          {products.map((product) => {
            return (
              <Product
                name={product.name}
                price={product.price}
                key={product.id}
                img={product.src}
                id={product.id}
                addToCart={props.addToCart}
              />
            );
          })}
        </Grid>
      )}

      <Grid className={classes.PaginationContainer}>
        <Pagination
          count={total}
          page={page}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
        />
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

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch({ type: "ADD_TO_CART", payload: product });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
