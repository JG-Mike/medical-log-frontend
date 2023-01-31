import React from 'react'
import '../css/Navbar.css'
import Login from './Login'
import Staff from './Staff'
import Students from './Students'


export default function Navbar() {
  return (
    <div className='navbar'>hello navbar
        < Login/>
        < Students />
        < Staff />
        </div>

  )
}
