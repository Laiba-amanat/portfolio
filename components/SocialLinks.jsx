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
          href: "https://www.linkedin.com/in/sheraz-ali-85885a2b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          title: "Facebook",
          icon: <Facebook />,
          href: "https://www.facebook.com/share/17vHF1PEv9/?mibextid=qi2Omg",
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
