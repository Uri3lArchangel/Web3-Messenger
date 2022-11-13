import Head from 'next/head'
import Login from '../components/Login'
import { createContext, useContext, useEffect, useState } from 'react'
import Web3 from 'web3'
import  Main  from '../components/Main'
import AbiJson from '../hardhat/artifacts/abi/Messenger.json'
import { ethers } from 'ethers'


const Home = (props) => {
 const [isLoggedin,setLoggedin]=useState(false)
 const [logged,setLogged] = useState(false)
 const [getWeb3,setWeb3] = useState(null)
 const [getContractInstance,setContractInstance] = useState()
 const [account,setAccount] = useState('')
 useEffect(()=>{
  init()

 },[])

async function init(){
  
  if(window.web3){
    // const web3 = new Web3(Web3.givenProvider)
    // setWeb3(web3)
    // await web3.eth.requestAccounts()
    // const [accounts] = await web3.eth.getAccounts() 
    // let Instance = new web3.eth.Contract(AbiJson.abi,AbiJson.address)
    // if(accounts != undefined || accounts == '' || accounts == []){
    //   setLoggedin(true)
    //   // setLogged(true) 
    //   setAccount(accounts)
    let provider=new ethers.providers.Web3Provider(Web3.givenProvider)
    let acc= await provider.send('eth_requestAccounts',[])
    const signer = provider.getSigner()
    console.log(acc)
    if(acc.length !=0){
      setLoggedin(true)
    }else{
      setLoggedin(false)
    }

  }
    else if(window.ethereum){
      let web3 = window.ethereum.enable()
    }
    
    else{
      alert('Metamask not found! please install Metamask stay out stevo')
    } 

}



  if(!isLoggedin){
    return(
    <Login login={init} />
    )
  }

  return (

    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main  />
    </>
  )
}

export default Home

export async function getStaticProps(){
  const web3 = new Web3(Web3.givenProvider)
  // const Contract = await ethers.getContractFactory('Messenger')
 
  // console.log(web3)
  return {
    props:{
      // web:JSON.parse(web3)
    }
  }
}