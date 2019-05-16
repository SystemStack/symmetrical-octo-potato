import React, { Component } from "react";

class Clock extends Component {
  state = { 
  };

  componentDidMount = async () => {
    console.log(this.props);

  };

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