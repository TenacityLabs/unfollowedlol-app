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
        <div className="z-10 p-8 w-screen justify-items-center items-center flex flex-shrink-0 justify-around flex-wrap sm:gap-0 gap-4">
            <p className="text-white font-bold text-2xl">unfollowed.lol</p>
            <div className="flex gap-8 order-2 sm:order-1 w-screen sm:w-auto justify-center">
                <p className="hidden sm:flex text-white text-lg cursor-pointer">
                    About
                </p>
                <p className="hidden sm:flex text-white text-lg cursor-pointer">
                    Features
                </p>
                <p onClick={scrollToFAQ} className="hidden sm:flex text-white text-lg cursor-pointer">
                    FAQ
                </p>
            </div>
            <button className="order-1 sm:order-2 text-white text-base bg-gradient-to-r to-[#4D6DF4] via-[#AB33FA] from-[#FFA800] py-3 px-5 rounded-xl">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSff2yOlenE692GeMZG9rc9HEL7PH_kVUim5-uL4sB_QAkFN4w/viewform">
                Join Waitlist
            </a>
            </button>
        </div>
     );
}
 
export default Header;