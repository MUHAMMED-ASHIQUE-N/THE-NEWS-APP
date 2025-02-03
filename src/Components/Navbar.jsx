import React from 'react'
import ThemeToggle from './ThemeToggle'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full py-4 border-b border-gray-500 dark:border-gray-500 text-white bg-gray-900'>
      <div className='mx-auto w-[80%] flex items-center justify-between  dark:text-white'>
        <h1 className='text-xl'><span className='italic'>The</span> <span className='italic'>World</span> <span className='font-semibold'>Express</span> </h1>

        <div className='flex items-center gap-4'>
            <Link to={'/'} className='font-semibold hover:text-indigo-500'>Home</Link> 
            <Link to={'/saved-news'} className='font-semibold hover:text-indigo-500'>Saved News</Link> 
            
        </div>

        <div>
            <ThemeToggle/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
