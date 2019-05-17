import React, { Component } from "react";

class CatPaw extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className={this.props.className}>+1</div>
    );
  }
}

export default CatPaw;