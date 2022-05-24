const { deployContract } = require("ethereum-waffle");
const {ethers} = require ("hardhat");
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main(){


    const nftcontract= await ethers.getContractFactory("nftContract");
    const deployedNFTContract= await nftcontract.deploy();
    await deployedNFTContract.deployed();
    console.log("Here is the address", deployedNFTContract.address);


}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });