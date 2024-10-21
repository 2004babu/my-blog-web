import React from 'react'
import {Link} from 'react-router-dom'
// import 
const Header = () => {
  return (
    <header className='container-fluid p-4 w-screen h-20 dark:bg-white dark:text-black bg-balck/[.05] '>
      <div className="flex flex-row justify-between items-center">
      <Link to={'/'} className='p-2'> My Wepsite </Link>
        <nav className='flex flex-row gap-4  justify-between p-4 min-h-12'>
            <Link to="/" className='text-blue-600 hover:text-blue-300  min-w-16 p-2'>Home</Link>
            <Link to="/about" className='text-blue-600 hover:text-blue-300  min-w-16 p-2'>About</Link>
            <Link to="/contact" className='text-blue-600 hover:text-blue-300  min-w-16 p-2'>Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
