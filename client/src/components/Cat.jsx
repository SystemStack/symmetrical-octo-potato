import React, { Component } from "react";

// userprofile: https://www.cryptokitties.co/profile/0xbe94e46560ab7c329d356bb47ca4b6bcf6b450f3
// should only be able to see cats from their profile
class Cat extends Component {
  state = { 
    ID: '',
    name: '',
    svgURL: ''
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
        <div className={this.props.className}>{this.props.className}</div>
    );
  }
}

export default Cat;