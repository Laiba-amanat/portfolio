



"use client";
import { useTypeWriter } from '@/hooks/use type-writer' // Ensure correct import path
import React, { useEffect, useState } from 'react';
import {  motion } from 'motion/react' // Ensure correct import

const HomeDescription = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  // Description text
  const description = "LLorem ipsum dolor sit amet consectetur LLorem ipsum dolor sit amet consecteturLLorem ipsum dolor sit amet consecteturLLorem ipsum dolor sit amet consecteturLLorem ipsum dolor sit amet consecteturLLorem ipsum dolor sit amet consectetur LLorem ipsum ipsum dolor sit amet consectetur LLorem ipsum ipsum dolor sit amet consectetur LLorem ipsum .";

  // Use `displayedText` as per the hook
  const { displayedText = "", isComplete = false } = useTypeWriter(description, 30);

  useEffect(() => {
      setHasLoaded(true);
  }, []);

  return (
      <motion.p
          className="w-auto font-normal leading-6  mb-0 mt-5 min-h-32"
     
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
      >
          {hasLoaded ? (
              // Safely map over `displayedText`
              displayedText.split('').map((char, index) => (
                  <motion.span
                      key={index}
                      initial={{ color: "rgb(156 163 175)" }}
                      animate={{
                          color: isComplete
                              ? "rgb(255 255 255)"
                              : "rgb(156 163 175)",
                      }}
                      transition={{ duration: 0.5, delay: index * 0.03 }}
                  >
                      {char}
                  </motion.span>
              ))
          ) : (
              <span>{description}</span>
          )}
      </motion.p>
  );
};
export default HomeDescription;


// "use client";
// import { useTypeWriter } from '@/hooks/use type-writer'; // Ensure correct import path
// import React, { useEffect, useState } from 'react';
// import { motion } from 'motion/react'; // Ensure correct import

// const HomeDescription = () => {
//   const [hasLoaded, setHasLoaded] = useState(false);

//   // Description text
//   const description = "LLorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veniam placeat doloribus, dicta libero magnam sequi, natus ex iusto excepturi, beatae animi quae. Sit, molestiae. Totam, aliquam explicabo! Aspernatur, quod.";

//   // Use `displayedText` as per the hook
//   const { displayedText = "", isComplete = false } = useTypeWriter(description, 30);

//   useEffect(() => {
//     setHasLoaded(true);
//   }, []);

//   return (
//     <motion.p
//       style={{
//         width: "100%",
//         fontSize: "1rem",
//         fontWeight: "normal",
//         lineHeight: "1.75",
//         textAlign: "center",
//         maxHeight: "140px",
//         overflow: "hidden",
//         margin: "0 auto",
//       }}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5, delay: 1 }}
//     >
//       {hasLoaded ? (
//         displayedText.split("").map((char, index) => (
//           <motion.span
//             key={index}
//             style={{
//               color: isComplete ? "rgb(255, 255, 255)" : "rgb(156, 163, 175)",
//             }}
//             initial={{ color: "rgb(156, 163, 175)" }}
//             animate={{
//               color: isComplete ? "rgb(255, 255, 255)" : "rgb(156, 163, 175)",
//             }}
//             transition={{ duration: 0.5, delay: index * 0.03 }}
//           >
//             {char}
//           </motion.span>
//         ))
//       ) : (
//         <span>{description}</span>
//       )}
//     </motion.p>
//   );
// };
// export default HomeDescription;
