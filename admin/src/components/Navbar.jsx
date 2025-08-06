import React from 'react'
import {assets} from '../admin_assets/assets.js'
const Navbar = ({setToken}) => {
  return (
    <div className='flex justify-between items-center px-[4%] py-2'>
      <img src={assets.logo} alt="Logo" className='w-[max(10%,80px)]'/>
      <button onClick={() => setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
