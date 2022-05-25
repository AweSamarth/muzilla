// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;
import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract nftContract is ERC1155, Ownable{
    uint256 public constant newtrack=0; 

    constructor() ERC1155("https://bafybeic4vuwhhnl6ipohbc7ipr4cvyqjqnt2dwzz5qt4grkqnn4xixgaym.ipfs.nftstorage.link/") {
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




}



