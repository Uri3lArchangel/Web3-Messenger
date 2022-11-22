import React from 'react'
import Image from 'next/image'
import img from '../imgs/avatar.svg'

function Cards(props) {
  return (
    <div className='text-white text-center  bg-black/80 my-6 pb-5 border-2 border-yellow-500 profile_card'>
    <Image src={img} layout='intrinsic' />
    <h3 className='my-2'>Name</h3>
    <p className='my-2'>{props.address}</p>
    <p className='my-2'>description</p>
    <button className=' border-2 hover:bg-yellow-500 hover:text-white border-yellow-500 text-xl text-yellow-500 rounded-full px-6 py-2'>Chat</button>
  </div>
  )
}

export default Cards