import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { Facebook, Github, Linkedin, Slack, Youtube } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const SocialLinks = () => {

    const socialData = [
        {
          title: "Youtube",
          icon: <Youtube />,
          href: "http://www.youtube.com",
        },
        {
          title: "Github",
          icon: <Github />,
          href: "http://www.github.com",
        },
        {
          title: "Linkedin",
          icon: <Linkedin />,
          href: "http://www.linkedin.com",
        },
        {
          title: "Facebook",
          icon: <Facebook />,
          href: "http://www.facebook.com",
        },
        {
          title: "Slack",
          icon: <Slack />,
          href: "http://www.slack.com",
        }
      ];
    
  return (
    <TooltipProvider>
        <div className='flex items-center gap-2 pt-3'>
   {socialData?.map((item)=>(
    <Tooltip  key={item?.title}>
    <TooltipTrigger asChild>
    <div
    
    className='text-lightsky/80 border border-lightsky/30 p-2 rounded-full hover:bg-lightsky/10 hover:border-lightsky hoverEffect'>
    <Link href={item?.href} target='_blank'> 
    <span>
        {item?.icon}
       
      </span>
    </Link>
  </div>
    </TooltipTrigger>
    <TooltipContent className='bg-hoverColor text-black font-semibold rounded-sm'>
        {item?.title}
    </TooltipContent>
    </Tooltip>
   ))}
    </div>
    </TooltipProvider>
  );
};

export default SocialLinks;
