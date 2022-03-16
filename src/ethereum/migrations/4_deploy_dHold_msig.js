const Multisig = artifacts.require('MultisigWallet.sol');

module.exports = async (deployer, network) => {

    const cryptoCom = "0x7CB12ffab909f59CFA7A2fffA26a11D8b7A99239";
    const santiago = "0xA7f35a0b7Db47D7887714e176a07c68F4B09A4Cb"
    const owners = [cryptoCom, santiago]

	await deployer.deploy(Multisig, owners, 2);
}