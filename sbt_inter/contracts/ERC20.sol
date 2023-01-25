//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20{
    constructor() ERC20("BatShit", "BS"){
        _mint(msg.sender, 1000000000000000000);
    }

    function mint(uint256 amount) public {
        _mint(msg.sender, amount);
    }
}