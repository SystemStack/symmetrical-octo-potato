import React, { Component } from "react";
import getWeb3 from "../utils/getWeb3";
import PoolContract from "../contracts/Pool.json";
// userprofile: https://www.cryptokitties.co/profile/0xbe94e46560ab7c329d356bb47ca4b6bcf6b450f3
// should only be able to see cats from their profile
class Cat extends Component {
  constructor(props) {
      super(props);
      console.log(props);
      this.state = {
        maxCatID:1565964,
        ID: Math.floor(Math.random()*100000),
        name: '',
        svgURL: '',
        ownerID: '',
        ownerName: ''
      };
      this.inputChange = this.inputChange.bind(this);
      this.inputUpdate = this.inputUpdate.bind(this);
  }

  inputChange (event) {
    event.preventDefault();
    let catID = Number(event.target.value);
    if(catID === this.state.ID || !Number.isInteger(catID)) return;
    this.setState({
        ID: catID
    });
  }

  inputUpdate = async (event) => {
    event.preventDefault();
    let catID = Number(event.target.value);
    if(catID !== this.state.ID || !Number.isInteger(catID)) return;
    event.preventDefault();
    await this.GetCat(catID).then(res=>{
      this.setState({
        ID: res.id,
        name: res.name,
        svgURL: res.image_url_cdn,
        ownerID: res.owner.address,
        ownerName: res.owner.nickname,
      });
    });
  }

  handleErrors(res) {
    if(!res.ok)
      throw Error(res.statusText);
    return res;
  }

  GetCat = async (catID) => {
    const route = `https://api.cryptokitties.co/kitties/${catID}`;
    return fetch(route, {
      "body":null,
      "credentials":"omit",
      "headers":{ "accept":"application/json" },
      "method":"GET",
      "mode":"cors",
      "referrer":route,
      "referrerPolicy":"no-referrer-when-downgrade",
    }).then(this.handleErrors)
    .then(response => {
      return response.json().then(data => {
        return data;
      });
    }).catch(err => {
      alert('cat does not exist');
    });
  };

  render() {
    return(
      <div className={this.props.className}
           style={{
            'backgroundImage': 'url('+this.state.svgURL+'), none',
            'backgroundRepeat': 'no-repeat',
            // 'width':'100%',
            // 'height':'100%',
            'backgroundPosition':'center'
          }}>
        <input type="number" 
               name="ID"
               placeholder={this.props.className} 
               value={this.state.ID}
               onChange={this.inputChange}
               onBlur={this.inputUpdate}
               min="1"
               max={this.state.maxCatID}
               step={Math.floor(Math.random()*100000)} />
      </div>
    );
  }
}

export default Cat;