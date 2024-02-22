const Hero = () => {
    return ( 
        <div className= "flex-1 flex justify-center items-center">
            <div className="w-[780px] h-[350px] flex flex-col gap-[32px] items-center ">
                <div className="flex flex-col gap-[16px] items-center">
                    <p className="w-full h-[185px] text-[85px] text-center text-white font-bold leading-[93.5px]">Discover who's unfollowing you</p>
                    <p className="w-[580px] h-[60px] text-[20px] text-center text-white">Unlock the secrets of your social circle, without compromising your account's safety.</p>
                </div>
                <button className="text-white w-[156px] h-[56px] text-[16px] bg-gradient-to-r to-[#4D6DF4] via-[#AB33FA] from-[#FFA800] pl-[33px] pr-[33px] rounded-[10px]">
                Join Waitlist
                </button>
            </div>
        </div>
     );
}
 
export default Hero;