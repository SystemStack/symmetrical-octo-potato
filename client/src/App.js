import React, { Component } from "react";
import getWeb3 from "./utils/getWeb3";
// Components
import Apartment from './components/Apartment';
import Cat from './components/Cat';
import CatPaw from './components/CatPaw';
import Clock from './components/Clock';
import Footer from './components/Footer';
import Statistics from './components/Statistics';
import Switch from './components/Switch';
import Upgrades from './components/Upgrades';
// CSS components
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Contracts
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import PoolContract from "./contracts/Pool.json";
import "./App.css";

//constants
import  AppDefaults from './app.props.json';

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

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      console.log(this.state)
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
      poolContract,
      upgrades
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
      upgrades: upgrades
    });
  };


  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <body className="App container border border-dark col-auto">
        <Row className="border row border-dark col-auto">
            <div className="col-10 border border-dark no-float">
                <div className="col-auto border border-dark">
                    <Statistics
                      className="statistics"
                      stats={this.state.statistics} />
                </div>
                <div className="col-auto border border-dark">
                    <Apartment
                      className="apartment"
                      upgrades={this.state.upgrades}/>
                </div>
                <div className="col-auto border border-dark">
                    <Footer
                      className="footer"/>
                </div>
            </div>

            <div className="col-2 border border-dark">
              <CatPaw />
            </div>
        </Row>
      </body>
    );
  }
}

export default App;