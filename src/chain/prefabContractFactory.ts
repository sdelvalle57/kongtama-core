import { Signer } from "ethers";
import { getContract } from "./contractFactory";

import { 
    Kongtama,
    Ownable
} from "../types";

import * as OwnableCompiled  from "../ethereum/abi/Ownable.json";
import * as KongtamaCompiled  from "../ethereum/abi/Kongtama.json";

export async function getOwnableContract(address: string, signerIdxOrAddressOrSigner?: number | string | Signer): Promise<Ownable> {
    return getContract<Ownable>(address, OwnableCompiled.abi, signerIdxOrAddressOrSigner)
}

export async function getKongtamaContract(address: string, signerIdxOrAddressOrSigner?: number | string | Signer): Promise<Kongtama> {
    return getContract<Kongtama>(address, KongtamaCompiled.abi, signerIdxOrAddressOrSigner)
}




