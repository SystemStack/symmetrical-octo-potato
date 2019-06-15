import React, { Component } from "react";

class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className={this.props.className}>
        Scrolling text
      </div>
    );
  }
}

export default Footer;