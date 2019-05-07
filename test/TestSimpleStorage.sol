pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SimpleStorage.sol";

contract TestSimpleStorage {

  function testItStoresAValue() public {
    SimpleStorage simpleStorage = SimpleStorage(DeployedAddresses.SimpleStorage());
    uint expected = 50;

    simpleStorage.set(50);


    Assert.equal(expected, simpleStorage.get(), "It should store the value 50.");
  }

}
