import Head from 'next/head'
import Login from '../components/Login'
import { createContext, useContext, useEffect, useReducer, useState } from 'react'
import  Main  from '../components/Main'
import AbiJson from '../hardhat/artifacts/abi/Messenger.json'
import Gun from 'gun'
import Web3 from 'web3'
import {addUser} from '../components/web3'
import { EXPORT_MARKER } from 'next/dist/shared/lib/constants'
import PageLoader from 'next/dist/client/page-loader'
// import {init} from '../components/web3'

const gun = Gun({
peers:[
'http://localhost:3031/gun'
]
})
const initialState={
messages:[]
}
function red(state,action){
  return {
      messages:[action,...state.messages]
  }
}

 

const Home = (props) => {
  let dateObj = new Date()
  let date =`${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()} ${dateObj.getUTCHours()+1}:${dateObj.getUTCMinutes()}:${dateObj.getUTCSeconds()}`
const [isLogged,setLogged]=useState(false)
const [form,setForm]=useState({
message:''
})
const [Account,setAccount]=useState('')
const [msgState,dispatch]=useReducer(red,initialState)

async function init(){
    
  let web3 = new Web3(Web3.givenProvider)
  let [account] =await web3.eth.requestAccounts()
  let Instance = new web3.eth.Contract(AbiJson.abi,AbiJson.address)
  let data={
      Instance,
      account
  }
  if(account == ''){
    setLogged(false)
    setAccount('')
  }else{
    setLogged(true)
    setAccount(account)
      }
  console.log(isLogged)
  return data
  }


useEffect(()=>{
  return async()=>{
    try {
      await init()
    const data=gun.get('msg_gun2')
    data.map().on(m=>{
      dispatch({
        message:m.message,
        date:m.date
      })
    })
    }catch(err){

    }
  }
},[])
  function v(e){
    setForm({
      ...form,[e.target.name]:e.target.value
    })
  }
  function save(){
    const data=gun.get('msg_gun2')
    data.set({
      message:form.message,
      date:date
    })
    setForm({
      message:''
    })
  }

  if(!isLogged){
    return(
    <Login login={init}  />
    )
  }
else{
  return (

    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main state={msgState}  val={form.message} change={v} save={save} />
    </>
  )
  
}
}

export default Home



// export async function getStaticProps(){
  
//   let obj 
//   obj= await fetchUsers()
//   obj=JSON.stringify(obj)

//   return {
//     props:{
//       obj
//     },revalidate:10
//   }
// }