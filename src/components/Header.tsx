"use client";

const Header = () => {

    const scrollToFAQ = (event: any) => {
        event.preventDefault(); 
        const element = document.getElementById("faq");
        if (element) {
          element.scrollIntoView({
            behavior: "smooth", 
            block: "center", 
          });
        }
    };

    return ( 
        <div className="z-[1] p-8 w-screen justify-items-center items-center flex flex-shrink-0 justify-around flex-wrap sm:gap-0 gap-4">
            <p className="text-white font-bold text-[24px]">unfollowed.lol</p>
            <div className="flex gap-[32px] order-2 sm:order-1 w-screen sm:w-auto justify-center">
                <p className="hidden sm:flex text-white text-[18px] cursor-pointer">
                    About
                </p>
                <p className="hidden sm:flex text-white text-[18px] cursor-pointer">
                    Features
                </p>
                <p onClick={scrollToFAQ} className="hidden sm:flex text-white text-[18px] cursor-pointer">
                    FAQ
                </p>
            </div>
            
            <button className="order-1 sm:order-2 text-white text-[16px] bg-gradient-to-r to-[#4D6DF4] via-[#AB33FA] from-[#FFA800] pt-[12px] pb-[12px] pl-[22px] pr-[21px] rounded-[10px] max-[380px]:hidden">
                Join Waitlist
            </button>
        </div>
     );
}
 
export default Header;