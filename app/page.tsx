// import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button";
import Container from "../components/Container";
import { Download } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "../components/Statistics";
import Photo from "../components/Photo";
import HomeDescription from "@/components/HomeDescription";


export default function Home() {
  return (
    <div className="bg-bodyColor text-white/80">
      <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start">
          <div>
            <h3 className="font-semibold text-4xl md:text-2xl tracking-wider mb-1">Web Devolper</h3>
            <h2 className="text-3xl md:text-5xl mb-2 text-white">Hello I&apos;m</h2>
            <h1 className="text-lightsky text-5xl md:text-7xl tracking-normal">Laiba</h1>
         <div className="w-full h-[170px] md:h-[170px] ">
          <div className=" top-0 left-0 w-full h-full ">
          <HomeDescription/>
          </div>
         </div>
       <div className="pt-8">
       <Button className=" h-11  bg-transparent rounded-full border border-lightsky/50 text-lightsky hover:bg-hoverColor hover:text-black hoverEffect">
            Download cv <Download/>
            </Button>
            <div className=" flex justify-center md:justify-start w-full ">
            <SocialLinks/>
            </div>
            
            <Statistics/>
       </div>

          </div>
        </div>
        {/* {Photo} */}
       <Photo/>
      </Container>
    </div>
  );
}
