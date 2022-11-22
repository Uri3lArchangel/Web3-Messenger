import React from 'react'
import {FaceSmileIcon,ArrowRightCircleIcon} from '@heroicons/react/24/solid'

function Layout(props) {
  return (
    <div>

    <div className='main text-white absolute bg-black overflow-scroll w-full '>
      
        { props.state.messages.map(message=>(
            <div className={'bg-blue-400'} key={message.date}> 
              <h2>{message.message}</h2>
              <p>Date: {message.date}</p>
            </div>
          )
        )
        }
    </div>
    <div className= ' chatinput_div absolute justify-around flex bottom-0 bg-black w-full py-5'>
    <FaceSmileIcon className=' hover:text-yellow-400 cursor-pointer text-gray-400 w-10' />
      <textarea name='message' value={props.val} onChange={props.change} rows={2} type="text" className='px-5 text-xl chat_input ' />
    <ArrowRightCircleIcon onClick={props.save} className='text-gray-400 w-10 hover:text-green-400 cursor-pointer' />
    </div> 
    
    </div>
  )
}

export default Layout