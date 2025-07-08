import Image from 'next/image'
import React from 'react'
import logo from '@/images/logo.png'

const Header = () => {
  return (
    <header className='w-full bg-gray-200'>
    <div className='max-w-screen-x1 mx-auto px-4'>
    <Image
    src={logo}
    alt='logo' 
    />
   {/*input*/}
   {/*tabs*/}
    </div>
    </header>
  )
}

export default Header
