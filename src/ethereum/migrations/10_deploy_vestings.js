const { TESTNET_CRYPTOCOM, TESTNET_SANTIAGO } = require("./constants");

const Vesting = artifacts.require('VestingWallet.sol');

module.exports = async (deployer, network) => {

    const cryptoComHolder = "0x7CB12ffab909f59CFA7A2fffA26a11D8b7A99239"
    // const santiHolder = "0xA7f35a0b7Db47D7887714e176a07c68F4B09A4Cb"

	await deployer.deploy(Vesting, cryptoComHolder);
	// await deployer.deploy(Vesting, santiHolder);
}