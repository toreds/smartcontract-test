export default {
  "contract_name": "IOwnThis",
  "abi": [
    { 
      "constant": false,
      "inputs": [
        {
          "name": "claim",
          "type": "bytes32"
        }
      ],
      "name": "createClaim",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "claim",
          "type": "bytes32"
        }
      ],
      "name": "claimOwnership",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "claim",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "NewClaim",
      "type": "event"
    }
  ],
  "unlinked_binary": "0x6060604052341561000f57600080fd5b5b61018e8061001f6000396000f300606060405263ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166316539c748114610048578063b367c65714610060575b600080fd5b341561005357600080fd5b61005e60043561008a565b005b341561006b57600080fd5b610076600435610131565b604051901515815260200160405180910390f35b60008181526020819052604090205473ffffffffffffffffffffffffffffffffffffffff16156100b957600080fd5b60008181526020819052604090819020805473ffffffffffffffffffffffffffffffffffffffff19163373ffffffffffffffffffffffffffffffffffffffff169081179091559082907fb792fb68997af91c701374c77fe18ee46a0a39ac2fbffb2e984ad30e0b220d68905160405180910390a35b50565b6000818152602081905260409020543373ffffffffffffffffffffffffffffffffffffffff9081169116145b9190505600a165627a7a723058202d93ad8623861e74bdc44551e853a2aad95505f760c221f9f7e3604df90dc3d10029",
  "networks": {},
  "schema_version": "0.0.5",
  "updated_at": 1507990824672
};