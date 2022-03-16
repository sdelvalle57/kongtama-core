import { ethers, Signer } from "ethers";

export const sendEther = async (signer: Signer, to: string): Promise<ethers.providers.TransactionResponse> => {
    return signer.sendTransaction({
        to,
        value: ethers.utils.parseEther("1.0")
    });
}