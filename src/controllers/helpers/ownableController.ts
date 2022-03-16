import { ContractTransaction, ethers, Signer } from "ethers";
import { getOwnableContract } from "../../chain/prefabContractFactory";
import { ProviderOrSigner } from "../../localTypes";
import { Ownable } from "../../types";

export class OwnableController {

    protected _signer: Signer;
    private _address : string
    private _contract? : Ownable

    constructor(address: string, signerOrProvider: ProviderOrSigner) {
        this._address = address;

        if(signerOrProvider instanceof Signer || signerOrProvider instanceof ethers.providers.JsonRpcSigner) {
            this._signer = signerOrProvider;
        } else {
            const web3Wrapper = new ethers.providers.Web3Provider(signerOrProvider) 
            this._signer = web3Wrapper.getSigner()
        }
    }

    private async _getContract(): Promise<Ownable> {
        if(this._contract) {
            return this._contract
        }

        try {
            // Connect to the contract with my signer
            const contract = await getOwnableContract(this._address, this._signer)
            this._contract = contract;
            return contract
        }
        catch (e) {
            throw Error(`Failed to get ERC721 contract: ${e}`)
        }
    }


    /**Setters */
    public async transferOwnership(newOwner: string): Promise<ContractTransaction> {
        const contract = await this._getContract();
        return contract.functions.transferOwnership(newOwner);
    }
}