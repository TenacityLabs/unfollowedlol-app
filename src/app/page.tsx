import Header from "@/components/home/Header";
import StatusDemo from "@/components/home/StatusDemo";
import UserDemo from "@/components/home/UserDemo";
import "./index.css"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="bg-[#0B0B0F] w-screen flex flex-col" >
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
          <div className= "flex-1 flex justify-center items-center z-[1]">
            <div className="w-full flex flex-col gap-[32px] items-center ">
                <div className="flex flex-col gap-[8px] items-center">
                    <p className="max-w-[800px] text-wrap text-[52px] hero-text:text-[86px] text-center font-bold leading-[115%] bg-gradient-to-b from-[#FFFFFF] to-[#ffffff86] text-transparent bg-clip-text">Discover who&apos;s unfollowing you</p>
                    <p className="max-w-[500px] text-wrap text-[16px] sm:text-[20px] text-center bg-gradient-to-b from-[#FFFFFF] to-[#ffffff86] text-transparent bg-clip-text">Unlock the secrets of your social circle, without compromising your account&apos;s safety.</p>
                </div>
                <button className="text-white text-center text-[16px] bg-gradient-to-r to-[#4D6DF4] via-[#AB33FA] from-[#FFA800] pt-[16px] pb-[16px] pl-[30px] pr-[30px] rounded-[10px]">
                Join Waitlist
                </button>
            </div>
        </div>
        </div>
        <div className="flex flex-col relative"> 
        {/* adjust height */}
          <div className="w-[30%] h-[15%] left-[12%] top-[40%] -translate-x-[80%] absolute bg-gradient-to-l from-[#FF29C3] to-[#00c3ff] rounded-full blur-[125px]" />
          <div className="w-[15%] h-[35%] left-[0%] top-[20%] -translate-x-[80%] absolute bg-gradient-to-b from-[#184BFF] to-[#174AFF] blur-[180px]" />

          
          <StatusDemo />
        </div>
        <div className="h-screen flex flex-col relative">
          <div className="w-[10%] h-[10%] right-[5%] top-[15%] -translate-y-[50%] absolute bg-gradient-to-b from-[#FFD5CC] to-[#FFD5CC] rounded-full blur-[100px]" />
          <div className="w-[10%] h-[30%] right-[10%] top-[30%] -translate-y-[50%] absolute bg-gradient-to-b from-[#891600] to-[#661100] blur-[100px]" />
          <UserDemo />
        </div>
        <div className="h-screen flex flex-col relative">
          <div className="w-[30%] h-[15%] left-[10%] top-[40%] -translate-x-[60%] absolute bg-gradient-to-l from-[#FF29C3] to-[#00c3ff] rounded-full blur-[115px]" />
          <div className="w-[16%] h-[35%] left-[0%] top-[50%] -translate-x-[60%] absolute bg-gradient-to-t from-[#184BFF] to-[#174AFF] blur-[150px]" />

          
          <div className="grid-cols-2 grid justify-items-center wrap:flex wrap:flex-wrap flex-1 justify-around items-center h-full z-[1]">
            <div className="flex:w-screen text-center">
              <p className="text-white text-[40px] font-bold leading-[110%] text-left wrap:text-center wrap:pr-[4%] wrap:pl-[4%]">See who&apos;s not following you back</p>
            </div>
            <div className="w-[440px] h-[490px] bg-[#D9D9D9] rounded-[10px] ">

            </div>
          </div>
        </div>
        <div className="flex flex-col z-[1]">
          <div className="flex-1 z-[1]">
            <div className="grid-cols-2 grid justify-items-center wrap:flex wrap:flex-wrap-reverse justify-around items-center h-full">
                <div className="relative">
                    <img src="/Vector.png" alt="" />
                    <img src="/Vector.svg" alt="" className="absolute w-[60%] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"/>
                </div>


                <div className="max-w-[500px] flex flex-col gap-[40px] p-[4%]">
                    <p className="text-white font-bold text-[40px] text-left wrap:text-center">Privacy first, always.</p>
                    <p className="text-white text-[24px] text-left wrap:text-center">We&apos;ll never ask you to login to your Instagram account or enter any personal information. Ever.</p>
                </div>
            </div>
        </div>
        </div>
        <div>
          <div id="faq" className="flex flex-col z-[1]">
            <div className="p-8 sm:p-20 flex flex-col gap-[56px] bg-cover bg-center" 
            style={{backgroundImage: "url('/FAQ-bg.png')" }}>
              <p className="text-wrap text-white font-bold text-[40px]">Frequently Asked Questions</p>
              <div className="flex flex-col">
                  <div className="flex border-t-[#3F3565] border-t-[2px] border-b-[#3F3565] border-b-[1px] pl-[20px] pr-[20px] pt-[34px] pb-[34px] justify-between" >
                      <p className="text-white text-[24px]">How can I install Unfollowed.lol?</p>
                      <img src="/Plus sign.svg" alt="" />
                  </div>
                  <div className="flex border-t-[#3F3565] border-t-[1px] border-b-[#3F3565] border-b-[1px] pl-[20px] pr-[20px] pt-[34px] pb-[34px] justify-between" >
                      <p className="text-white text-[24px]">Do I need to enter my login information?</p>
                      <img src="/Plus sign.svg" alt="" />
                  </div>
                  <div className="flex border-t-[#3F3565] border-t-[1px] border-b-[#3F3565] border-b-[1px] pl-[20px] pr-[20px] pt-[34px] pb-[34px] justify-between" >
                      <p className="text-white text-[24px]">How does it work?</p>
                      <img src="/Plus sign.svg" alt="" />
                  </div>
                  <div className="flex border-t-[#3F3565] border-t-[1px] border-b-[#3F3565] border-b-[2px] pl-[20px] pr-[20px] pt-[34px] pb-[34px] justify-between" >
                      <p className="text-white text-[24px]">Can others see that I&apos;ve analyzed their profile?</p>
                      <img src="/Plus sign.svg" alt="" />
                  </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col z-[1]">
            <div className="sm:h-[80px] p-[12px] sm:p-0 justify-items-center items-center flex-col flex sm:flex-row flex-shrink-0 justify-around gap-6 sm:gap-0">
              <p className="text-white font-bold text-[30px]" ><span className="text-[#7993FF]">un</span>followed.lol</p>
              <div className="flex sm:flex-row flex-col gap-6 sm:gap-[20px] items-center">
                  <p className="text-white text-[18px] opacity-50 hover:opacity-100 transition-opacity duration-30 cursor-pointer">
                      About
                  </p>
                  <p className="text-white text-[18px] opacity-50 hover:opacity-100 transition-opacity duration-30 cursor-pointer">
                      Features
                  </p>
                  <p className="text-white text-[18px] opacity-50 hover:opacity-100 transition-opacity duration-30 cursor-pointer">
                      FAQ
                  </p>
                  <button className="text-white text-[12px] pt-[8px] pb-[8px] pl-[20px] pr-[20px] rounded-[12px] border-white border-[1px]">
                      Join Waitlist
                  </button>
              </div>

              <div className="flex gap-[18px]">
                  <img src="/email.svg" alt="" className="w-[24px]"/>
                  <img src="/instagram.svg" alt="" className="w-[24px]"/>
                  <img src="/linkedin.svg" alt="" className="w-[24px]"/>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </main>
  );
}
