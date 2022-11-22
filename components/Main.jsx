import React from 'react'
import Layout from './layout'
import SideNav from './SideNav'
import Join from '../components/Join'

function Main(props) {
  let isUserAdded = false
if(isUserAdded){
  return (
    <>
  <Layout state={props.state} val={props.val} change={props.change} save={props.save} />
  <SideNav />
    </>
  )

}
else{
  return (
    <>
  <Join />
  <SideNav />
    </>
  )
}
}
export default Main

