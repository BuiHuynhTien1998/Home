import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";

export default class CheckOutForm extends React.Component {
  state = {
    name: "",
    address: "",
    phone_number: "",
  };
  handleChange = (event) => {
    const new_state = { ...this.state };
    new_state[event.target.name] = event.target.value;
    this.setState(new_state);
  };
  handlePay = () => {
    if (
      this.state.name === "" ||
      this.state.phone_number === "" ||
      this.state.address === ""
    ) {
      alert("bạn phải điền đầy đủ thông tin");
    } else {
      this.props.handleSendForm(this.state);
      this.setState({ name: "", address: "", phone_number: "" });
    }
  };
  render() {
    const { handleClose, open } = this.props;
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {"BA STUDIO"}
        </DialogTitle>
        <DialogContent
          style={{ display: "flex", flexDirection: "column", width: "500px" }}
        >
          <TextField
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            label="name"
          ></TextField>
          <TextField
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
            label="address"
          ></TextField>
          <TextField
            type="text"
            name="phone_number"
            value={this.state.phone_number}
            onChange={this.handleChange}
            label="phone number"
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handlePay} color="primary" autoFocus>
            Done
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
