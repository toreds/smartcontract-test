var IOwnThis = artifacts.require("./IOwnThis.sol");

contract('IownThis', function(accounts) {

    var tore = accounts[0];
    var guybrush = accounts[1];

    it("should add claims not already added", function() {
        var iownthis;
        return IOwnThis.deployed().then(function(instance){
            iownthis = instance;
            return iownthis.createClaim("Xbox One", {from: tore});
        }).then(function(){
            return iownthis.createClaim("Xbox One", {from: guybrush});
        }).then(function(){
            return iownthis.createClaim("monkey island", {from: guybrush});
        }).then(function() {
            return iownthis.ownsClaim.call("Xbox One", {from: tore });
        }).then(function (res) {
            assert.isOk(res.valueOf(), "tore should own Xbox One");
        }).then(function() {
            return iownthis.ownsClaim.call("Xbox One", {from: guybrush });
        }).then(function (res) {
            assert.isNotOk(res.valueOf(), "guybrush should not own Xbox One");
        }).then(function() {
            return iownthis.ownsClaim.call("monkey island", {from: guybrush });
        }).then(function (res) {
            assert.isOk(res.valueOf(), "guybrush should own monkey island");
        });
    });
});
