import React, { Component } from "react";

// userprofile: https://www.cryptokitties.co/profile/0xbe94e46560ab7c329d356bb47ca4b6bcf6b450f3
// should only be able to see cats from their profile
class Cat extends Component {
  constructor(props) {
      super(props);
      this.state = { 
        ID: '',
        name: '',
        svgURL: ''
      };
      this.inputChange = this.inputChange.bind(this);
      this.inputUpdate = this.inputUpdate.bind(this);
  }

  inputChange (event) {
    event.preventDefault();
    this.setState({
        ID: event.target.value
    });
  }

  inputUpdate = async (event) => {
    event.preventDefault();
    let kitty = await this.GetCat(this.state.ID);
  }

  run = async () => {
    const { } = this.state;

    this.setState({  });
  };

  GetCat = async (catID) => {
    const route = `https://api.cryptokitties.co/kitties/${catID}`;
    return fetch("https://api.cryptokitties.co/kitties/1401371", {
      "credentials":"omit",
      "headers":{ "accept":"application/json, text/plain, */*" },
      "referrer":"https://www.cryptokitties.co/kitty/1401371",
      "referrerPolicy":"no-referrer-when-downgrade",
      "body":null,
      "method":"GET",
      "mode":"cors"
    }).then(response => {
      return response
    });
  };

  render() {
    if(!this.state.catID) {
      return(
        <div className={this.props.className}>
          <input type="number" 
                 name="ID"
                 placeholder={this.props.className} 
                 value={this.state.ID}
                 onChange={this.inputChange}
                 onBlur={this.inputUpdate} />
        </div>
      );
    }
    return (
        <div className={this.props.className}>{this.props.className}</div>
    );
  }
}

export default Cat;