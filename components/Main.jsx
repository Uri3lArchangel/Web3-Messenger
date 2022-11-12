import React from 'react'
import SideNav from './SideNav'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

function Main() {
  return (
    <div className='main absolute bg-black h-full w-full '>
        <SideNav />
    </div>
  )
}

export default Main