import React, { Component } from "react";

class Stepper extends Component {
  
  state: {
    stepper: [];
  };
  displaypage = page => {
    this.state.stepper = [page];
    console.log(this.state.stepper[0]);

    return this.state.stepper[0];
  };
  state = {};
  render() {
    const { page } = this.props;
    switch (page) {
      case 1:
        return (
          <div className="progress" style = {{color: "#28a745"}}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="25"
              style= {{width: "25%"}}
              aria-valuemin="0"
              aria-valuemax="100"
            >
             {STEPPER} 1
            </div>
          </div>
        );
      case 2:
        return (
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style= {{width: "50%"}}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
             {STEPPER} 2
            </div>
          </div>
        );
      case 3:
        return (
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style= {{width: "75%"}}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
             {STEPPER} 3
            </div>
          </div>
        );
      case 4:
        return (
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{width:"100%"}}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              50%
            </div>
          </div>
        );
    }
  }
}
const STEPPER = "Step";
export default Stepper;
