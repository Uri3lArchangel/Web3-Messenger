import { useState } from "react";
import Web3 from "web3";
import AbiJson from '../hardhat/artifacts/abi/Messenger.json'

export async function init(){
    
  let web3 = new Web3(Web3.givenProvider)
  let [account] =await web3.eth.requestAccounts()
  let Instance = new web3.eth.Contract(AbiJson.abi,AbiJson.address)
  let data={
      Instance,
      account
  }
 
  return data
  }


  export async function addUser(){
    let Inst = (await init()).Instance
    let acc= (await init()).account
    await Inst.methods.addUsers().send({from:acc})
  }
  