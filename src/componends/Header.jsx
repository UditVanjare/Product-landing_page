import React from 'react'

function Header() {
  return (
    <div>
        <div className='px-10 h-17 bg-red-400 flex w-screen items-center justify-between' >
        <img className='h-15 w-26'src='/assets/NikeLogo.png' alt='logo'/>
        <ul className='flex gap-10'>
          <li>Menu</li>
          <li>Location</li>
          <li>About </li>
          <li>Contact</li>
        </ul>
 
        <button className='bg-orange-400 px-6 py-3 rounded-2xl'>
          Login
        </button>
      </div>
    </div>
  )
}

export default Header