import React, { Component } from "react";
import update from 'immutability-helper';

class Upgrades extends Component {

  constructor(props) {
    super(props);
    this.state = {
      upgrades:props.upgrades,
      potentialUpgrades:this.potentialUpgrades(props.upgrades)
    };
    this.isValidUpgrade = this.isValidUpgrade.bind(this);
    this.upgradeItem = this.upgradeItem.bind(this);
  }

  componentDidMount() {
    this.upgradesToRender(this.state.upgrades);
    this.setState({
      potentialUpgrades:this.potentialUpgrades(this.state.upgrades)
    });
  };

  componentDidUpdate(a,b,c) {
    this.upgradesToRender(this.state.upgrades);
  }

  upgradesToRender(upgrades) {
    for(let _up of upgrades) {
      let tier = _up.tier;
      const element = document.getElementById(_up.name);
      element.setAttribute("visibility", (tier) ? "Visible":"Hidden");
      for(let e of element.children) {
        e.setAttribute("visibility", (tier-- > 0) ? "Visible":"Hidden");
      }
    }
  }

  potentialUpgrades(upgrades) {
    let _upgradable = [];
    for(let _up of upgrades) {
      console.log(_up.tier,_up.maxTier);
      if(_up.tier < _up.maxTier) {
        _upgradable.push(_up.name);
      } else if(_up.tier >= _up.maxTier){
        console.log('crazy')
      } else {
        console.log(_up);
      }
    }
    return _upgradable;
  }

  isValidUpgrade(upgrade) {
    let valid = false;
    // has enough coin, has received back transaction success,...
    if(this.state.potentialUpgrades.indexOf(upgrade.name) >-1
      && upgrade.tier < upgrade.maxTier ) {
      valid = true;
    }
    return valid;
  }

  upgradeItem(e,val) {
    e.preventDefault();
    const { upgrades } = this.state.upgrades;
    const upgrade = e.currentTarget.innerText;
    const element = this.state.upgrades.find((val) => {
      return val.name === upgrade;
    });
    if(this.isValidUpgrade(element)) {
      const upgrade = update(this.state.upgrades, {
        [element.index]: {
          tier: {
            $apply: function(x) { return x + 1; }
          }
        }
      });
      this.setState({
        upgrades: upgrade,
        potentialUpgrades: this.potentialUpgrades(upgrade),
      });
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="upgradeMenu"
                  data-toggle="dropdown">
            Upgrade
          </button>
          <div className="dropdown-menu"
               aria-labelledby="upgradeMenu">
            {
              this.state.potentialUpgrades.map((upgrade) => {
                return(
                  <button className="dropdown-item"
                          type="button"
                          onClick={this.upgradeItem}
                          key={upgrade}>
                    {upgrade}
                  </button>
                );
              })
            };
          </div>
        </div>
      </div>
    );
  }
}

export default Upgrades;