
"use client";

import React from 'react'
import CountUp from 'react-countup';
const Statistics = () => {

    const StatsData=[
        {num:8,title:"Months of experience"},
        {num:5,title:"Project of completed"},
        {num:8,title:"Technologies mastered"},
        {num:50,title:"Code commits"},
    ]
  return (
    <div className='flex flex-col items-center md:flex-row gap-2.5 md:gap-5 pt-5    '>
        {StatsData?.map((item,index)=>(
            <div key={index} className='flex flex-1 gap-2 md:gap-4 flex-col md:flex-row items-center justify-center lg:justify-start'>
                <CountUp delay={2}
                 end={item?.num} 
                 duration={5}
                 className='text-4xl lg:6xl font-extrabold text-white'
                  />
                

                <p className='leading-snug text-sm'>{item?.title}</p>
            </div>
        ))}
    </div>
  )
}

export default Statistics