import React, { Component } from "react";

class Clock extends Component {
  constructor(props){ 
    super(props);
    this.state = {
      secondsRemaing: 0
    };
  }

  run = async () => {
    const { } = this.state;
    this.setState({  });
  };

  render() {
    return (
      <div className={this.props.className}>Clock</div>
    );
  }
}

export default Clock;