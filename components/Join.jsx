import React from 'react'
import {InformationCircleIcon} from '@heroicons/react/24/outline'

function Join() {
  return (
    <>
    <div className='main2 absolute bg-black w-full '>
    </div>
    <div className='p-5 space-y-2 text-center absolute inner-main2'>
      <InformationCircleIcon className='w-16 mx-auto text-red-500' />
    <h1 className='text-2xl text-red-600  font-bold'>Join D-Messenger in order to use chat functionality</h1>
    <p>Once you join your address will be available in the connect for others to chat with you</p>
    <button className='bg-cyan-500 px-6 py-2 rounded-full text-white text-xl border-2 border-cyan-500 hover:bg-white hover:text-cyan-500'>Join</button>
    <p>joining will register your address on the blockchain to be accessible to others
    <br /><strong className='text-red-500'>This will require gas fee</strong></p>
    </div>
    </>
  )
}

export default Join