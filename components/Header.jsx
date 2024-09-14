import Link from 'next/link'
import React from 'react'
import NavBar from './NavBar'
import { Button } from './ui/button'
import { FiMenu } from 'react-icons/fi'

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
        <div className='container mx-auto flex justify-between items-center'>
         {/* Logo*/}
            <Link href="/">
                <h1 className='text-3xl font-semibold'>L A <span className='text-accent'>Masekwameng.</span></h1>
            </Link>

            {/* Desktop nav */}
            <div className='hidden xl:flex items-center gap-8'>
                <NavBar />

                <Link href="/contact">
                    <Button>Hire Me</Button>
                </Link>
            </div>

             {/* Mobile nav */}
             <div className='xl:hidden'>
                <FiMenu className='text-accent text-2xl'/>
             </div>

        </div>
    </header>
  )
}

export default Header
