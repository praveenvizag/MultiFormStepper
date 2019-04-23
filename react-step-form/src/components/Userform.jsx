import React, { Component } from "react";
import FormUserDetials from "./FormUserDetails";
import FormPersonalDetials from "./FormPersonalDetails";
import ConfirmDetails from "./ConfirmPage";
import Success from './Success';
import { Stepper } from "material-ui";
class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.currentTarget.value });
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, bio, occupation, city } = this.state;
    const values = { firstName, lastName, email, bio, occupation, city };
    switch (step) {
      case 1:
        return (
          <FormUserDetials
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            page = {step}
          />
        );

      case 2:
        return (
          
            <FormPersonalDetials
              values={values}
              handleChange={this.handleChange}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              page = {step}
            />
          
        );

      case 3:
        return (
          
            <ConfirmDetails
              values={values}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              page = {step}
            />
          
        );

      case 4:
        return <Success/>;
    }
  }
}

export default UserForm;
