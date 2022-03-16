/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IERC721Interface extends ethers.utils.Interface {
  functions: {
    "supportsInterface(bytes4)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class IERC721 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IERC721Interface;

  functions: {
    /**
     * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
     */
    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Returns the number of tokens in ``owner``'s account.
     */
    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    /**
     * Returns the number of tokens in ``owner``'s account.
     */
    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    /**
     * Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.
     */
    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { owner: string }>;

    /**
     * Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.
     */
    "ownerOf(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { owner: string }>;

    /**
     * Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.
     */
    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.
     */
    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.
     */
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.
     */
    "approve(address,uint256)"(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.
     */
    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { operator: string }>;

    /**
     * Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.
     */
    "getApproved(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { operator: string }>;

    /**
     * Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.
     */
    setApprovalForAll(
      operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.
     */
    "setApprovalForAll(address,bool)"(
      operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}
     */
    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}
     */
    "isApprovedForAll(address,address)"(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.
     */
    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.
     */
    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  /**
   * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
   */
  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
   */
  "supportsInterface(bytes4)"(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Returns the number of tokens in ``owner``'s account.
   */
  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Returns the number of tokens in ``owner``'s account.
   */
  "balanceOf(address)"(
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.
   */
  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.
   */
  "ownerOf(uint256)"(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.
   */
  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.
   */
  "transferFrom(address,address,uint256)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.
   */
  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.
   */
  "approve(address,uint256)"(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.
   */
  getApproved(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.
   */
  "getApproved(uint256)"(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.
   */
  setApprovalForAll(
    operator: string,
    _approved: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.
   */
  "setApprovalForAll(address,bool)"(
    operator: string,
    _approved: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}
   */
  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}
   */
  "isApprovedForAll(address,address)"(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.
   */
  "safeTransferFrom(address,address,uint256)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.
   */
  "safeTransferFrom(address,address,uint256,bytes)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
     */
    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Returns the number of tokens in ``owner``'s account.
     */
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the number of tokens in ``owner``'s account.
     */
    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.
     */
    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.
     */
    "ownerOf(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.
     */
    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.
     */
    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.
     */
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.
     */
    "approve(address,uint256)"(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.
     */
    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.
     */
    "getApproved(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.
     */
    setApprovalForAll(
      operator: string,
      _approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.
     */
    "setApprovalForAll(address,bool)"(
      operator: string,
      _approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}
     */
    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}
     */
    "isApprovedForAll(address,address)"(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.
     */
    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.
     */
    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Approval(
      owner: string | null,
      approved: string | null,
      tokenId: BigNumberish | null
    ): EventFilter;

    ApprovalForAll(
      owner: string | null,
      operator: string | null,
      approved: null
    ): EventFilter;

    Transfer(
      from: string | null,
      to: string | null,
      tokenId: BigNumberish | null
    ): EventFilter;
  };

  estimateGas: {
    /**
     * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
     */
    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the number of tokens in ``owner``'s account.
     */
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the number of tokens in ``owner``'s account.
     */
    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.
     */
    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.
     */
    "ownerOf(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.
     */
    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.
     */
    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.
     */
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.
     */
    "approve(address,uint256)"(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.
     */
    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.
     */
    "getApproved(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.
     */
    setApprovalForAll(
      operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.
     */
    "setApprovalForAll(address,bool)"(
      operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}
     */
    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}
     */
    "isApprovedForAll(address,address)"(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.
     */
    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.
     */
    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
     */
    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the number of tokens in ``owner``'s account.
     */
    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the number of tokens in ``owner``'s account.
     */
    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.
     */
    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.
     */
    "ownerOf(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.
     */
    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.
     */
    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.
     */
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.
     */
    "approve(address,uint256)"(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.
     */
    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.
     */
    "getApproved(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.
     */
    setApprovalForAll(
      operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.
     */
    "setApprovalForAll(address,bool)"(
      operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}
     */
    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}
     */
    "isApprovedForAll(address,address)"(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.
     */
    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.
     */
    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
