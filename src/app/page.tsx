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
      
      <div className="bg-[#0B0B0F] w-screen flex flex-col " >
        
        <div className="h-screen flex flex-col mb-[20%] relative">
          <div className="w-[10%] h-[10%] left-[10%] top-[5%] absolute bg-gradient-to-b from-[#000000] to-[#FFD5CC] rounded-full blur-[100px]" />
          <div className="w-[15%] h-[20%] left-[10%] top-[5%] absolute bg-gradient-to-b from-[#891600] to-[#661100] blur-[100px]" />
        
          <div className="z-[1] w-[12%] h-[20%] right-[8%] top-[40%] absolute bg-gradient-to-l from-[#00c3ff] to-[#FF29C3] rounded-full blur-[80px]" />
          <div className="z-[1] w-[15%] h-[35%] right-[0%] top-[55%] translate-x-[50%] absolute bg-gradient-to-b from-[#184BFF] to-[#174AFF] blur-[110px]" />
          
          <div className="absolute w-[1200px] h-[500px] left-[50%] top-[50%] -translate-x-[55%] -translate-y-[40%] rotate-[14deg] rounded-[100%] border border-zinc-700 opacity-50 z-[0]">
            <div className="w-full h-full relative">
              <p className="text-[76px] absolute top-[15%] left-[2%]">🍵</p>
              <p className="text-[76px] absolute bottom-[30%] right-[-2%] -skew-x-12">😂</p>
              <img src="/sphere.svg" className="absolute w-[76px] bottom-[20%] left-[2%]" alt="" />

            </div>
          </div>
          <div className="absolute w-[1750px] h-[750px] left-[50%] top-[50%] -translate-x-[55%] -translate-y-[40%] rotate-[14deg] rounded-[100%] border border-zinc-700 opacity-50 z-[0]">
            <div className="w-full h-full relative">
              <p className="text-[76px] absolute top-[5%] right-[15%] skew-y-[23deg]">😱</p>
              <p className="text-[76px] absolute bottom-[-5%] left-[30%] skew-x-[20deg] rotate-[-12deg]">🤫</p>

            </div>
          </div>
          <div className="absolute w-[2400px] h-[1000px] left-[50%] top-[50%] -translate-x-[55%] -translate-y-[40%] rotate-[14deg] rounded-[100%] border border-zinc-700 opacity-50 z-[0]" />

          <img src="/sphere.png" className="opacity-80 absolute w-[12%] right-[0%] top-[50%] z-[0]" alt="" />

          <img src="/star-img.svg" className="absolute w-[3%] left-[15%] top-[30%]" alt="" />
          <img src="/star-2.svg" className="absolute w-[3%] right-[22%] top-[20%]" alt="" />
          <img src="/star-2.svg" className="absolute w-[2%] right-[17%] top-[90%]" alt="" />
          <img src="/star-3.svg" className="absolute w-[2%] right-[15%] top-[25%]" alt="" />



          <Header/>
          <Hero />
        </div>
        <div className="flex flex-col relative"> 
        {/* adjust height */}
          <div className="w-[30%] h-[15%] left-[12%] top-[40%] -translate-x-[80%] absolute bg-gradient-to-l from-[#FF29C3] to-[#00c3ff] rounded-full blur-[125px]" />
          <div className="w-[15%] h-[35%] left-[0%] top-[20%] -translate-x-[80%] absolute bg-gradient-to-b from-[#184BFF] to-[#174AFF] blur-[180px]" />

          
          <Frame1 />
        </div>
        <div className="h-screen flex flex-col relative">
          <div className="w-[10%] h-[10%] right-[5%] top-[15%] -translate-y-[50%] absolute bg-gradient-to-b from-[#FFD5CC] to-[#FFD5CC] rounded-full blur-[100px]" />
          <div className="w-[10%] h-[30%] right-[10%] top-[30%] -translate-y-[50%] absolute bg-gradient-to-b from-[#891600] to-[#661100] blur-[100px]" />
          <Frame2 />
        </div>
        <div className="h-screen flex flex-col relative">
          <div className="w-[30%] h-[15%] left-[10%] top-[40%] -translate-x-[60%] absolute bg-gradient-to-l from-[#FF29C3] to-[#00c3ff] rounded-full blur-[115px]" />
          <div className="w-[16%] h-[35%] left-[0%] top-[50%] -translate-x-[60%] absolute bg-gradient-to-t from-[#184BFF] to-[#174AFF] blur-[150px]" />

          
          <div className="grid-cols-2 grid justify-items-center wrap:flex wrap:flex-wrap flex-1 justify-around items-center h-full z-[1]">
            <div className="flex:w-screen h-[90px] text-center">
              <p className="text-white text-[40px] font-bold">See who's not following you back</p>
            </div>
            <div className="w-[440px] h-[490px] bg-[#D9D9D9] rounded-[10px] ">

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
