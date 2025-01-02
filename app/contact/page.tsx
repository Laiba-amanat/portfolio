
'use client'
import Contactform from '@/components/Contactform'
import Container from '@/components/Container'
import Pagelayout from '@/components/Pagelayout'
import { Mail, MapPinCheck, Phone} from 'lucide-react'
import React from 'react'


const infoData=[{
  title:'phone',
  description:'+92 3245637307',
  icon:<Phone/>

},
{

title:'Email',
description:'sa0071429@gmail.com',
icon:<Mail/>

},
{

  title:'Address',
  description:'Okara',
  icon:<MapPinCheck/>
  
  },
]
const contact = () => {
  return (
   <Pagelayout>
     <Container className='py-6 md:py flex flex-col md:flex-row gap-6 md:gap-14'>
      
      <div className='w-full md:w-2/3 '> 
      <Contactform/>
      
      
      
      </div>
      <div className='w-full md:w-1/3 flex flex-col justify-center gap-4 md:gap-8 '> 
    {infoData?.map((item)=>(
      <div key={item?.title} className='flex items-center space-x-4'>
        <span className=' bg-lightsky/5 p-4 rounded-md'>
          {item?.icon}
        </span>
        <div>
          <h3 className='text-white/60 text-sm text-semibold'>{item?.title}</h3>
          <p>{item?.description}</p>
        </div>
      </div>
    ))}
      </div>
    </Container>
   </Pagelayout>
  )
} 

export default contact