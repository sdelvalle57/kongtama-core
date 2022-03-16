const { ethers, utils } =  require('ethers');

const DHold = artifacts.require('DHold.sol');


const getAlloc = (value) => {
	const pSellAlloc = 111400000000;
	const ethRaised = 33.42;
	return utils.parseUnits((pSellAlloc*value/ethRaised).toString());
}

module.exports = async (deployer, network) => {

	const buyer1  = "0x1e5448729b71703c75d7a464a4bd0896eeb743a0";		    const alloc1  = getAlloc(0.6)   
	const buyer2  = "0xe57b0823e489d1ffa19e4187706ce04ce26f781d";		    const alloc2  = getAlloc(0.089)
	const buyer3  = "0x5a9ef14b49a991082ac388f071db5a7e9af2d7ea";		    const alloc3  = getAlloc(0.3)
	const buyer4  = "0x5734fc1f7b8b43d23d8d737dccb4a1ede91915e2";		    const alloc4  = getAlloc(2)
	const buyer5  = "0x3bad407c5f17aee49e8cad3a300ca586a54b5d22";		    const alloc5  = getAlloc(0.3)
	const buyer6  = "0xa2869eae6120c8f6093324cad2b57c2a64242076";		    const alloc6  = getAlloc(1)
	const buyer7  = "0x05f2becbc05780c96ae573f9858cbb77fbd499ce";		    const alloc7  = getAlloc(0.6)
	const buyer8  = "0xbd2c1a5c2a0137c3b43b66e18593b845618be5fe";		    const alloc8  = getAlloc(0.4)
	const buyer9  = "0xeb068e281aa8c5512c023424b5c1dee0569b6b97";		    const alloc9  = getAlloc(0.5)
	const buyer10 = "0x5bae2fe8d641f2bdf88994937e5dba87eb29afc1";		    const alloc10 = getAlloc(0.3)
	const buyer11 = "0xec72093219f97f24ae43659c07e23a3c6a7adbba";		    const alloc11 = getAlloc(0.3)
	const buyer12 = "0x5b0b8dd2bc369601c1831778140241c3694b251e";		    const alloc12 = getAlloc(0.4)
	const buyer13 = "0xa552d4f98d36c847a182b1a5a3eed260a157a96f";		    const alloc13 = getAlloc(2)
	const buyer14 = "0x8ba7af3a1d65ebe874d389082eea8e0411020497";		    const alloc14 = getAlloc(0.3)
	const buyer15 = "0xcb9706b6e118d31b9df9977837274e1b5da87c13";		    const alloc15 = getAlloc(1.5)
	const buyer16 = "0x136db729EBdF358B7A9E29cAbA768504Cd5c6dc8";		    const alloc16 = getAlloc(0.5)
	const buyer17 = "0x31ea6f57267f4d855fd66f62ddbd0a98e33ea672";		    const alloc17 = getAlloc(0.4)
	const buyer18 = "0xb2ca1d91417521f0651307bcfba1fc04f086eb4b";		    const alloc18 = getAlloc(1)
	const buyer19 = "0xa0ccc9f5b34e448b9e93799a2bf33c0ddbd7d9b5";		    const alloc19 = getAlloc(2.02)
	const buyer20 = "0x6bebc32655fad7bc8ca5571ec517653919b7582a";		    const alloc20 = getAlloc(3)
	const buyer21 = "0xd6b6a6bc4102b4b36896b22a3ce40cec57d0138b";		    const alloc21 = getAlloc(3)
	const buyer22 = "0x1826bee952d1236b2ddd03d0fcf7d1763c368312";		    const alloc22 = getAlloc(1)
	const buyer23 = "0x1d67afde08c1ab53f17768d43c5b943821c0ea25";		    const alloc23 = getAlloc(3)
	const buyer24 = "0x302eadcedb5a878e577d21b9bcc1ca81f05db70e";		    const alloc24 = getAlloc(3)
	const buyer25 = "0xe58e6abc1cd053a82f03cb4d85b97796d9018d1b";		    const alloc25 = getAlloc(0.311)
	const buyer26 = "0x823bf3514d593d0ee796afe4339987812c3bf795";		    const alloc26 = getAlloc(2)
	const buyer27 = "0x2031213cd107911515bbbdd98ce3b5c6db3e4012";		    const alloc27 = getAlloc(3)
	const buyer28 = "0x2c9cf7a6a78f7e490dda54e4df15f3bbdee5864e";		    const alloc28 = getAlloc(0.3)
	const buyer29 = "0x3c7e525fe0f285f0c12690c3bd29414bb9da32d9";		    const alloc29 = getAlloc(0.3)

	const dHold = await DHold.deployed();

	const buyersArray1 = [buyer1, buyer2, buyer3, buyer4, buyer5, buyer6, buyer7, buyer8, buyer9, buyer10]
	const buyerAllocArr1 = [alloc1, alloc2, alloc3, alloc4, alloc5, alloc6, alloc7, alloc8, alloc9, alloc10]

	const buyersArray2 = [buyer11, buyer12, buyer13, buyer14, buyer15, buyer16, buyer17, buyer18, buyer19, buyer20]
	const buyerAllocArr2 = [alloc11, alloc12, alloc13, alloc14, alloc15, alloc16, alloc17, alloc18, alloc19, alloc20]

	const buyersArray3 = [buyer21, buyer22, buyer23, buyer24, buyer25, buyer26, buyer27, buyer28, buyer29]
	const buyerAllocArr3 = [alloc21, alloc22, alloc23, alloc24, alloc25, alloc26, alloc27, alloc28, alloc29]

	await dHold.airdrop(
        buyersArray1.concat(buyersArray2).concat(buyersArray3), 
        buyerAllocArr1.concat(buyerAllocArr2).concat(buyerAllocArr3),
        {gas: 1000000}
    );

}