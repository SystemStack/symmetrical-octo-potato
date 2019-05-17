import React, { Component } from "react";
import getWeb3 from "./utils/getWeb3";
// Components
import Cat from './components/Cat';
import CatPaw from './components/CatPaw';
import Clock from './components/Clock';
import Statistics from './components/Statistics';
import Switch from './components/Switch';

// Contracts
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import PoolContract from "./contracts/Pool.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isSharing: true,
      switchText: 'Share',
      storageValue: 0,
      waitTime: 0,
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
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const simpleStorageNetwork = SimpleStorageContract.networks[networkId];
      const simpleStorageInstance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        simpleStorageNetwork && simpleStorageNetwork.address,
      );
      const poolNetwork = PoolContract.networks[networkId];
      const poolInstance = new web3.eth.Contract(
        PoolContract.abi,
        poolNetwork && poolNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({
        web3: web3,
        accounts:accounts,
        simpleStorageContract: simpleStorageInstance,
        poolContract: poolInstance 
      }, this.run);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert('Failed to load web3, accounts, or contract. Check console for details.');
      console.error(error);
    }
  };

  run = async () => {
    const { 
      web3,
      accounts,
      contract,
      simpleStorageContract,
      poolContract
    } = this.state;
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
      web3: web3,
      accounts: accounts,
      simpleStorageContract: simpleStorageContract,
      poolContract: poolContract,
    });
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
          <Clock className="clock"
                 wait={this.waitTime} />
          <Cat className="friendcat"
               web3={this.state.web3}
               contract={this.state.poolContract} />
          <Cat className="enemycat"
               web3={this.state.web3}
               contract={this.state.poolContract} />
          <div className="rightcontainer">rightcontainer</div>
          <Switch className="switch shareswitch"
                  isSharing={this.state.isSharing}
                  switchText={this.state.switchText} />
          <CatPaw className="catpaw" />
          <div className="upgrades"></div>
          <div className="footer">COPYRIGHT-COMPANY©</div>
        </div>
      </div>
    );
  }
}

export default App;