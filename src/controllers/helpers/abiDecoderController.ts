import * as artifact from "../../ethereum/abi/IMultisigCall.json"

import { decode, encode } from '../../ethereum/encodeCall';

export interface DecodedParams {
  name: string,
  type: string,
  value: any
}
  
export interface DecodedCall {
  name: string,
  params: Array<DecodedParams>
}

export enum FunctionName {
  addOwner,
  removeOwner,
  replaceOwner, 
  changeRequirement,
  withdraw,
  withdrawETH,

  addLiquidity,
  removeReflectionExcluded,
  addReflectionExcluded,
  addTaxExcluded,
  removeTaxExcluded,
  removeBot,
  claimExcludedReflections,
  setMaxTransfer,
  setSwapFees,
  mint,
  airdrop,
  claimReflection,
  swapAll,
  transfer
}

export class MultisigAbiDecoder {

  public static decodeCall(data: string): DecodedCall | null {
    return decode(artifact, data)
  }

  public static encodeCall(functionName: FunctionName, args?: any[]): string {
    return encode(artifact, FunctionName[functionName], args)
  }

}


  
  