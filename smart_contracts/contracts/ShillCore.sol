// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import { Token } from "./Token.sol";

contract ShillCore {
  
  struct Reserves {
    uint256 nativeReserve;
    uint256 tokenReserve;
  }
  
  struct Campaign {
    string name;
    string handle;
    Reserves reserves;
  }

  address private owner;

  mapping (Token => Campaign) private campaigns;
  mapping (Token => Reserves) private pendingLiquidity;

  Token[] private tokens;

  mapping (Token => mapping (address => Reserves)) private rewards;

  constructor() {
    owner = msg.sender;
  }

  function createTokenAndStartCampaign(
    string memory name, string memory symbol, uint256 supply, 
    string calldata handle,
    uint256 tokenLiquidity,
    uint256 shillReserve
  ) external payable {
    Token token = new Token(name, symbol, supply);

    tokens.push(token);

    Campaign storage campaign = campaigns[token];
    campaign.name = token.name();
    campaign.handle = handle;
    campaign.reserves.nativeReserve = 0;
    campaign.reserves.tokenReserve = shillReserve;

    Reserves storage liquidity = pendingLiquidity[token];
    liquidity.nativeReserve = msg.value;
    liquidity.tokenReserve = tokenLiquidity;
  }

  function launch(Token token) external {
    // TODO
  }

  function claim(Token token) external {
    Reserves storage reward = rewards[token][msg.sender];
    require(reward.nativeReserve > 0 || reward.tokenReserve > 0, "No rewards to claim");

    payable(msg.sender).transfer(reward.nativeReserve);
    token.transfer(msg.sender, reward.tokenReserve);

    campaigns[token].reserves.nativeReserve -= reward.nativeReserve;
    campaigns[token].reserves.tokenReserve -= reward.tokenReserve;

    reward.nativeReserve = 0;
    reward.tokenReserve = 0;
  }

  struct EpochResults {
    Token token;
    address[] shillers;
    Reserves[] rewards;
  }
  function closeEpoch(EpochResults[] calldata results) external {
    require(msg.sender == owner, "Only the owner can close an epoch");

    for (uint256 i = 0; i < results.length; i++) {
      Token token = results[i].token;
      
      for (uint256 j = 0; j < results[i].shillers.length; j++) {
        address shiller = results[i].shillers[j];
        rewards[token][shiller] = results[i].rewards[j];
      }
    }
  }

  function getCampaigns() external view returns (Campaign[] memory) {
    Campaign[] memory _campaigns = new Campaign[](tokens.length);
    for (uint256 i = 0; i < tokens.length; i++) {
      _campaigns[i] = campaigns[tokens[i]];
    }
    return _campaigns;
  }

  function claimable(Token token) external view returns (Reserves memory) {
    return rewards[token][msg.sender];
  }

}
