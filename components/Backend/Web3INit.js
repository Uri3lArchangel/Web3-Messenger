import Web3 from "web3";
const contract = require('../../hardhat/artifacts/abi/Messenger.json')
const INFURA_URL = process.env.INFURA_URL



export const fetchUsers = async (props)=>{
const web3 = new Web3(INFURA_URL)
const myContract = new web3.eth.Contract(
    contract.abi,
    contract.address
)
let users = await myContract.methods.getUsers().call()
return users
}

