import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Frame1 from "@/components/Frame1";
import './globals.css';

export default function Home() {
  return (
    <main>
      <div className="bg-[#0B0B0F] w-screen flex flex-col ">
        <div className="h-screen flex flex-col">
          <Header />
          <Hero />
        </div>
        <div className="h-[980px] flex flex-col"> 
        {/* adjust height */}
          <Frame1 />
        </div>
        
      </div>
      
    </main>
  );
}
