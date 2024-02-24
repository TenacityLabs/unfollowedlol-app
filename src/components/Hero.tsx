const Hero = () => {
    return ( 
        <div className= "flex-1 flex justify-center items-center z-[1]">
            <div className="w-full flex flex-col gap-[32px] items-center ">
                <div className="flex flex-col gap-[8px] items-center">
                    <p className="max-w-[800px] text-wrap text-[52px] hero-text:text-[86px] text-center font-bold leading-[115%] bg-gradient-to-b from-[#FFFFFF] to-[#ffffff86] text-transparent bg-clip-text">Discover who's unfollowing you</p>
                    <p className="max-w-[500px] text-wrap text-[16px] sm:text-[20px] text-center bg-gradient-to-b from-[#FFFFFF] to-[#ffffff86] text-transparent bg-clip-text">Unlock the secrets of your social circle, without compromising your account's safety.</p>
                </div>
                <button className="text-white text-center text-[16px] bg-gradient-to-r to-[#4D6DF4] via-[#AB33FA] from-[#FFA800] pt-[16px] pb-[16px] pl-[30px] pr-[30px] rounded-[10px]">
                Join Waitlist
                </button>
            </div>
        </div>
     );
}
 
export default Hero;