
const { ethers, utils } =  require('ethers');

const DHold = artifacts.require('DHold.sol');

module.exports = async (deployer, network) => {
	const dHold = await DHold.deployed();

									//      1.000.000.000.000				
	const liquidityAlloc =   utils.parseUnits("98.600.000.000"); //20%
	await dHold.addLiquidity(liquidityAlloc, {value: utils.parseUnits("25")})

}
