import Web3 from "web3";
const contract = require('../../hardhat/artifacts/abi/Messenger.json')
const privateKy = '50978bde1aca7794d38e40b42a752731ecec0d331e12a94a97aacae2a5378ddc'
const INFURA_URL = 'https://goerli.infura.io/v3/011b1e17991746548b8fc0eac345158e'




export const fetchUsers = async (props)=>{
const web3 = new Web3(INFURA_URL)
const myContract = new web3.eth.Contract(
    contract.abi,
    contract.address
)
let users = await myContract.methods.getUsers().call()
return users
}

