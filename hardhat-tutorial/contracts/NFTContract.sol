// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;
import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";



contract nftContract is ERC1155, Ownable{
    uint256 public constant newtrack=1; 

    constructor() ERC1155("https://ipfs.io/ipfs://bafybeicxxqisagyxmeasorot6raxlesabuw7qviwacogvcnfzukqa2t324/{id}.json") {
        //this needs to be edited. as this is just a link to the music file uploaded to ipfs and filecoin via nftstorage
        // The uri needs to be here. the metadata of that should contain this info:
        /*Song: Arcando - In My Head (feat. Britt Lari) [NCS Release]
        Music provided by NoCopyrightSounds
        link: http://NCS.io/InMyHead*/
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
                "https://ipfs.io/ipfs://bafybeicxxqisagyxmeasorot6raxlesabuw7qviwacogvcnfzukqa2t324/",
                Strings.toString(_tokenid),".json"
            )
        );
    }


//address of the smart contract: 0x8F788e5F71e007d3eD92E1e8Aff7bbDC32BE9507

}



