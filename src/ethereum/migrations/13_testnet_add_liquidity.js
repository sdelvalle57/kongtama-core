
const { ethers, utils } =  require('ethers');

const DHold = artifacts.require('DHold.sol');

module.exports = async (deployer, network) => {
	const dHold = await DHold.deployed();

	const liquidityAlloc =   utils.parseUnits("98600000000"); //20%
	await dHold.addLiquidity(liquidityAlloc, {value: utils.parseUnits("25")})

}
