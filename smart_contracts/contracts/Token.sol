// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Token {
  event Transfer(address indexed from, address indexed to, uint256 value);
  event Approval(address indexed owner, address indexed spender, uint256 value);

  uint256 public totalSupply;
  mapping(address => uint256) public balanceOf;
  mapping(address => mapping(address => uint256)) public allowance;
  string public name;
  string public symbol;
  uint8 public decimals;

  constructor(string memory _name, string memory _symbol, uint256 _supply) {
    name = _name;
    symbol = _symbol;
    decimals = 18;
    
    balanceOf[msg.sender] += _supply;
    totalSupply += _supply;
    emit Transfer(address(0), msg.sender, _supply);
  }

  function transfer(address recipient, uint256 amount)
    external
    returns (bool)
  {
    balanceOf[msg.sender] -= amount;
    balanceOf[recipient] += amount;
    emit Transfer(msg.sender, recipient, amount);
    return true;
  }

  function approve(address spender, uint256 amount) external returns (bool) {
    allowance[msg.sender][spender] = amount;
    emit Approval(msg.sender, spender, amount);
    return true;
  }

  function transferFrom(address sender, address recipient, uint256 amount)
    external
    returns (bool)
  {
    allowance[sender][msg.sender] -= amount;
    balanceOf[sender] -= amount;
    balanceOf[recipient] += amount;
    emit Transfer(sender, recipient, amount);
    return true;
  }
}