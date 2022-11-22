import React from 'react'
import { ArrowRightIcon,ChatBubbleLeftIcon,UserGroupIcon,XCircleIcon,UserCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const SideNav = (props)=> {
  // const disconnect = useContext(Context)
  let isHidden = true
  function showNav()
{
  if(isHidden){
  document.getElementById('nav').style.left = `0px`
  document.getElementById('triggerArrow').style.visibility = 'hidden'
  isHidden = false
  }else{
  document.getElementById('nav').style.left = `-3000px`
  document.getElementById('triggerArrow').style.visibility = 'visible'
    isHidden = true

  }
} 
 return (
  <div>
  <ArrowRightIcon id='triggerArrow' onClick={showNav} className='w-7 absolute top-0 left-0 toggleArrow text-black bg-white rounded-r-full hover:text-cyan-700 hover:border-2 border-cyan-600 cursor-pointer' />
    <div id='nav' className='nav'>
      <XCircleIcon onClick={showNav} className='w-6 ml-2 mb-3 hover:text-cyan-400 cursor-pointer cancelBtn ' />
        <ul>
            <Link href='/' ><li className=' cursor-pointer flex justify-between items-center chat px-2 py-2 hover:bg-cyan-700 border-1 border-b-gray-600 border-1 border-gray-600 border-y'><div className='flex items-center active:bg-white'><ChatBubbleLeftIcon className=' w-10' />Chat</div> <div className='bg-red-600 px-2  rounded-full'>1</div></li></Link>
            <Link href='/Connects' ><li className='cursor-pointer flex justify-between items-center chat px-2 py-2 border-1 hover:bg-cyan-700 border-gray-600 border-b'><div className='flex items-center'><UserGroupIcon className=' w-10' />Find Connects</div> </li></Link>
            <Link href='/Profile'><li className='cursor-pointer flex justify-between items-center chat px-2 py-2 border-1 hover:bg-cyan-700 border-gray-600 border-b'><div className='flex items-center'><UserCircleIcon className=' w-10' />Profile</div> </li></Link>

        </ul>
        <button  className='block mx-auto bg-white text-black px-5 py-2 border-2 border-white rounded-full mt-40 hover:bg-transparent hover:text-white '>Sign Out</button>
    </div>
   </div>
  )

}

export default SideNav