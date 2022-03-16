const { ethers, utils } =  require('ethers');
const { TESTNET_CRYPTOCOM, TESTNET_SANTIAGO } = require('./constants');

const DHold = artifacts.require('DHold.sol');

module.exports = async (deployer, network) => {

	const treasury = "0x8A1eA39D103999f052Cf72546728A07a8dfaDd1e";
	const marketing = "0x2287Fa6efdEc6d8c3E0f4612ce551dEcf89A357A";

	const address0 = "0x0000000000000000000000000000000000000000";
	const cryptoCom = TESTNET_CRYPTOCOM;
	const santiago = TESTNET_SANTIAGO

	const address0Alloc =    utils.parseUnits("5900000000.0000039"); //59% burn
	const cryptoComAlloc =   utils.parseUnits("500000000"); //5% team
	const santiagoAlloc =    utils.parseUnits("500000000"); //5% team
	const treasuryAlloc =    utils.parseUnits("500000000"); //5%
	const marketingAlloc =   utils.parseUnits("500000000"); //5%

	const dHold = await DHold.deployed();

	const airdropAccounts = [address0,      cryptoCom,      santiago,      marketing,      treasury];
	const airdropAmounts  = [address0Alloc, cryptoComAlloc, santiagoAlloc, marketingAlloc, treasuryAlloc];
	await dHold.airdrop(airdropAccounts, airdropAmounts, {gas: 300000});


}