// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// Author: @kartik_giri
contract GiriToken  is ERC20 {
      constructor(uint256 initialSupply) ERC20("GiriToken", "GIRI") {
    _mint(msg.sender, initialSupply);
  }

}