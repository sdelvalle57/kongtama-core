const { ethers, utils } =  require('ethers');

const DHold = artifacts.require('DHold.sol');

module.exports = async (deployer, network) => {

	const treasury = "0x7249A0013fCe278111BD52D55e029F55575672Cb";
	const marketing = "0x7eD668d7B6C6B6E6f78519D948e7817F69EA31C9";

    //we gotta exclude these accounts

	const dHold = await DHold.at("0xfBa34C7Da885885c597b8eeaB61fDC0EEe7ACf3C");

    await dHold.addReflectionExcluded(treasury);
    await dHold.addReflectionExcluded(marketing);

}