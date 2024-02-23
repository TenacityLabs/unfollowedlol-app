const Hero = () => {
    return ( 
        <div className= "flex-1 flex justify-center items-center">
            <div className="w-full h-[350px] flex flex-col gap-[32px] items-center ">
                <div className="flex flex-col gap-[4px] items-center">
                    <p className="max-w-[800px]  text-wrap text-[48px] sm:text-[86px] text-center font-bold sm:leading-[110%] bg-gradient-to-b from-[#FFFFFF] to-[#ffffff86] text-transparent bg-clip-text">Discover who's unfollowing you</p>
                    <p className="max-w-[500px] text-wrap text-[16px] sm:text-[20px] text-center bg-gradient-to-b from-[#FFFFFF] to-[#ffffff86] text-transparent bg-clip-text">Unlock the secrets of your social circle, without compromising your account's safety.</p>
                </div>
                <button className="text-white w-[156px] h-[56px] text-[16px] bg-gradient-to-r to-[#4D6DF4] via-[#AB33FA] from-[#FFA800] pl-[33px] pr-[33px] rounded-[10px]">
                Join Waitlist
                </button>
            </div>
        </div>
     );
}
 
export default Hero;