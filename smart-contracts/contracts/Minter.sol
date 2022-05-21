// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

interface IERC721MintableBurnable is IERC721 {
	function safeMint(address, string memory) external;

	function _burn(uint256) external;
}

contract Minter is Ownable {
	uint256 public mintFee;
	uint256 public totalFeesPaid;
	IERC721MintableBurnable public collection;

	error InsufficientFunds();

	constructor(uint256 _mintFee, address _collection) {
		mintFee = _mintFee; // 0.05 klay
		collection = IERC721MintableBurnable(_collection);
	}

	function mintNft(string calldata _uri) public payable {
		if (msg.value < mintFee) revert InsufficientFunds();
		totalFeesPaid += mintFee;
		collection.safeMint(msg.sender, _uri);
	}

	function burnNft(uint256 tokenId) public {
		collection._burn(tokenId);
	}

	function updateMintFee(uint256 _newMintFee) public onlyOwner {
		mintFee = _newMintFee;
	}

	function withdraw(uint256 amount) public onlyOwner {
		require(amount <= totalFeesPaid);
		totalFeesPaid -= amount;
		(bool success, ) = msg.sender.call{ value: amount }("");
		require(success, "failed to widthraw funds");
	}
}
