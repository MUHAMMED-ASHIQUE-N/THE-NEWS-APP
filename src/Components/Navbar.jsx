import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='w-full py-4 border-b border-gray-500 dark:border-gray-500 text-white bg-gray-900'>
      <div className='mx-auto w-[80%] flex items-center justify-between dark:text-white'>
        
        <div className='md:hidden'>
          <button onClick={toggleMobileMenu} className='text-white'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>

        <h1 className='text-xl flex-1 text-center md:text-left'>
          <span className='italic'>The</span> <span className='italic'>World</span>{' '}
          <span className='font-semibold'>Express</span>
        </h1>

        <div className='hidden md:flex md:flex items-center flex-1 justify-center gap-4'>
          <Link to={'/'} className='font-semibold hover:text-indigo-500'>
            Home
          </Link>
          <Link to={'/saved-news'} className='font-semibold hover:text-indigo-500'>
            Saved News
          </Link>
        </div>

        <div className='md:block'>
          <ThemeToggle />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className='md:hidden'>
          <div className='flex flex-col items-start ml-4'>
            <Link
              to={'/'}
              className='block py-2 px-4 text-center font-semibold hover:text-indigo-500'
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to={'/saved-news'}
              className='block py-2 px-4 text-center font-semibold hover:text-indigo-500'
              onClick={toggleMobileMenu}
            >
              Saved News
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
