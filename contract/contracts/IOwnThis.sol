pragma solidity ^0.4.6;

contract IOwnThis {

    mapping (bytes32 => address) claims;

    event NewClaim(bytes32 indexed claim, address indexed owner);

    function createClaim(bytes32 claim) returns(bool) {
        if (claims[claim] != address(0)) {
             return false;
        }
        claims[claim] = msg.sender;
        NewClaim(claim, msg.sender);
        return true;
    }

    function ownsClaim(bytes32 claim) returns (bool) {
        return claims[claim] == msg.sender;
    }
}