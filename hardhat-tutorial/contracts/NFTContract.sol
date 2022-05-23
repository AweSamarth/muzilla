// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


contract Muzilla is ERC1155 {

    // initialized the token name and id
    uint256 public popMusicNFT = 1;

    constructor() ERC1155("https://ipfs.io/ipfs/bafybeihjjkwdrxxjnuwevlqtqmh3iegcadc32sio4wmo7bv2gbf34qs34a/1.json"){
        _mint(msg.sender, popMusicNFT, 100, "");
    }

    // if we have multiple NFTs then we can use this function to get url with NFT id
    function uri(uint256 _tokenid) override public pure returns (string memory) {
        return string(
            abi.encodePacked(
                "https://ipfs.io/ipfs/bafybeihjjkwdrxxjnuwevlqtqmh3iegcadc32sio4wmo7bv2gbf34qs34a/",
                Strings.toString(_tokenid),".json"
            )
        );
    }
}