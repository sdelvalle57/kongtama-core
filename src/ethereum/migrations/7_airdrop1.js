const { ethers, utils } =  require('ethers');

const DHold = artifacts.require('DHold.sol');

module.exports = async (deployer, network) => {

	const treasury = "0x7249A0013fCe278111BD52D55e029F55575672Cb";
	const marketing = "0x7eD668d7B6C6B6E6f78519D948e7817F69EA31C9";

	const address0 = "0x0000000000000000000000000000000000000000";
	const cryptoCom = "0x7CB12ffab909f59CFA7A2fffA26a11D8b7A99239";
	const santiago = "0xA7f35a0b7Db47D7887714e176a07c68F4B09A4Cb"

	const address0Alloc =    utils.parseUnits("590000000000.0000039"); //59% burn
	const cryptoComAlloc =   utils.parseUnits("50000000000"); //5% team
	const santiagoAlloc =    utils.parseUnits("50000000000"); //5% team
	const treasuryAlloc =    utils.parseUnits("50000000000"); //5%
	const marketingAlloc =   utils.parseUnits("50000000000"); //5%

	const dHold = await DHold.deployed();

	const airdropAccounts = [address0,      cryptoCom,      santiago,      marketing,      treasury];
	const airdropAmounts  = [address0Alloc, cryptoComAlloc, santiagoAlloc, marketingAlloc, treasuryAlloc];
	await dHold.airdrop(airdropAccounts, airdropAmounts, {gas: 300000});


}