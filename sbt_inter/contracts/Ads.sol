//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Ads is ERC721URIStorage{
    uint256 public count;
    constructor() ERC721("Can sell your mom", "CSYM"){}

    function mint(string calldata uri) public {
        uint256 tokenId = count;
        ++count;
        _safeMint(tx.origin, tokenId);
        _setTokenURI(tokenId, uri);
    }
}