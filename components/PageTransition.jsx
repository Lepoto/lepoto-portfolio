"use client";
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'
import { usePathname } from 'next/navigation';
const PageTransition = ({children}) => {
    const pathname = usePathname();

  return (
    <AnimatePresence>
        <div key={pathname}>
            <motion.div
            className='h-full '
            initial ={{opacity: 1}}
            animate= {{opacity:0, transition: {delay: 1, duration: 0.2, ease: "easeInOut"}}}
            >
            {children}
            </motion.div>
        </div>
        
    </AnimatePresence>
  )
}

export default PageTransition