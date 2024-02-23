import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Frame1 from "@/components/Frame1";
import Frame2 from "@/components/Frame2";
import './globals.css';
import Frame3 from "@/components/Frame3";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="w-screen flex flex-col relative">
        
      </div>
      
      <div className="bg-[#0B0B0F] w-screen flex flex-col ">
        <div className="h-screen flex flex-col z-[1]">
          <Header />
          <Hero />
        </div>
        <div className="flex flex-col z-[1]"> 
        {/* adjust height */}
          <Frame1 />
        </div>
        <div className="h-screen flex flex-col z-[1]">
          <Frame2 />
        </div>
        <div className="h-screen flex flex-col z-[1]">
          <div className="flex-1 flex flex-wrap justify-around items-center h-full">
            <div className="w-[510px] h-[90px]">
              <p className="text-white text-[40px] font-bold">See who's not following you back</p>
            </div>
            <div className="w-[440px] h-[490px] bg-[#D9D9D9] rounded-[10px]">

            </div>
          </div>
        </div>
        <div className="flex flex-col z-[1]">
          <Frame3 />
        </div>
        <div className="flex flex-col z-[1]">
          <FAQ />
        </div>

        <div className="flex flex-col z-[1]">
          <Footer />
        </div>
        
      </div>
      
    </main>
  );
}
