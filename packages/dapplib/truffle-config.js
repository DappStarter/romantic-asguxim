require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remain common guess profit bottom survey'; 
let testAccounts = [
"0x6bf8b54655a643dd5cdbafe7653f660fe3fd3628c69f364b7e702a1457057fc6",
"0xcc71545a9d75475c2aa91114933757adb5b387b4520225737db7fdd1c6031eec",
"0xd3bf579099176fc05417114139aeb819a9beb4a7b1f33ea1337a765e95c83490",
"0x465574bc61e51a62683a46c0b5cf4a284117cd7fab9ec8e4ebf9cad6ad49f9a5",
"0xb3ccb256fd1680a2637307240ec2563aa9a5f38f78b43dd274524ecc743fb9bf",
"0x8786fe7660c0521de4a9a344f0850a7d92bd5bc9c102ac0dba06918ca7914e7b",
"0x574f0b6876bf63739c7a9752d5766e025167005dfc3c33bf81495ce097899e0b",
"0xd452804b76aa4b97d08590c2f21566a5a4c2b8709762736c82a59120cea5231f",
"0x08b7253e63a58412ab697e08fb201e65eb1cdd9e879d789614e2bd0a62db3d06",
"0x8d9ae11a2f8448abcebddefd796dd049f8338b118ddd02a7c9741a23c4ebb509"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
