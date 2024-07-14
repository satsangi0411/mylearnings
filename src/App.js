import React,{useState,useEffect} from 'react'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import { MyProvider } from './context/context_api'
const App = () => {
 
  return (
    <div><Navbar  title ="github Finder"/>
    <MyProvider>
    <Search/>
    <div className='container'><Users/></div>
</MyProvider>
    </div>
  )
}

export default App