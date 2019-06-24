import React, { Component } from "react";

class Switch extends Component {
  constructor(props){
    super(props);
    this.state = {
      className: props.className,
      isSharing: props.isSharing,
      switchText: props.switchText
    };
    this.shareStealSwitch = this.shareStealSwitch.bind(this);
  }

  shareStealSwitch (event) {
    event.preventDefault();
    if(this.state.isSharing){
      this.setState({
        isSharing: !this.state.isSharing,
        switchText: 'Sharing',
        className: 'switch shareswitch',
      });
    } else {
      this.setState({
        isSharing: !this.state.isSharing,
        switchText: 'Stealing',
        className: 'switch stealswitch',
      });
    }
  }

  render() {
    return (
      <div className={this.state.className}
           onClick={this.shareStealSwitch}>
        {this.state.switchText}
      </div>
    );
  }
}

export default Switch;