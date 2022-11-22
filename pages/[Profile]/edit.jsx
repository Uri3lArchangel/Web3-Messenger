import { useRouter } from 'next/router'
import React from 'react'
import ProfileLayout from '../../components/ProfileLayout'
import SideNav from '../../components/SideNav'

function Edit() {
    const router = useRouter()
    function cancel(e){
        e.preventDefault()
        router.push('/Profile')
    }
  return (
    <div>
        <SideNav />
        <ProfileLayout />
            <form action="" className='absolute editProfile_form space-y-6 bg-white/10 py-14'>
                <input type="text" placeholder='Name' className='border-2 bg-white/20 border-cyan-400/20 text-cyan-400 text-xl mx-auto block' />
                <textarea rows='10' cols='45' type="text" placeholder='description' className='border-2 bg-white/20 text-xl text-cyan-400 border-cyan-400/20 mx-auto block' />
                <button className='bg-cyan-400 px-7 py-3 rounded-full text-white block mx-auto font-semibold border-2 border-cyan-400 hover:bg-white hover:text-cyan-400'>Save Changes</button>
                <button onClick={cancel} className='bg-white px-7 py-3 rounded-full text-cyan-400 block mx-auto border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold'>Cancel</button>
            </form>
        
    </div>
  )
}

export default Edit