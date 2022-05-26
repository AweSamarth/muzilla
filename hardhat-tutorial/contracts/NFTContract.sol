// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;
import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";



contract nftContract is ERC1155, Ownable{
    uint256 public constant newtrack=1; 

    constructor() ERC1155("https://ipfs.io/ipfs//bafybeie3dw3vbn44o67szv4zcsxj7iwwvfutwldy4aqvvjdqhc4yk2mogu/{id}.json") {

    }

    function setURI(string memory newuri) public onlyOwner{
        _setURI(newuri);
    }
    function mint() public  payable{
        _mint(msg.sender, newtrack, 1, "Congratulations!");
    }
    function uri(uint256 _tokenid) override public pure returns (string memory) {
        return string(
            abi.encodePacked(
                "https://ipfs.io/ipfs/bafybeie3dw3vbn44o67szv4zcsxj7iwwvfutwldy4aqvvjdqhc4yk2mogu/",
            
                Strings.toString(_tokenid),".json"
            )
        );
    }


//address of the smart contract: 0x67106EaCAf99c93DB14921b9577098eB24369592
//it's on polygon now

}



