// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;
import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract nftContract is ERC1155 {
    uint256 public constant newtrack=0;

    constructor() ERC1155("https://bafybeic4vuwhhnl6ipohbc7ipr4cvyqjqnt2dwzz5qt4grkqnn4xixgaym.ipfs.nftstorage.link/") {

    }

    function mint() public  payable{
        _mint(msg.sender, newtrack, 1, "Congratulations!");
    }




}

/*Song: Arcando - In My Head (feat. Britt Lari) [NCS Release]
Music provided by NoCopyrightSounds
Free Download/Stream: http://NCS.io/InMyHead
Watch: http://youtu.be/ 
*/ 