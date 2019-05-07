pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Pool.sol";

contract TestPool {

  function testInitialBalanceUsingDeployedContract() public {
    Pool pool = Pool(DeployedAddresses.Pool());
    uint expected = 0;
    Assert.equal(expected, pool.getBalance(tx.origin), "Pool should have a 0 balance initially");
  }

  function testInitialBalanceWithNewPool() public {
    Pool pool = new Pool();
    uint expected = 0;
    Assert.equal(expected, pool.getBalance(tx.origin), "Pool should have a 0 balance initially");
  }

  function testIncreasePool() public {
    Pool pool = new Pool();
    uint expected = 5;
    for(uint i = 0; i < 5; i++){
      pool.increasePool(tx.origin);
    }
    uint actual = pool.getBalance(tx.origin);
    Assert.equal(expected, actual, "Pool should have a balance of 5 after 5 clicks");
  }
}
