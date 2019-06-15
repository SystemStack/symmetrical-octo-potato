import React, { Component } from "react";
import { ReactComponent as ApartmentSVG } from '../Apartment.svg';

class Apartment extends Component {

  constructor(props){
    super(props);
    // this.state.upgrades = props.upgrades;
    this.state = {
      // upgrades:props.
    };
    this.idSuffix = "_xA0_Image";
  }
  
  componentDidMount = async () => {

  };

  upgradesToRender = (upgrades) => {

  };

  run = async () => {
    const { ff } = this.state;
    console.log(ff);
  };

  render() {
    return (
      <ApartmentSVG
        className={this.props.className}
        visibility='Hidden' />
    );
  }
}

export default Apartment;