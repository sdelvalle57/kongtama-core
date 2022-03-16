import { Signer } from "ethers";
import { getContract } from "./contractFactory";

import { 
    Ownable
} from "../types";

import * as OwnableCompiled  from "../ethereum/abi/Ownable.json";

export async function getOwnableContract(address: string, signerIdxOrAddressOrSigner?: number | string | Signer): Promise<Ownable> {
    return getContract<Ownable>(address, OwnableCompiled.abi, signerIdxOrAddressOrSigner)
}





