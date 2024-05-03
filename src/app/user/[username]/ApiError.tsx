export default function ApiError() {
    return (
        <div className="bg-[#0B0B0F] w-screen h-screen flex flex-col mb-1/5 relative overflow-hidden">
          <p className="absolute top-1/2 left-1/2 transform z-10 -translate-x-1/2 -translate-y-1/2 w-fit text-3xl text-wrap text-center font-bold leading-[115%] bg-gradient-to-b from-[#FFFFFF] to-[#ffffff86] text-transparent bg-clip-text">Sorry, an error occurred. Please try again later</p>
        <div className="w-[10%] h-[10%] left-[10%] top-[5%] absolute bg-gradient-to-b from-[#000000] to-[#FFD5CC] rounded-full blur-[100px]" />
          <div className="w-[15%] h-[20%] left-[10%] top-[5%] absolute bg-gradient-to-b from-[#891600] to-[#661100] blur-[100px]" />
        
          <div className="z-10 w-[12%] h-[20%] right-[8%] top-[40%] absolute bg-gradient-to-l from-[#00c3ff] to-[#FF29C3] rounded-full blur-[80px]" />
          <div className="z-10 w-[15%] h-[35%] right-[0%] top-[55%] translate-x-[50%] absolute bg-gradient-to-b from-[#184BFF] to-[#174AFF] blur-[110px]" />
          
          <div className="absolute w-[1200px] h-[500px] left-[50%] top-[50%] -translate-x-[55%] -translate-y-[40%] rotate-[14deg] rounded-[100%] border border-zinc-700 opacity-50 z-0">
            <div className="w-full h-full relative">
              <p className="text-[76px] absolute top-[15%] left-[2%]">🍵</p>
              <p className="text-[76px] absolute bottom-[30%] right-[-2%] -skew-x-12">😂</p>
              <img src="/sphere.svg" className="absolute w-[76px] bottom-[20%] left-[2%]" alt="" />

            </div>
          </div>
          <div className="absolute w-[1750px] h-[750px] left-[50%] top-[50%] -translate-x-[55%] -translate-y-[40%] rotate-[14deg] rounded-[100%] border border-zinc-700 opacity-50 z-0">
            <div className="w-full h-full relative">
              <p className="text-[76px] absolute top-[5%] right-[15%] skew-y-[23deg]">😱</p>
              <p className="text-[76px] absolute bottom-[-5%] left-[30%] skew-x-[20deg] rotate-[-12deg]">🤫</p>

            </div>
          </div>
          <div className="absolute w-[2400px] h-[1000px] left-[50%] top-[50%] -translate-x-[55%] -translate-y-[40%] rotate-[14deg] rounded-[100%] border border-zinc-700 opacity-50 z-0" />

          <img src="/sphere.png" className="opacity-80 absolute w-[12%] right-[0%] top-[50%] z-0" alt="" />

          <img src="/star-img.svg" className="absolute w-[3%] left-[15%] top-[30%]" alt="" />
          <img src="/star-2.svg" className="absolute w-[3%] right-[22%] top-[20%]" alt="" />
          <img src="/star-2.svg" className="absolute w-[2%] right-[17%] top-[90%]" alt="" />
          <img src="/star-3.svg" className="absolute w-[2%] right-[15%] top-[25%]" alt="" />
        </div>
    )
}