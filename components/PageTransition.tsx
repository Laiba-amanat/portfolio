'use client';
import React from 'react';
import { AnimatePresence, motion } from 'motion/react'; // Correct import
import { usePathname } from 'next/navigation';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const PageTransition = ({ children }: Props) => {
  const pathname = usePathname(); // Correct syntax

  return (
    <AnimatePresence mode="wait"> {/* 'mode="wait"' ensures smooth transitions */}
     <div key={pathname}>
     <motion.div
        
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
       
        transition={{ delay: 1, duration: 0.4, ease: 'easeInOut' }}
        className="h-screen w-screen fixed bg-bodyColor top-0 pointer-events-none"
      >
      </motion.div>
     </div>
      {children}

    </AnimatePresence>

 
  );
};

export default PageTransition;



// const PageTransition = ({ children }: Props) => {
//   const pathname = usePathname(); // Get the current pathname

//   return (
    // <AnimatePresence mode="wait">
    //   {/* This motion.div controls the transition of the page content */}
    //   <motion.div
    //     key={pathname}
    //     initial={{ opacity: 0 }}  // Initial opacity 0 for fade-in effect
    //     animate={{ opacity: 1 }}  // Animate to opacity 1
    //     exit={{ opacity: 0 }}     // Fade out when exiting
    //     transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.4 }} // Set transition delay to make it smooth
    //     className="h-screen w-screen fixed top-0 left-0 bg-bodyColor pointer-events-none"
    //   >
    //     {children}
    //   </motion.div>
    // </AnimatePresence>
//   );
// };

// export default PageTransition;
