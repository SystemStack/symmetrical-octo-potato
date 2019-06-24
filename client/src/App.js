import React, { Component } from "react";
import getWeb3 from "./utils/getWeb3";

import "./App.css";
import AppDefaults from './app.props.json';

import Apartment from './components/Apartment';
// import Cat from './components/Cat';
import CatPaw from './components/CatPaw';
// import Clock from './components/Clock';
import Footer from './components/Footer';
import Statistics from './components/Statistics';
import Switch from './components/Switch';
import Upgrades from './components/Upgrades';
import Row from 'react-bootstrap/Row';

// Contracts
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import PoolContract from "./contracts/Pool.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = AppDefaults;
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

      this.setState({
        web3: web3,
        accounts:accounts,
        simpleStorageContract: simpleStorageInstance,
        poolContract: poolInstance 
      }, this.run);
    } catch (error) {
      console.error(error);
    }
  };

  run = async () => {
    const { 
      web3,
      accounts,
      contract,
      simpleStorageContract,
      poolContract,
      upgrades
    } = this.state;

    // await contract.methods.set(100).send({ from: accounts[0] });
    // const response = await contract.methods.get().call();
    // this.setState({ storageValue: response });
    // await this.GetCat(50);

    this.setState({ 
      storageValue: 100,
      statistics: {
        a:this.state.storageValue,
      },
      web3: web3,
      accounts: accounts,
      simpleStorageContract: simpleStorageContract,
      poolContract: poolContract,
    });
  };

  switchUpdate(items){
    console.log(items);
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <Row className="App container col-md-12 row">
        <div className="col-md-10 no-float">
          <Statistics
            className="statistics col-md-auto"
            stats={this.state.statistics}/>
          <Apartment
            className="apartment col-md-auto"
            upgrades={this.state.aptUpgrades}/>
          <Footer
            className="footer col-md-auto"/>
        </div>
        <div className="rightcontainer col-md-2 float-left">
          <Switch
            className="shareswitch switch col-md-12 no-float"
            switchText={this.state.switchText}
            onStatusUpdate={this.switchUpdate}/>
          <CatPaw
            className="catpaw col-md-12 no-float"
            isSharing={this.state.switchSharing}/>
          <Upgrades
            className="upgrades col-md-12 no-float"
            upgrades={this.state.itemUpgrades}/>
        </div>
      </Row>
    );
  }
}

export default App;