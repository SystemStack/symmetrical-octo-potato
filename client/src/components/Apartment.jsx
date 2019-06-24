import React, { Component } from "react";
import { ReactComponent as ApartmentSVG } from '../assets/apartment/Apartment_Background.svg';
class Apartment extends Component {

  constructor(props){
    super(props);
    this.state = props.upgrades;
  }

  componentDidMount() {
    this.upgradesToRender(this.state);
  };

  componentDidUpdate() {
    this.upgradesToRender(this.state);
  };

  upgradesToRender(upgrades) {
    document.getElementById("RoomLines").setAttribute("visibility", (upgrades.Lines ? "visible" : "hidden"));
    document.getElementById("RoomColor").setAttribute("visibility", (upgrades.Color ? "visible" : "hidden"));
    document.getElementById("RoomShadows").setAttribute("visibility", (upgrades.Shadows ? "visible" : "hidden"));
    document.getElementById("RoomHighlights").setAttribute("visibility", (upgrades.Highlights ? "visible" : "hidden"));
    document.getElementById("RoomFilter").setAttribute("visibility", (upgrades.Filter ? "visible" : "hidden"));
  }

  render() {
    return (
      <ApartmentSVG
        className={this.props.className}/>
    );
  }
}

export default Apartment;