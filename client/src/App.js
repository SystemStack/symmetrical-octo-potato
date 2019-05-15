import React, { Component } from "react";
import Cat from './components/Cat'
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./utils/getWeb3";
import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

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
    //@David::
    // this works but its a nuisance to accept the transaction every time
    /*await contract.methods.set(100).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });*/
    await this.GetCat(50)
    this.setState({ storageValue: 100 });
  };

  GetCat = async (catID) => {
    const route = `https://api.cryptokitties.co/kitties/${catID}`;
    fetch(route).then(response=>{
      console.log(response);
    })
    // this.setState({ friencat: response });
  };



  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className='App' >
        <div className="wrapper">
          <div className="header">header</div>
          <div className="statistics">
            <div>The stored value is: {this.state.storageValue}</div>
          </div>
          <div className="footer">COPYRIGHT-COMPANY©</div>
          <div className="body">body</div>
          <div className="clock">clock</div>
          <div className="rightcontainer">rightcontainer</div>
          <div className="leftswitch">share</div>
          <div className="rightswitch">steal</div>
          <div className="catpaw">+1</div>
          <div className="upgrades">upgrades</div>
          <Cat className="friendcat" />
          <Cat className="enemycat" />
        </div>
      </div>
    );
  }
}

export default App;
