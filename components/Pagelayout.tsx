import React from 'react'
import Container from './Container'
import {cn} from '@/lib/utils'
import {  motion } from 'motion/react' // Ensure correct import
interface Props{
    children: React.ReactNode
    className?: string
}

const Pagelayout = ({children,className}:Props) => {
  return (
    <Container className={cn("w-full",className)}>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeInOut',delay:2.4 }}
        
        >
            {children}
        </motion.div>


    </Container>
  )
}

export default Pagelayout