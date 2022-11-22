import React from 'react'
import SideNav from '../SideNav'
import Cards from './Cards'

function Connects(props) {
  return (
    <div className='absolute w-full h-full bg-black'>
        <SideNav />
    <div className=' connect_Main bg-blue-600 absolute'>
      <h1 className='text-white text-4xl text-center font-semibold'>Explore, Find and Chat</h1>
      <ul>
       {props.users.map(items=><Cards address={items} />)}
      </ul>

    </div>
</div>
  )
}

export default Connects