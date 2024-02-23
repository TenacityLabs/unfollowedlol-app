const Header = () => {
    return ( 
        <div className="h-[80px] w-screen justify-items-center items-center flex flex-shrink-0 justify-around">
            <p className="text-white font-bold text-[24px]" >unfollowed.lol</p>
            <div className="flex gap-[32px]">
                <p className="text-white text-[18px] cursor-pointer">
                    About
                </p>
                <p className="text-white text-[18px] cursor-pointer">
                    Features
                </p>
                <p className="text-white text-[18px] cursor-pointer">
                    FAQ
                </p>
            </div>
            
            <button className="text-white text-[16px] bg-gradient-to-r to-[#4D6DF4] via-[#AB33FA] from-[#FFA800] pt-[12px] pb-[12px] pl-[22px] pr-[21px] rounded-[10px]">
                Join Waitlist
            </button>
        </div>
     );
}
 
export default Header;