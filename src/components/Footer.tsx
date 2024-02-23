const Footer = () => {
    return ( 
        <div className="sm:h-[80px] p-[12px] sm:p-0 justify-items-center items-center flex-col flex sm:flex-row flex-shrink-0 justify-around gap-6 sm:gap-0">
            <p className="text-white font-bold text-[30px]" ><span className="text-[#7993FF]">un</span>followed.lol</p>
            <div className="flex sm:flex-row flex-col gap-6 sm:gap-[40px] items-center">
                <p className="text-white text-[18px] opacity-50 hover:opacity-100 transition-opacity duration-30 cursor-pointer">
                    About
                </p>
                <p className="text-white text-[18px] opacity-50 hover:opacity-100 transition-opacity duration-30 cursor-pointer">
                    Features
                </p>
                <p className="text-white text-[18px] opacity-50 hover:opacity-100 transition-opacity duration-30 cursor-pointer">
                    FAQ
                </p>
                <button className="text-white text-[16px] pt-[8px] pb-[8px] pl-[20px] pr-[20px] rounded-[12px] border-white border-[1px]">
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