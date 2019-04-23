import React, { Component } from "react";
import MultiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RadioButton from "material-ui/RadioButton";
import { RaisedButton } from "material-ui";
import Stepper from "./Stepper";

class FormUserDetials extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  state = {};
  render() {
    const { values, handleChange,page } = this.props;
    return (
      <MultiThemeProvider>
        <React.Fragment>
          <Stepper page = {page} />
          <AppBar title="Enter User Details" />
          <TextField
            hintText="Enter your firstName"
            floatingLabelText="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}

          />
          <br />

          <TextField
            hintText="Enter your Last Name"
            floatingLabelText="Lasr Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />

          <TextField
            hintText="Enter your Email"
            floatingLabelText="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MultiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};
export default FormUserDetials;
