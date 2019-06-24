import React, { Component } from "react";
import { ReactComponent as PawGive } from '../assets/paw/PawGive.svg';
import { ReactComponent as PawSteal } from '../assets/paw/PawSteal.svg';

class CatPaw extends Component {
  constructor(props){
    super(props);
    this.state = {
      sharing: props.isSharing
    };
  }

  render() {
    if (this.state.sharing) {
      return (
        <PawGive className={this.props.className} />
      );
    } else {
      return (
        <PawSteal className={this.props.className} />
      );
    }
  }
}

export default CatPaw;