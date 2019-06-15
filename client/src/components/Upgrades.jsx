import React, { Component } from "react";

class Upgrades extends Component {

  constructor(props){
    super(props);
    // this.state.upgrades = props.upgrades;
    this.state = {
      upgrades:props.upgrades
    };
  }

  componentDidMount = async () => {
    console.log(this.state.upgrades)
  };

  run = async () => {
    const { ff } = this.state;
    console.log(ff);
  };

  render() {
    return (
      <div className={this.props.className}>
        upgrades
      </div>
    );
  }
}

export default Upgrades;