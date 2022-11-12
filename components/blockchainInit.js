import { ethers } from 'ethers'
import React from 'react'
import Web3 from 'web3'


async function blockchainInit() {

if(window.web3){
const web3 = new Web3(Web3.givenProvider)
const [accounts] = await web3.eth.getAccounts() 

} else if(window.ethereum){
    await window.ethereum.enable()
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const signerAddress = await signer.getAddress()
}
}

export default blockchainInit