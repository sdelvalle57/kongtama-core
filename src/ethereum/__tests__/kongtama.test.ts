

import { BigNumber, ethers, Signer, utils } from "ethers";
import { expectRevert } from '@openzeppelin/test-helpers'

import { getContract } from "../../chain/contractFactory";
import { Kongtama } from "../../types";
import { deployKongtama, getKongtama } from "./helpers/kongtama.helper";
import { address0 } from "./helpers/test_constants";

const proxyRegistryAddress = "0xa5409ec958c83c3f309868babaca7c86dcb077c1";
const metadataURI = "https://gateway.pinata.cloud/ipfs/QmUZwYBbqRQP9r9MshwaMpoJRHEjK2o9a7iEtCtwdaTJNd/"

let provider: ethers.providers.JsonRpcProvider;
let signers: Signer[] = []
let addresses: Array<string> = [];
let kongtamas: Array<Kongtama> = [];


const MINUTE_MS = 60 * 1000

describe("Create2", () => {
    beforeAll(async () => {
      //Deploy ERC20 and ERC720, mint some and assign them
      provider = new ethers.providers.JsonRpcProvider()
  
      for(let j = 0; j < 10; j++) {
        signers.push(provider.getSigner(j))
        addresses.push(await provider.getSigner(j).getAddress())
      }

      kongtamas.push(await deployKongtama(signers[0], addresses[0], proxyRegistryAddress, utils.parseEther("0.05"), 20,  metadataURI));

      await Promise.all(signers.map(async (s, index) => {
        if(index > 0) {
            kongtamas.push(await getKongtama(s, kongtamas[0].address))
        } 
      }))
    })

    it("Owner Minting", async () => {
        await kongtamas[0].mint(5); //mints 5
        let ownerOf = await kongtamas[0].ownerOf(1);
        expect(ownerOf.toLowerCase()).toEqual(addresses[0].toLowerCase())

        ownerOf = await kongtamas[0].ownerOf(5);
        expect(ownerOf.toLowerCase()).toEqual(addresses[0].toLowerCase())

        const balanceOf = await kongtamas[0].balanceOf(addresses[0]);
        expect(balanceOf.toNumber()).toEqual(5)

        const uri = await kongtamas[0].tokenURI(1);
        expect(uri.toLowerCase()).toEqual(metadataURI.toLocaleLowerCase()+"1")
    })

    it("User minting", async () => {
        await kongtamas[0].setMaxMintPerWallet(10);

        //tries to mint with no ether
        let mint = kongtamas[1].mint(4, {value: utils.parseEther("0.1999")});
        await expectRevert(
            mint,
            `Not enough ETH`
        );

        const balanceOfAccBefore = await provider.getBalance(addresses[1]);
        const balanceOfOwnBefore = await provider.getBalance(addresses[0])

        await kongtamas[1].mint(8, {value: utils.parseEther("0.4")}); //mints 8

        const balanceOfAccAfter = await provider.getBalance(addresses[1]);
        const balanceOfOwnAfter = await provider.getBalance(addresses[0])

        console.log("ACC", utils.formatEther(balanceOfAccBefore), utils.formatEther(balanceOfAccAfter))
        console.log("OWN", utils.formatEther(balanceOfOwnBefore), utils.formatEther(balanceOfOwnAfter))

        const ownerOf = await kongtamas[0].ownerOf(6);
        expect(ownerOf.toLowerCase()).toEqual(addresses[1].toLowerCase())

        //tries to mint more than maxMIntPerWallet
        mint = kongtamas[1].mint(7, {value: utils.parseEther("0.35")});
        await expectRevert(
            mint,
            `Reached maxMintPerWallet`
        );

        //tries to mint more than allowed
        mint = kongtamas[0].functions.mint(8)
        await expectRevert(
          mint,
          `Amount reaches maxMint`
        );


    })
})
