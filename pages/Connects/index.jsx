import React, { useEffect } from 'react'
import Connects from '../../components/connects/Connects'
import { fetchUsers } from '../../components/Backend/Web3INit'

function index(props) {
 
 let users = JSON.parse(props.obj)
  return (
    <div >
        <Connects users={users} />
    </div>
  )
  
}

export default index


export async function getStaticProps(){
  
  let obj 
  obj= await fetchUsers()
  obj=JSON.stringify(obj)

  return {
    props:{
      obj
    },revalidate:10
  }
}