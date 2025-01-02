// 'use client';
// import React from 'react';
// import Pagelayout from '@/components/Pagelayout';
// import {Badge} from '../../components/ui/badge';
// import { Briefcase, GraduationCap, Code2, User } from 'lucide-react';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
// import { motion } from 'motion/react'
// import { Calendar } from 'lucide-react';

// const tabMenu = [
//   { title: 'Experience', value: 'experience', icon: <Briefcase className="w-5 h-5" /> },
//   { title: 'Education', value: 'education', icon: <GraduationCap className="w-5 h-5" /> },
//   { title: 'Skills', value: 'skills', icon: <Code2 className="w-5 h-5" /> },
//   { title: 'About me', value: 'about', icon: <User className="w-5 h-5" /> },
// ];

// const tabscontent={
//   experience:{
//     title:' Professional Experience',
//     items:[
//       {
//       role:'Senior FroentendDeveloper',
//         company:'ABC Corp.',
//         period:'2020-Present',
//         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sollicitudin metus, non lobortis ex. Nullam vel justo at lectus pharetra consequat. Sed sagittis, felis non facilisis bibendum, justo nisi faucibus turpis, a pulvinar velit ex vel justo.',
//         higlights:["React.js","Next.js","Team LeaderShip"],
//       },
//       {
//         role:'Full stack Developer',
//         company:'XYZ Corp.',
//         period:'2018-2020',
//         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sollicitudin metus, non lobortis ex. Nullam vel justo at lectus pharetra consequat. Sed sagittis, felis non facilisis bibendum, justo nisi faucibus turpis, a pulvinar velit ex vel justo.',
//         higlights:["React.js","Node.js","AWS","Team LeaderShip"],
//       },
//     ],
//   },
//   education:{
//     title:'Education Background',
//     items:[
//       {
//         Class:'Interemediate',
//         major:'Computer Science',
//         college:'XYZ University',
//         description:"Background in Computer Science Background in Computer Science Background in Computer Science",
//         duration:'2020-2022',
//         achievements:['Academic Excellence Award','Best Student of the year'],
//       },
//       {
//         Class:'Interemediate',
//         major:'Computer Science',
//         college:'XYZ University',
//         duration:'2020-2022',
//         description:"Background in Computer Science Background in Computer Science Background in Computer Science",
//         achievements:['Academic Excellence Award','programming Club Leader','Computer Science'],

//       },
//     ],
//   },
//   skills:{
//     title:' Technical Skills',
//    categories:[
//       {
//         name:'Frontend Devolper',
//         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sollicitudin metus, non lobortis ex. Nullam vel justo at lectus pharetra consequat. Sed sagittis, felis non facilisis bibendum, justo nisi faucibus turpis, a pulvinar velit ex vel justo.",
//         skills:[
//           "React.js",
//           "Next.js",
//           "Tailwind CSS",
//          "Farmer motion",
//           "Chakra UI",
//           "Material UI",
//           "Bootstrap",
          

//         ]
//       },
//       {
//         name:'Backend Devolper',
//         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sollicitudin metus, non lobortis ex. Nullam vel justo at lectus pharetra consequat. Sed sagittis, felis non facilisis bibendum, justo nisi faucibus turpis, a pulvinar velit ex vel justo.",
//         skills:[
//           "Node.js",
//           "Express.js",
//           "MongoDB",
//           "AWS",
          
         
//         ]
//       },
//       {
//         name:"Tools & Others",
//         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sollicitudin metus, non lobortis ex. Nullam vel justo at lectus pharetra consequat. Sed sagittis, felis non facilisis bibendum, justo nisi faucibus turpis, a pulvinar velit ex vel justo.",
//         skills:[
//           "Git",
//           "Github",
//           "VS Code",
//           "AWS",
//         ]
//       },
     
//     ],  
//   },
//   about:{
//     title:"About Me",
//     bio:" awesome developer with 5 years of experience in web development. I have worked with many clients and companies and have delivered quality work. I am a team player and have good communication skills. I am always eager to learn new things and keep myself updated with the latest technologies.",
//     Interests:[
//       "Open source Contributing",
//       "Tech Bloging",
//       "UI/UX Design",
//       "Web design",
//       "Machine Learning",

//     ],
//     language:[
//       "English",
//       "Urdu",
      
//     ]

//   },

// }

// const resume = () => {
//   return (
//     <div className="flex flex-col justify-center py-10">
//       <Pagelayout>
//         <Tabs defaultValue="experience" className="flex flex-col w-full md:flex-row gap-6 md:gap-10 tabs-list  h-full bg-transparent md:w-64  " >
//           <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4">
//             {tabMenu.map((item) => (
//               <TabsTrigger
//                 key={item.value}
//                 value={item.value}
//                 className="flex items-center gap-3 px-4 py-2.5 w-full bg-gray-800 text-white rounded-md text-base font-medium hover:bg-lightsky/50 hover:text-black transition-all duration-200 data-[state=active]:bg-hoverColor data-[state=active]:text-black"
//               >
//                 <div className=' flex items-center gap-1.5 md:w-[50%] md:gap-3'>
// {item?.icon}
//                 {item.title}
//                   </div>
//               </TabsTrigger>
//             ))}
//           </TabsList>
//           <div className='flex-1 min-h-[400px]:'>
//             <TabsContent value='experience'>

//               <motion.h2
//                 initial={{ opacity: 0}}
//                 animate={{ opacity: 1}}
             
//               className='text-2xl font-bold mb-6 text-lightsky'>{tabscontent.experience.title}
//               </motion.h2>
//               <div className='space-y-6 '>
//                 {tabscontent?.experience?.items.map((item, index) => (
//                   <motion.div
//                     initial={{ opacity: 0, y: 20}}
//                     animate={{ opacity: 1, y: 0}}
//                     transition={{ duration: 0.5,delay:index*0.1}}
                  
                  
//                   key={index} className='border rounded-lg border-lightsky/20 p-6'>
//                        <div className='flex items-start justify-between mb-4'>
//                         <div>
//                           <h3 className='text-lg font-semibold'>{item.role}</h3>
//                           <p className='text-muted-foreground'>{item.company}</p>
//                         </div>
//                         <div className='flex'>
//                         <Calendar/>
//                         {item?.period}
//                         </div>
//                        </div>
//                        <p className='mb-4 text-white'>
//                           {item?.description}
//                        </p>
//                         <div className=' flex flex-wrap gap-2'>
//                           {item?.higlights.map((highlight, index)=>(
//                         <Badge
//                         variant="secondary"
                        
//                         key={index}>
//                         {highlight}
//                       </Badge>
                      
//                           ))}
//                           </div>
                      
//                   </motion.div>
//                 ))}
//               </div>

//             </TabsContent>
//             <TabsContent value='education'>

//               <motion.h2
//                 initial={{ opacity: 0}}
//                 animate={{ opacity: 1}}
             
//               className='text-2xl font-bold mb-6 text-lightsky'>{tabscontent.education.title}
//               </motion.h2>
//               <div className='space-y-6 '>
//                 {tabscontent?.education?.items.map((item, index) => (
//                   <motion.div
//                     initial={{ opacity: 0, y: 20}}
//                     animate={{ opacity: 1, y: 0}}
//                     transition={{ duration: 0.5,delay:index*0.1}}
                  
                  
//                   key={index} className='border rounded-lg border-lightsky/20 p-6'>
//                        <div className='flex items-start justify-between mb-4'>
//                         <div>
//                           <h3 className='text-lg font-semibold'>{item.Class}</h3>
//                           <p className='text-muted-foreground'>{item.college}</p>
//                         </div>
//                         <div className='flex'>
//                         <Calendar/>
//                         {item?.duration}
//                         </div>
//                        </div>
//                        <p className='mb-4 text-white'>
//                           {item?.description}
//                        </p>
//                         <div className=' flex flex-wrap gap-2'>
//                           {item?.achievements.map(( achievements, index)=>(
//                         <Badge
//                         variant="secondary"
                        
//                         key={index}>
//                         { achievements}
//                       </Badge>
                      
//                           ))}
//                           </div>
                      
//                   </motion.div>
//                 ))}
//               </div>

//             </TabsContent>
            // <TabsContent value='skills'>

            //   <motion.h2
            //     initial={{ opacity: 0}}
            //     animate={{ opacity: 1}}
             
            //   className='text-2xl font-bold mb-6 text-lightsky'>{tabscontent.skills.title}
            //   </motion.h2>
            //   <div className='space-y-6 '>
            //     {tabscontent?.skills?.categories.map((item, index) => (
            //       <motion.div
            //         initial={{ opacity: 0, y: 20}}
            //         animate={{ opacity: 1, y: 0}}
            //         transition={{ duration: 0.5,delay:index*0.1}}
                  
                  
            //       key={index} className='border rounded-lg border-lightsky/20 p-6'>
            //            <div className='flex items-start justify-between mb-4'>
            //             <div>
            //               <h3 className='text-lg font-semibold'>{item.name}</h3>
            //               <p className='text-muted-foreground'>{item.description}</p>
            //             </div>
                        
            //            </div>
                      
            //             <div className=' flex flex-wrap gap-2'>
            //               {item?.skills.map((skills, index)=>(
            //             <Badge
            //             variant="secondary"
                        
            //             key={index}>
            //             {skills}
            //           </Badge>
                      
            //               ))}
            //               </div>
                      
            //       </motion.div>
            //     ))}
            //   </div>

            // </TabsContent>
            
//             <TabsContent value='about'>
//   <motion.h2
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     className='text-2xl font-bold mb-6 text-lightsky'>
//     {tabscontent.about.title}
//   </motion.h2>
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5 }}
//     className='border rounded-lg border-lightsky/20 p-6 space-y-4'>
//     <p className='text-white/90 mb-4'>{tabscontent.about.bio}</p>
//     <h3 className='text-lg font-semibold mb-2'>Interests:</h3>
//                           <div className=' flex flex-wrap gap-2'>
//                             {tabscontent?.about?.Interests.map((interest, index)=>(
//                               <Badge
//                               variant="secondary"
                              
//                               key={index}>
//                               {interest}
//                               </Badge>
//                             ))}
//                           </div>
//                           <div className=''>
//                           <h3 className='text-lg font-semibold mb-2'>Languages:</h3>
//                           <div className=' flex flex-wrap gap-2'>
//                             {tabscontent?.about?.  language.map((language, index)=>(
//                               <Badge
//                               variant="secondary"
                              
//                               key={index}>
//                               {language}
//                               </Badge>
//                             ))}
//                           </div>
//                           </div>
//   </motion.div>
// </TabsContent>

//           </div>
//         </Tabs>
//       </Pagelayout>
//     </div>
//   );
// };

// export default resume;


'use client';
import React from 'react';
import Pagelayout from '@/components/Pagelayout';
import { Badge } from '../../components/ui/badge';
import { Briefcase, GraduationCap, Code2, User } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

const tabMenu = [
  { title: 'Experience', value: 'experience', icon: <Briefcase className="w-5 h-5" /> },
  { title: 'Education', value: 'education', icon: <GraduationCap className="w-5 h-5" /> },
  { title: 'Skills', value: 'skills', icon: <Code2 className="w-5 h-5" /> },
  { title: 'About me', value: 'about', icon: <User className="w-5 h-5" /> },
];

const tabscontent = {
  experience: {
    title: 'Professional Experience',
    items: [
      {
        role: 'Senior Frontend Developer',
        company: 'ABC Corp.',
        period: '2020-Present',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sollicitudin metus, non lobortis ex. Nullam vel justo at lectus pharetra consequat. Sed sagittis, felis non facilisis bibendum, justo nisi faucibus turpis, a pulvinar velit ex vel justo.',
        higlights: ['React.js', 'Next.js', 'Team Leadership'],
      },
      {
        role: 'Full Stack Developer',
        company: 'XYZ Corp.',
        period: '2018-2020',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sollicitudin metus, non lobortis ex. Nullam vel justo at lectus pharetra consequat. Sed sagittis, felis non facilisis bibendum, justo nisi faucibus turpis, a pulvinar velit ex vel justo.',
        higlights: ['React.js', 'Node.js', 'AWS', 'Team Leadership'],
      },
    ],
  },
  education: {
    title: 'Education Background',
    items: [
      {
        Class: 'Intermediate',
        major: 'Computer Science',
        college: 'XYZ University',
        description: 'Background in Computer Science Background in Computer Science Background in Computer Science',
        duration: '2020-2022',
        achievements: ['Academic Excellence Award', 'Best Student of the Year'],
      },
      {
        Class: 'Intermediate',
        major: 'Computer Science',
        college: 'XYZ University',
        duration: '2020-2022',
        description: 'Background in Computer Science Background in Computer Science Background in Computer Science',
        achievements: ['Academic Excellence Award', 'Programming Club Leader', 'Computer Science'],
      },
    ],
  },
  skills: {
    title: 'Technical Skills',
    categories: [
      {
        name: 'Frontend Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sollicitudin metus, non lobortis ex.',
        skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Chakra UI', 'Material UI', 'Bootstrap'],
      },
      {
        name: 'Backend Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sollicitudin metus, non lobortis ex.',
        skills: ['Node.js', 'Express.js', 'MongoDB', 'AWS'],
      },
      {
        name: 'Tools & Others',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sollicitudin metus, non lobortis ex.',
        skills: ['Git', 'GitHub', 'VS Code', 'AWS'],
      },
    ],
  },
  about: {
    title: 'About Me',
    bio: 'Awesome developer with 5 years of experience in web development. I have worked with many clients and companies and have delivered quality work.',
    Interests: ['Open Source Contributing', 'Tech Blogging', 'UI/UX Design', 'Web Design', 'Machine Learning'],
    language: ['English', 'Urdu'],
  },
};

const Resume = () => {
  return (
    <div className="flex flex-col justify-center py-10 bg-gray-900 min-h-screen overflow-x-hidden">
      <Pagelayout>
        <Tabs defaultValue="experience" className="flex flex-col w-full md:flex-row gap-6 md:gap-10">
          <TabsList className="flex flex-wrap gap-2 md:flex-col md:w-64">
            {tabMenu.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="flex items-center gap-3 px-4 py-2.5 w-full bg-gray-800 text-white rounded-md text-base font-medium hover:bg-lightsky/50 hover:text-black transition-all duration-200 data-[state=active]:bg-hoverColor data-[state=active]:text-black"
              >
                <div className="flex items-center gap-1.5 md:gap-3">{item.icon} {item.title}</div>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex-1 min-h-[400px]">
            <TabsContent value="experience">
              <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold mb-6 text-lightsky">
                {tabscontent.experience.title}
              </motion.h2>
              <div className="space-y-6">
                {tabscontent.experience.items.map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="border rounded-lg border-lightsky/20 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{item.role}</h3>
                        <p className="text-muted-foreground">{item.company}</p>
                      </div>
                      <div className="flex">
                        <Calendar />
                        {item.period}
                      </div>
                    </div>
                    <p className="mb-4 text-white">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.higlights.map((highlight, i) => (
                        <Badge key={i} variant="secondary">{highlight}</Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            {/* Repeat other TabsContent sections */}
            <TabsContent value='education'>

       <motion.h2
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
             
              className='text-2xl font-bold mb-6 text-lightsky'>{tabscontent.education.title}
              </motion.h2>
              <div className='space-y-6 '>
                {tabscontent?.education?.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20}}
                    animate={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.5,delay:index*0.1}}
                  
                  
                  key={index} className='border rounded-lg border-lightsky/20 p-6'>
                       <div className='flex items-start justify-between mb-4'>
                        <div>
                          <h3 className='text-lg font-semibold'>{item.Class}</h3>
                          <p className='text-muted-foreground'>{item.college}</p>
                        </div>
                        <div className='flex'>
                        <Calendar/>
                        {item?.duration}
                        </div>
                       </div>
                       <p className='mb-4 text-white'>
                          {item?.description}
                       </p>
                        <div className=' flex flex-wrap gap-2'>
                          {item?.achievements.map(( achievements, index)=>(
                        <Badge
                        variant="secondary"
                        
                        key={index}>
                        { achievements}
                      </Badge>
                      
                          ))}
                          </div>
                      
                  </motion.div>
                ))}
              </div>

            </TabsContent>
            <TabsContent value='skills'>

<motion.h2
  initial={{ opacity: 0}}
  animate={{ opacity: 1}}

className='text-2xl font-bold mb-6 text-lightsky'>{tabscontent.skills.title}
</motion.h2>
<div className='space-y-6 '>
  {tabscontent?.skills?.categories.map((item, index) => (
    <motion.div
      initial={{ opacity: 0, y: 20}}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 0.5,delay:index*0.1}}
    
    
    key={index} className='border rounded-lg border-lightsky/20 p-6'>
         <div className='flex items-start justify-between mb-4'>
          <div>
            <h3 className='text-lg font-semibold'>{item.name}</h3>
            <p className='text-muted-foreground'>{item.description}</p>
          </div>
          
         </div>
        
          <div className=' flex flex-wrap gap-2'>
            {item?.skills.map((skills, index)=>(
          <Badge
          variant="secondary"
          
          key={index}>
          {skills}
        </Badge>
        
            ))}
            </div>
        
    </motion.div>
  ))}
</div>

</TabsContent>
           <TabsContent value='about'>
   <motion.h2
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className='text-2xl font-bold mb-6 text-lightsky'>
    {tabscontent.about.title}
  </motion.h2>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className='border rounded-lg border-lightsky/20 p-6 space-y-4'>
    <p className='text-white/90 mb-4'>{tabscontent.about.bio}</p>
    <h3 className='text-lg font-semibold mb-2'>Interests:</h3>
                          <div className=' flex flex-wrap gap-2'>
                            {tabscontent?.about?.Interests.map((interest, index)=>(
                              <Badge
                              variant="secondary"
                              
                              key={index}>
                              {interest}
                              </Badge>
                            ))}
                          </div>
                          <div className=''>
                          <h3 className='text-lg font-semibold mb-2'>Languages:</h3>
                          <div className=' flex flex-wrap gap-2'>
                            {tabscontent?.about?.  language.map((language, index)=>(
                              <Badge
                              variant="secondary"
                              
                              key={index}>
                              {language}
                              </Badge>
                            ))}
                          </div>
                          </div>
  </motion.div>
</TabsContent>

          </div>
        </Tabs>
      </Pagelayout>
    </div>
  );
};

export default Resume;
