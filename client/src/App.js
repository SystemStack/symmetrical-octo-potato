import React, { Component } from "react";
import getWeb3 from "./utils/getWeb3";
// Components
import Cat from './components/Cat';
import Statistics from './components/Statistics';
import Clock from './components/Clock';
// Contracts
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import PoolContract from "./contracts/Pool.json";
import "./App.css";

class App extends Component {
  state = { 
    storageValue: 0,
    web3: null, 
    accounts: null, 
    contract: null,
    statistics: {
      a:1,
      b:2,
      c:3,
      d:4,
      e:5,
      f:6
    }
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.run);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert('Failed to load web3, accounts, or contract. Check console for details.');
      console.error(error);
    }
  };

  run = async () => {
    const { accounts, contract } = this.state;
    // await contract.methods.set(100).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    // const response = await contract.methods.get().call();

    // Update state with the result.
    // this.setState({ storageValue: response });
    // await this.GetCat(50);

    this.setState({ 
      storageValue: 100,
      statistics: {
        a:this.state.storageValue,
        b:2,
        c:3,
        d:4,
        e:5,
        f:6
      },
    });
  };

  GetCat = async (catID) => {
    const route = `https://api.cryptokitties.co/kitties/${catID}`;
    fetch(route).then( response => {
      console.log(response);
    });
    // this.setState({ friencat: response });
  };



  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <div className="wrapper">
          <Statistics className="statistics"
                      stats={this.state.statistics} />
          
          <div className="body">body</div>
          <Clock className="clock" />
          <Cat className="friendcat" />
          <Cat className="enemycat" />

          <div className="rightcontainer">rightcontainer</div>
          <div className="leftswitch">share</div>
          <div className="rightswitch">steal</div>
          <div className="catpaw">+1</div>
          <div className="upgrades"></div>
          
          <div className="footer">COPYRIGHT-COMPANY©</div>
        </div>
      </div>
    );
  }
}

export default App;
