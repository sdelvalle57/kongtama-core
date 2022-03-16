// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Context.sol";

import "./Ownable.sol";

contract OwnableDelegateProxy {}

/**
 * Used to delegate ownership of a contract to another address, to save on unneeded transactions to approve contract use for users
 */
contract ProxyRegistry {
    mapping(address => OwnableDelegateProxy) public proxies;
}

contract Kongtama is Ownable, ERC721 {
    using Strings for uint256;

    address private _proxyRegistryAddress;

    uint256 private _price;
    uint256 private _maxMint;
    uint256 private _maxMintPerWallet = 10;

    string private _baseMetadataURI;
    mapping(address => uint8) public mintsPerWallet;

    constructor(
        address owner, 
        address proxyRegistryAddress, 
        uint256 price, 
        uint256 maxMint,
        string memory baseMetadataURI
    ) ERC721("Kongtama", "Kong") Ownable(owner) {
        _price = price;
        _maxMint = maxMint;
        _proxyRegistryAddress = proxyRegistryAddress;
        _baseMetadataURI = baseMetadataURI;
    }

    /***********************************|
    |        Ownable Functions          |
    |__________________________________*/

    function setPrice(uint256 newPrice) public onlyOwner {
        _price = newPrice;
    }

    function setMaxMint(uint256 newMaxMint) public onlyOwner {
        _maxMint = newMaxMint;
    }

    function setMaxMintPerWallet(uint256 newMaxMintPerWallet) public onlyOwner {
        _maxMintPerWallet = newMaxMintPerWallet;
    }

    function setProxyRegistryAddress(address newProxyRegistryAddress) public onlyOwner {
        _proxyRegistryAddress = newProxyRegistryAddress;
    }

    function setBaseMetadataURI(string memory _newBaseMetadataURI) public onlyOwner {
        _baseMetadataURI = _newBaseMetadataURI;
    }


    function mint(address to, uint256 tokenId) public payable {
        require(tokenId <= _maxMint, "TokenId is greater than maxMint");

        address owner = owner();
        address sender = _msgSender();
        uint256 tokenPrice = _price;
        uint256 value = msg.value;

        if(sender == owner) {
            _safeMint(to, tokenId);
            return;
        }

        require(value >= tokenPrice, "Wrong value");
        require(mintsPerWallet[sender] < _maxMintPerWallet, "Wallet cant mint more than maxMintPerWallet");

        mintsPerWallet[sender] += 1;
        payable(owner).transfer(value);

        _safeMint(to, tokenId);
    }

    function isApprovedForAll(address owner, address operator)
        override
        public
        view
        returns (bool)
    {
        // Whitelist OpenSea proxy contract for easy trading.
        ProxyRegistry proxyRegistry = ProxyRegistry(_proxyRegistryAddress);
        if (address(proxyRegistry.proxies(owner)) == operator) {
            return true;
        }

        return super.isApprovedForAll(owner, operator);
    }

    function uri(uint256 _id) public view returns (string memory) {
        require(_exists(_id), "ERC721Tradable#uri: NONEXISTENT_TOKEN");
        return bytes(_baseMetadataURI).length > 0 ? string(abi.encodePacked(_baseMetadataURI, _id.toString())) : "";
    }

    function withdraw() public {
        payable(owner()).transfer(address(this).balance);
    }

    function getPrice() public view returns(uint256) {
        return _price;
    }

    function getMaxMint() public view returns(uint256) {
        return _maxMint;
    }

    function getMaxMintperWallet() public view returns(uint256) {
        return _maxMintPerWallet;
    }
}