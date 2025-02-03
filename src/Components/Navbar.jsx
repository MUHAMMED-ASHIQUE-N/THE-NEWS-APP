import React from 'react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <div className='w-full py-4 border-b border-gray-200 dark:border-gray-500 dark:bg-gray-900'>
      <div className='mx-auto w-[80%] flex items-center justify-between  dark:text-white'>
        <h1 className='text-xl'><span className='italic'>The</span> <span className='italic'>World</span> <span className='font-semibold'>Express</span> </h1>

        <div className='flex items-center gap-4'>
            <h1>Home</h1>
            <h1>Saved News</h1>
        </div>

        <div>
            <ThemeToggle/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
