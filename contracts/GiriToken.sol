// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// Author: @kartik_giri
contract GiriToken  is ERC20 {
      constructor(uint256 initialSupply) ERC20("GiriToken", "GIRI") {
    _mint(msg.sender, initialSupply);
  }

}
// sepolia contract address :  0xfEefC998fc9846c04B5CC9811f42dAFB3D24a90c