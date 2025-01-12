import React from 'react'
import Link from "next/link";
import { cn } from "@/lib/utils";

// Props interface
interface Props {
  title: string;
  subtitle: string;
  className?: string; // Optional className prop
}

const Logo: React.FC<Props> = ({ className, title, subtitle }) => {
  return (
    <div className='text-2xl group'>
      <Link href={"/"}>
        <h2 className={cn("font-semibold hover:text-hoverColor hoverEffect tracking-wide", className)}>
          {title}{' '}
          <span className='text-lightSky group-hover:text-white hoverEffect'>{subtitle}</span>
        </h2>
      </Link>
    </div>
  )
}

export default Logo
