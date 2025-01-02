import React from 'react'
import { motion } from 'motion/react'
import { Check } from 'lucide-react'
const SuccessMsg = ({status}:{status:string}) => {
  return (
    <motion.div
    initial={{ opacity: 0,y:40 }}
    animate={{ opacity: 1,y:0 }}
    transition={{ duration: 0.5,delay: 1}}
    
    className='flex flex-col items-center justify-center gap-3 py-6'
    
    >
        
        <div className='border-2 border-lightsky w-20 h-20 rounded-full flex items-center justify-center text-lightsky bg-lightsky/10'>
            <Check className='w-10 h-10'/>
        </div>
        <h2 className='text-4xl loading-none font-extrabold text-transparent text-outline'> Thank You!</h2>
        <p >{status}</p>
    </motion.div>
  )
}

export default SuccessMsg