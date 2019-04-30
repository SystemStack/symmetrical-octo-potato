pragma solidity ^0.5.0;

/**
 * Two kinds of clicks: Increase Pool size and increase current coins
 * POOL: Perform a click, increase pool
 * CLICK: Perform a click, get a coin
 */

contract Pool {
    mapping (address => uint) balances;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    event BalanceChange(address _addr, uint256 balance);

    // Start at zero
    constructor() public {
        balances[tx.origin] = 0;
    }

    // Take an amount from an address based on upgrades
    function click(address receiver, uint amount, uint factor) public returns(bool sufficient) {
        if (balances[msg.sender] < amount * factor) return false;
        balances[msg.sender] -= amount * factor;
        balances[receiver] += amount * factor;
        emit Transfer(msg.sender, receiver, amount);
        return true;
    }

    // unsafe
    function unsafeGetBalance(address addr) public {
        emit BalanceChange(addr, balances[addr]);
    }

    // Can get anyone's balance
    function getBalance(address addr) public view returns(uint) {
        return balances[addr];
    }

    // Can increase anyone's pool
    function increasePool(address receiver) public returns(bool success) {
        balances[receiver] += 1;
        return true;
    }

}
