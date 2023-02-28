import React from 'react'
import Logo from './logo'

function Navbar() {
  return (
    <>
      <header className="fixed w-full">
        <nav className="justify-between bg-white h-[75px] px-12 flex items-center justify-center">

          {/* Logo */}
          <Logo bgColor="bg-purple-gradient"
                textSize="text-lg"
                textColor="text-white"/>

          {/* No Fees! Just student connections */}
          <div className="bg-light-purple-gradient px-4 py-1 gap-2 flex items-center w-max rounded-[30px]">
            <p className="font-bold">No fees!</p>
            <p>&#x2022;</p>
            <p>Just student connections</p>
          </div>

          {/* about us */}
          <div className='opacity-50'>
            <p>about us</p>
          </div>

        </nav>
        <hr/>
      </header>
    </>
  )
}

export default Navbar
