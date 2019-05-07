import React, { Component } from "react";
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
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
        );
      console.error(error);
    }
  };

  run = async () => {
    const { accounts, contract } = this.state;

    await contract.methods.set(100).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className='App' >
        <div class="wrapper">
          <div class="header">header</div>
          <div class="statistics">
        <div>The stored value is: {this.state.storageValue}</div>
          </div>
          <div class="footer">COPYRIGHT-COMPANY©</div>
          <div class="body">body</div>
          <div class="clock">clock</div>
          <div class="rightcontainer">rightcontainer</div>
          <div class="leftswitch">share</div>
          <div class="rightswitch">steal</div>
          <div class="catpaw">+1</div>
          <div class="upgrades">upgrades</div>
          <div class="friendcat">friendcat</div>
          <div class="enemycat">enemycat</div>
        </div>
      </div>
    );
  }
}

export default App;
