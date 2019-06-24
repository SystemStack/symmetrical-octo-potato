import React, { Component } from "react";

// userprofile: https://www.cryptokitties.co/profile/0xbe94e46560ab7c329d356bb47ca4b6bcf6b450f3
// should only be able to see cats from their profile
class Statistics extends Component {
  constructor(props){
    super(props);
    this.state = {
      has_cheated: false,
      stats: props.stats,
      catID: '',
      catOwner: '',
    };
  }

  render() {
    return (
        <div className={this.props.className}>
          <div>
            <span>Coin Amount:{this.state.stats.a}</span>
            <span>Highest delta coins given received:{this.state.stats.b}</span>
          </div>
          <div>
            <span>Last coin received from:{this.state.stats.c}</span>
            <span>Current Seed (given and received) ratio:{this.state.stats.d}</span>
          </div>
          <div>
            <span>Most coin received from:{this.state.stats.e}</span>
            <span>Most stolen from:{this.state.stats.f}</span>
          </div>
        </div>
    );
  }
}

export default Statistics;