import React, { Component } from "react";
import MultiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RadioButton from "material-ui/RadioButton";
import { RaisedButton, ListItem, List } from "material-ui";
import Stepper from "./Stepper";

class ConfirmDetails extends Component {
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
    const {
      values: { firstName, lastName, email, occupation, city, bio, page }
    } = this.props;
    return (
      <MultiThemeProvider>
        <React.Fragment>
          <Stepper page={this.props.page} />
          <AppBar title="Details You Entered" />
          <List>
            <ListItem primaryText="FirstName" secondaryText={firstName} />
            <ListItem primaryText="LastName" secondaryText={lastName} />
            <ListItem primaryText="email" secondaryText={email} />
            <ListItem primaryText="occupation" secondaryText={occupation} />
            <ListItem primaryText="city" secondaryText={city} />
            <ListItem primaryText="bio" secondaryText={bio} />
          </List>
          <br />
          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
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
export default ConfirmDetails;
