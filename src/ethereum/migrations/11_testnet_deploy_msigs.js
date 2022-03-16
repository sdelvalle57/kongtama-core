const { TESTNET_CRYPTOCOM, TESTNET_SANTIAGO } = require("./constants");

const Multisig = artifacts.require('MultisigWallet.sol');

module.exports = async (deployer, network) => {

    const cryptoCom = TESTNET_CRYPTOCOM;
    const santiago = TESTNET_SANTIAGO
    const owners = [cryptoCom, santiago]

	await deployer.deploy(Multisig, owners, 2);
	await deployer.deploy(Multisig, owners, 2);
}