const { ethers, utils } =  require('ethers');

const DHold = artifacts.require('DHold.sol');

module.exports = async (deployer, network) => {

	//Contracts used just for testing
	const uniswapFactory = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
	const uniswapRouter = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

	const treasury = "0x2b3b60D24D975b9B681A2F9ebAff4670D6c7262a";
	const marketing = "0x5874B6434435126a700300bbd6C5636337218100";

	await deployer.deploy(DHold, uniswapFactory, uniswapRouter, marketing, treasury);

}

//liquidity  =   98600000000
//airdrop1   =  790000000000
//pBuyers2   =  111400000000
//total     = 1000000000000