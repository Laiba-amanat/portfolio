'use client'



import Pagelayout from '@/components/Pagelayout'
import {Carousel,CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '../../components/ui/carousel';
import project1 from "../../photo/project1.jpg";
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';


const projects =[
  {
    id:"01",
    title:"E-comerce plateform",
    category:" Full stack Web Development",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stack:["Next.js","Tailwend css","stripe","Postgresql"],
    image:project1,
    liveUrl:"https://example.com",
    githubUrl:"https://github.com",
  },
  {
    id:"02",
    title:"E-comerce plateform",
    category:" Full stack Web Development",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stack:["Next.js","Tailwend css","stripe","Postgresql"],
    image:project1,
    liveUrl:"https://example.com",
    githubUrl:"https://github.com",
  },
  {
    id:"03",
    title:"E-comerce plateform",
    category:" Full stack Web Development",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stack:["Next.js","Tailwend css","stripe","Postgresql"],
    image:project1,
    liveUrl:"https://example.com",
    githubUrl:"https://github.com",
  },
]
const work = () => {

  
  return (
    <div className='py-6 md:py-12'>
      <Pagelayout>
        
<Carousel opts={{align:"start",loop:true}}
className='w-full' 
>
  <CarouselContent>
    {projects.map((project)=>(
      <CarouselItem key={project.id}>
      <Card className="bg-bodyColor border-lightsky/20 group">
  <CardContent className="p-6">
    <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
      {/* Description */}
      <div className="w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0">
        <div className="space-y-3 md:space-y-6 mt-4 md:mt-0">
          <h2 className="text-4xl md:text-8xl leading-none font-bold text-transparent text-outline">
            {project?.id}
          </h2>
          <h3 className="text-xl md:text-3xl font-bold leading-none text-white group-hover:text-lightsky hoverEffect">
            {project?.category} Project
          </h3>
          <p className='text-white/60 text-sm md:text-base leading-6 md:leading-normal'>
            {project?.description}
          </p>
          <ul className='flex flex-wrap md:flex-nowrap gap-2 md:gap-4 items-center'>
            {project?.stack?.map((item, index)=>(
              <li key={index} className="text-xs md:text-base font-semibold text-lightsky/80">
                {item}{index !== project.stack.length -1 && ','}
              </li>
            ))}
            </ul>

            <Separator  className='bg-gray-700 '/>
            <div className='flex gap-2 md:gap-4 items-center'>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                    variant="outline"
                    size="icon"
                    className='bg-lightsky/5 text-white/80 border hover:bg-lightsky/20 border-lightsky/20 hover:border-lightsky hover:text-hoverColor hoverEffect'>
                    <Link href={project?.liveUrl} >
                    <ArrowUpRight/>{""}
                    <span className='sr-only'>
                      View Live Project
                    </span>
                    
                    </Link>
                    </Button>
                    
                  </TooltipTrigger>
                  <TooltipContent className='bg-white text-black font-semibold p-2 rounded-lg'>
                    <p>View Live Prooject</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                    variant="outline"
                    size="icon"
                    className='bg-lightsky/5 text-white/80 border hover:bg-lightsky/20 border-lightsky/20 hover:border-lightsky hover:text-hoverColor hoverEffect'>
                    <Link href={project?.githubUrl} >
                    <Github/>{""}
                    <span className='sr-only'>
                      View Github Reporstery
                    </span>
                    
                    </Link>
                    </Button>
                    
                  </TooltipTrigger>
                  <TooltipContent className='bg-white text-black font-semibold p-2 rounded-lg'>
                    <p>View Github Reporstery</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
           
        </div>
      </div>
      {/* Image Div */}
      <div className="w-full md:w-1/2 order-1 md:order-2">
        <div className="relative h-72 sm:h-96 bg-gray-700 rounded-lg overflow-hidden">
          <Image
            src={project?.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </CardContent>
</Card>

        
      </CarouselItem>
    ))}
   
  </CarouselContent>
  <div className='absolute right-10 -bottom-8 '>
    <CarouselPrevious className='rounded-md bg-transparent border border-lightsky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect'/>
    <CarouselNext className='rounded-md bg-transparent border border-lightsky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect'/>
  </div>

</Carousel>

      </Pagelayout>
    </div>
  )
}

export default work