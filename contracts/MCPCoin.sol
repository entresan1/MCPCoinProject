// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MCPCoin is ERC20, Ownable {
    struct ContextPackage {
        string name;
        string description;
        string ipfsHash;
        uint256 price;
        address creator;
        bool isActive;
    }

    mapping(uint256 => ContextPackage) public contextPackages;
    uint256 public contextPackageCount;

    event ContextPackageCreated(uint256 indexed id, string name, address creator);
    event ContextPackagePurchased(uint256 indexed id, address buyer, uint256 price);

    constructor() ERC20("MCP Coin", "MCP") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function createContextPackage(
        string memory _name,
        string memory _description,
        string memory _ipfsHash,
        uint256 _price
    ) public returns (uint256) {
        require(_price > 0, "Price must be greater than 0");
        
        uint256 packageId = contextPackageCount++;
        contextPackages[packageId] = ContextPackage({
            name: _name,
            description: _description,
            ipfsHash: _ipfsHash,
            price: _price,
            creator: msg.sender,
            isActive: true
        });

        emit ContextPackageCreated(packageId, _name, msg.sender);
        return packageId;
    }

    function purchaseContextPackage(uint256 _packageId) public {
        ContextPackage storage package = contextPackages[_packageId];
        require(package.isActive, "Package is not active");
        require(balanceOf(msg.sender) >= package.price, "Insufficient balance");

        _transfer(msg.sender, package.creator, package.price);
        emit ContextPackagePurchased(_packageId, msg.sender, package.price);
    }

    function getContextPackage(uint256 _packageId) public view returns (
        string memory name,
        string memory description,
        string memory ipfsHash,
        uint256 price,
        address creator,
        bool isActive
    ) {
        ContextPackage storage package = contextPackages[_packageId];
        return (
            package.name,
            package.description,
            package.ipfsHash,
            package.price,
            package.creator,
            package.isActive
        );
    }
} 