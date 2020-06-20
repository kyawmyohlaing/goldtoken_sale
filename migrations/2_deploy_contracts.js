var GoldToken = artifacts.require("./GoldToken.sol");
var GoldTokenSale = artifacts.require("./GoldTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(GoldToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(GoldTokenSale, GoldToken.address, tokenPrice);
  });
};