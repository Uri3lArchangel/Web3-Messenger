import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import { useEffect, useState } from 'react'
import Web3 from 'web3'
import  Main  from '../components/Main'

const Home = (props) => {
 const [isLoggedin,setLoggedin]=useState(false)
 const [logged,setLogged] = useState(false)

 useEffect(()=>{
  init()

 },[])

async function init(){
  if(window.web3){
    const web3 = new Web3(Web3.givenProvider)
    console.log(web3.currentProvider)
    await web3.eth.requestAccounts()
    const [accounts] = await web3.eth.getAccounts() 
    console.log(accounts)
    if(accounts != undefined || accounts == '' || accounts == []){
      setLoggedin(true)
      setLogged(true)
    }else if(window.ethereum){
      let web3 = window.ethereum.enable()
    }
    
    }else{
      alert('Metamask not found! please install Metamask')
    } 
}

useEffect( () => {
  
}, [])


  if(!isLoggedin){
    return(
    <Login login={init} />
    )
  }

  return (

    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  )
}

export default Home

