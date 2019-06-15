import React, { Component } from "react";
import { ReactComponent as ApartmentSVG } from '../assets/apartment/Apartment_Background.svg';
// Upgrades
import { ReactComponent as BarStool } from '../assets/upgrade/BarStool.svg';
import { ReactComponent as Bookshelf } from '../assets/upgrade/Bookshelf.svg';
import { ReactComponent as Carpet } from '../assets/upgrade/Carpet.svg';
import { ReactComponent as Computer } from '../assets/upgrade/Computer.svg';
import { ReactComponent as Couch } from '../assets/upgrade/Couch.svg';
import { ReactComponent as Desk } from '../assets/upgrade/Desk.svg';
import { ReactComponent as DeskChair } from '../assets/upgrade/DeskChair.svg';
import { ReactComponent as Fridge } from '../assets/upgrade/Fridge.svg';
import { ReactComponent as Lamp } from '../assets/upgrade/Lamp.svg';
import { ReactComponent as LoungeChair } from '../assets/upgrade/LoungeChair.svg';
import { ReactComponent as Plant } from '../assets/upgrade/Plant.svg';
import { ReactComponent as Table } from '../assets/upgrade/Table.svg';
import { ReactComponent as TableStuff } from '../assets/upgrade/TableStuff.svg';
import { ReactComponent as Toaster } from '../assets/upgrade/Toaster.svg';

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
      <div>
      <ApartmentSVG
        className={this.props.className}
        visibility='' />
      <BarStool />
      <Bookshelf />
      <Carpet />
      <Computer />
      <Couch />
      <Desk />
      <DeskChair />
      <Fridge />
      <Lamp />
      <LoungeChair />
      <Plant />
      <Table />
      <TableStuff />
      <Toaster />
      </div>
    );
  }
}

export default Apartment;