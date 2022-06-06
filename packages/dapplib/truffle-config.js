require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone food tragic release night unknown grunt light army ghost'; 
let testAccounts = [
"0x59f8ca8d61dcb4d1423cd24ab126511dcc637fc53522e208caac1e644bc071c4",
"0x406cda8da477a34a14f5db23828a2a4807c31149b669603bdf44d44020d2e279",
"0x9742feb61bfa274cadb50345386d9df25c523d9f8beb63ad3072c36403555c18",
"0x19db93a967f2d87891b90dd9e7762a0473ec2a4e83c7f53999968ea19d18e448",
"0x7cac8c2821b40ccfa898334bf2783186d79285211a184cd7e53192948d5cce95",
"0x9317fb061c8ea4a1820fb85558cce6720b30ad829898a81d86b3af8e00c9619d",
"0x2601411312879c6f8f5af7cb88295c527938ea3ac56d1e333d6ee12c997fdb74",
"0x29fa9f884442794c56011edc2b9289138fd37e3d24c781fc297a2f81f400cec1",
"0x9a5df800fb64a1c90f87a90ba7bad5d9280c38af254e448daa46dbaf14ab7a1e",
"0x8aba3f2e46557b5f5991346438bf3e1febbe022bb20894f978f3ec26329acf20"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

