const Pool = artifacts.require("./Pool");
const SimpleStorage = artifacts.require("./SimpleStorage");

module.exports = function(deployer) {
  deployer.deploy(Pool);
  deployer.deploy(SimpleStorage);
};
