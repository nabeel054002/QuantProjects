const {ethers, BigNumber, Contract, utils} = require("ethers");
require('dotenv').config("../.env")
const MUMBAI_PROVIDER=new ethers.providers.JsonRpcProvider(process.env.QUICKNODE_HTTP_URL);
const WALLET_ADDRESS = process.env.WALLET_ADDRESS;
const WALLET_PRIVATE_KEY=process.env.PRIVATE_KEY;
const {nftAddress, nftAbi} = require("./constants/index.js");
const wallet = new ethers.Wallet(WALLET_PRIVATE_KEY);
const connectedWallet = wallet.connect(MUMBAI_PROVIDER);

async function main(){
    const nftContract = new Contract(nftAddress, nftAbi, MUMBAI_PROVIDER);
    const n = parseInt((await nftContract.count()).toString());
    // console.log(n);
    for(let i=0; i<n; i++){
        let j = i.toString();
        let ipfsurl = await nftContract.tokenURI(j);
        // console.log(ipfsurl);
        let response = await fetch(ipfsurl);
        let json = await response.json();
        let attr = json.attributes;
        console.log(attr[attr.length-1].value);
        // let json = await response.json();
        // console.log(json);
    }
}
main();