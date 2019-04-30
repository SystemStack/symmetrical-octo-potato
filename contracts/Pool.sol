pragma solidity ^0.5.0;

/**
 * Two kinds of clicks: Increase Pool size and increase current coins
 * POOL: Perform a click, increase pool
 */

contract Pool {
    mapping (address => uint) balances;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    constructor() public {
        balances[tx.origin] = 0;
    }

    function sendCoin(address receiver, uint amount) public returns(bool sufficient) {
        if (balances[msg.sender] < amount) return false;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Transfer(msg.sender, receiver, amount);
        return true;
    }

    function increase(address receiver, uint factor) public returns(bool success) {
        balances[receiver] += factor;
        return true;
    }
}
