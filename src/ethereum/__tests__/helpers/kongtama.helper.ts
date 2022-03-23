import { BigNumber, BigNumberish, ContractTransaction, Signer } from "ethers";
import { deployContract, getContract } from "../../../chain/contractFactory";
import * as artifactKongtama from "../../abi/Kongtama.json";

import { Kongtama } from "../../../types"

export const deployKongtama = async (
    signer: Signer, 
    owner: string,
    proxyRegistry: string, 
    price: BigNumber, 
    maxMint: number, 
    baseMetadataUri: string
): Promise<Kongtama> => {
    return deployContract<Kongtama>(signer, artifactKongtama, owner, proxyRegistry, price, maxMint, baseMetadataUri);
}

export const getKongtama= (signer: Signer, address: string): Promise<Kongtama> => {
    return getContract<Kongtama>(address, artifactKongtama.abi, signer);
}