import Image from 'next/image'
import React from 'react'
import img1 from '../components/imgs/avataaars.svg'


function Login(props) {
  return (
    <>
    <div className=' bg-black relative h-screen body-container'>
    </div>
    <div className='py-7  text-white content-container bg-black/80 top-10 w-full'>
      <h1 className='text-center app-name'>D-Messenger</h1>
      <p className='text-center motto'> ...Decentralized networking...</p>
      <button onClick={props.login} className='block mx-auto text-xl connect-btn bg-cyan-500 px-7 py-3 rounded-full my-10'>Connect Wallet</button>
        </div>
    </>
  )
}

export default Login