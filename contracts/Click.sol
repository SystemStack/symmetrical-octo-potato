pragma solidity ^0.5.0;

/**
 * Two kinds of clicks: Increase Pool size and increase current coins
 * CLICK: Perform a click, get a coin
 */

contract Click {
    mapping (address => uint) balances;

    constructor() public {
        balances[tx.origin] = 0;
    }

    function click(address receiver, uint factor) public returns(bool success) {
        balances[receiver] += factor;
        return true;
    }
}
