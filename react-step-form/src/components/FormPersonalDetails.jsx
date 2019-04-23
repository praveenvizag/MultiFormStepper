import React, { Component } from "react";
import MultiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RadioButton from "material-ui/RadioButton";
import { RaisedButton } from "material-ui";
import Stepper from './Stepper';

class FormPersonalDetials extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  state = {};
  render() {
    const { values, handleChange ,page} = this.props;
    return (
      <MultiThemeProvider>
        <React.Fragment>
        <Stepper page = {page} />
          <AppBar title="Enter Personal Details" />
          <TextField
            hintText="Enter your Occupation"
            floatingLabelText="Occupation "
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <br />

          <TextField
            hintText="Enter your City"
            floatingLabelText="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <br />

          <TextField
            hintText="Enter your Bio"
            floatingLabelText="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />

          <RaisedButton
            label="Back"
            primary={true}
            style={styles.button}
            onClick={this.back}
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
export default FormPersonalDetials;
