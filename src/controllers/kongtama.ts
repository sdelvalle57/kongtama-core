import { BigNumber, ContractTransaction, ethers, Signer } from "ethers";
import { getKongtamaContract } from "../chain/prefabContractFactory";
import { ProviderOrSigner } from "../localTypes";
import { Kongtama } from "../types";

export class KongtamaController {

    protected _signer: Signer;
    private _address : string
    private _contract? : Kongtama

    constructor(address: string, signerOrProvider: ProviderOrSigner) {
        this._address = address;

        if(signerOrProvider instanceof Signer || signerOrProvider instanceof ethers.providers.JsonRpcSigner) {
            this._signer = signerOrProvider;
        } else {
            const web3Wrapper = new ethers.providers.Web3Provider(signerOrProvider) 
            this._signer = web3Wrapper.getSigner()
        }
    }

    private async _getContract(): Promise<Kongtama> {
        if(this._contract) {
            return this._contract
        }

        try {
            // Connect to the contract with my signer
            const contract = await getKongtamaContract(this._address, this._signer)
            this._contract = contract;
            return contract
        }
        catch (e) {
            throw Error(`Failed to get Kongtama contract: ${e}`)
        }
    }


    /**Setters */

    public async setPrice(price: BigNumber): Promise<ContractTransaction> {
        const contract = await this._getContract();
        return contract.functions.setPrice(price);
    }

    public async setMaxMint(maxMint: number): Promise<ContractTransaction> {
        const contract = await this._getContract();
        return contract.functions.setMaxMint(maxMint);
    }

    public async setMaxMintPerWallet(maxMint: number): Promise<ContractTransaction> {
        const contract = await this._getContract();
        return contract.functions.setMaxMintPerWallet(maxMint);
    }

    public async setProxyRegistryAddress(address: string): Promise<ContractTransaction> {
        const contract = await this._getContract();
        return contract.functions.setProxyRegistryAddress(address);
    }

    public async setBaseMetadataURI(uri: string): Promise<ContractTransaction> {
        const contract = await this._getContract();
        return contract.functions.setBaseMetadataURI(uri);
    }

    public async mint(to: string, tokenId: number, value?: BigNumber): Promise<ContractTransaction> {
        const contract = await this._getContract();
        return contract.functions.mint(to, tokenId, { value });
    }

    public async withdraw(): Promise<ContractTransaction> {
        const contract = await this._getContract();
        return contract.functions.withdraw();
    }
    
    public async approve(to: string, tokenId: number): Promise<ContractTransaction> {
        const contract = await this._getContract();
        return contract.functions.approve(to, tokenId);
    }

    public async setApprovalForAll(operator: string, approved: boolean): Promise<ContractTransaction> {
        const contract = await this._getContract();
        return contract.functions.setApprovalForAll(operator, approved);
    }

    public async transferFrom(from: string, to: string, tokenId: number): Promise<ContractTransaction> {
        const contract = await this._getContract();
        return contract.functions.transferFrom(from, to, tokenId);
    }

    public async transferOwnership(newOwner: string): Promise<ContractTransaction> {
        const contract = await this._getContract();
        return contract.functions.transferOwnership(newOwner);
    }

    /** Getters */
    public async isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        const contract = await this._getContract();
        return contract.isApprovedForAll(owner, operator);
    }

    public async uri(tokenId: number): Promise<string> {
        const contract = await this._getContract();
        return contract.uri(tokenId);
    }

    public async getPrice(): Promise<BigNumber> {
        const contract = await this._getContract();
        return contract.getPrice();
    }

    public async getMaxMint(): Promise<BigNumber> {
        const contract = await this._getContract();
        return contract.getMaxMint();
    }

    public async getMaxMintperWallet(): Promise<BigNumber> {
        const contract = await this._getContract();
        return contract.getMaxMintperWallet();
    }

    public async balanceOf(address: string): Promise<BigNumber> {
        const contract = await this._getContract();
        return contract.balanceOf(address);
    }

    public async ownerOf(tokenId: number): Promise<string> {
        const contract = await this._getContract();
        return contract.ownerOf(tokenId);
    }

    public async name(): Promise<string> {
        const contract = await this._getContract();
        return contract.name();
    }

    public async symbol(): Promise<string> {
        const contract = await this._getContract();
        return contract.symbol();
    }

    public async tokenURI(tokenId: number): Promise<string> {
        const contract = await this._getContract();
        return contract.tokenURI(tokenId);
    }

    public async getApproved(tokenId: number): Promise<string> {
        const contract = await this._getContract();
        return contract.getApproved(tokenId);
    }
}