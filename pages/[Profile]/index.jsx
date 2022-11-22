import Image from 'next/image'
import React from 'react'
import SideNav from '../../components/SideNav'
import img from '../../components/imgs/avatar.svg'
import ProfileLayout from '../../components/ProfileLayout'
import Link from 'next/link'


function Profile() {
  return (
    <div>
        <SideNav />
        <ProfileLayout />
            <div className='w-fit mx-auto space-x-8 relative bg-black/30 py-20 px-20 mt-20 space-y-4 profile_Container ' >
            <Image className='block mx-auto' src={img} layout='intrinsic' />
            <h2 className='text-white text-center text-xl'>Name:<font>myName</font></h2>
            <h2 className='text-white text-center text-xl'>Address:<font>myAddress</font></h2>
            <h2 className='text-white text-center text-xl'>Description:<font>myDescription</font></h2>
            <Link href='/Profile/edit'><button className='text-white border-2 border-red-600 px-5 py-2 rounded-full hover:bg-red-600 text-xl'>Edit Profile</button> </Link>
            <button className='text-white border-2 border-red-600 px-5 py-2 rounded-full hover:bg-red-600 text-xl'>Delete this account</button>
            </div>
   </div>
  )
}

export default Profile