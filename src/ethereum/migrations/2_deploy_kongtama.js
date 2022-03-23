const { utils } = require("ethers");

const Kongtama = artifacts.require('Kongtama.sol');

module.exports = async (deployer, network) => {
    const metadataURI = "https://gateway.pinata.cloud/ipfs/QmX7HPbhMSqyMxpr4rKagR7PGPYER9UAcbwG2GR4GpKtn6/"
    const price = utils.parseEther("0.05")

    if (network == 'rinkeby') {
        proxyRegistryAddress = "0xf57b2c51ded3a29e6891aba85459d600256cf317";
        owner = "0x05db46B2588ebB55B4525b5d6103F41a776f9ec2"
    } else {
        proxyRegistryAddress = "0xa5409ec958c83c3f309868babaca7c86dcb077c1";
        owner = "0xB1F25Ce454F3E02150ef27Eaac8836C919a21B2A"
    }

    await deployer.deploy(Kongtama, owner, proxyRegistryAddress, price, 1000, metadataURI);    

}