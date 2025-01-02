
import React from 'react';
import {  motion } from 'motion/react'; // Correct import



const Stairs = () => {
    const stairAnimation = {
        initial: {
          top:"0",
        },
        animate: {
            top:"100%",
        },
        exit:{
            top:["100%","0%"],
        },
    };
    const reverseIndex=(index:number)=>{
        const totalSteps=7;
        return totalSteps-index-1;
    }
  return (
    <>
    {[...Array(7  )].map((_,index)=>(
        <motion.div
        key={index}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={stairAnimation}
        transition={{duration:0.4,ease:"easeInOut",delay:reverseIndex(index)*0.1}}
        className='w-full h-full bg-white relative '
        />
    ))}
    </>
  )
}

export default Stairs

// import React from 'react';
// import { motion } from 'motion/react';

// const Stairs = () => {
//   const stairAnimation = {
//     initial: {
//       top: '0',
//     },
//     animate: {
//       top: '100%',
//     },
//     exit: {
//       top: ['100%', '0%'],
//     },
//   };

//   const reverseIndex = (index: number) => {
//     const totalSteps = 6;
//     return totalSteps - index - 1;
//   };

//   return (
//     <>
//       {[...Array(6)].map((_, index) => (
//         <motion.div
//           key={index}
//           initial="initial"
//           animate="animate"
//           exit="exit"
//           variants={stairAnimation}
//           transition={{
//             duration: 0.4,
//             ease: 'easeInOut',
//             delay: reverseIndex(index) * 0.1,
//           }}
//           className="w-full h-full bg-white relative"
//         />
//       ))}
//     </>
//   );
// };

// export default Stairs;
