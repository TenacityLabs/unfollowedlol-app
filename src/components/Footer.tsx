const Footer = () => {
    return ( 
        <div className="h-[80px] justify-items-center items-center flex flex-shrink-0 justify-around">
            <p className="text-white font-bold text-[30px]" ><span className="text-[#7993FF]">un</span>followed.lol</p>
            <div className="flex gap-[32px] items-center">
                <p className="text-white text-[18px] opacity-50 hover:opacity-100 transition-opacity duration-30 cursor-pointer">
                    About
                </p>
                <p className="text-white text-[18px] opacity-50 hover:opacity-100 transition-opacity duration-30 cursor-pointer">
                    Features
                </p>
                <p className="text-white text-[18px] opacity-50 hover:opacity-100 transition-opacity duration-30 cursor-pointer">
                    FAQ
                </p>
                <button className="text-white text-[16px] pt-[8px] pb-[8px] pl-[20px] pr-[20px] rounded-[10px] border-white border-[1px]">
                    Join Waitlist
                </button>
            </div>

            <div className="flex gap-[30px]">
                <img src="/email.svg" alt="" className="w-[24px]"/>
                <img src="/instagram.svg" alt="" className="w-[24px]"/>
                <img src="/linkedin.svg" alt="" className="w-[24px]"/>
            </div>
        </div>
     );
}
 
export default Footer;