
'use client'
import React from 'react'
import Pagelayout from '../../components/Pagelayout'

import Title from '@/components/Title'
import { servicesData } from '../../components/Data/index'
import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import Separtator from '@/components/Separtator';



const services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col w-full py-5 md:py-10'>
     
      <Pagelayout>
      <Title> Services I Provide</Title>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12'>
        {servicesData?.map((item)=>(
        <div
        key={item?._id}
        className="flex flex-col p-6 bg-lightsky/5 border border-lightsky/20 hover:border-lightsky/30 rounded-lg shadow-md group hover:shadow-lg gap-2.5 hoverEffect"
      >
        <div className="w-full flex items-center justify-between">
          {/* Default text white and hover outline */}
          <p className="text-5xl font-extrabold text-white group-hover:text-transparent group-hover:text-outline-hover hoverEffect">
            {item?._id}
          </p>
          <Link href={item?.href} target="_blank">
            <ArrowUp className='rotate-45' />
          </Link>
        </div>
        <h2 className='font-semibold text-white'>
          {item?.title}
          <p className='text-sm md:text-base'>
            {item?.description}
          </p>
          <div className="bg-white/20">
          <Separtator />
          </div>
        </h2>
      </div>
      
      ))} 
        </div>
      </Pagelayout>
    </section>
  )
}

export default services