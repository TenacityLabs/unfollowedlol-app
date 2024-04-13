"use client";

import Link from "next/link";

export const scrollToFAQ = (event: any) => {
    event.preventDefault(); 
    const element = document.getElementById("faq");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", 
        block: "center", 
      });
    }
};
export const scrollToFeatures = (event: any) => {
    event.preventDefault(); 
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", 
        block: "center", 
      });
    }
};

const Header = () => {


    return ( 
        <div className="z-10 p-8 w-screen justify-items-center items-center flex flex-shrink-0 justify-around flex-wrap sm:gap-0 gap-4">
            <p className="text-white font-bold text-2xl">unfollowed.lol</p>
            <div className="flex gap-8 order-2 sm:order-1 w-screen sm:w-auto justify-center">
                {/* <p className="hidden sm:flex text-white text-lg cursor-pointer">
                    About
                </p> */}
                <Link href="/home">
                <p className="hidden sm:flex text-white text-lg cursor-pointer">
                    Home
                </p>
                  </Link>
                <p onClick={scrollToFeatures} className="hidden sm:flex text-white text-lg cursor-pointer">
                    Features
                </p>
                <p onClick={scrollToFAQ} className="hidden sm:flex text-white text-lg cursor-pointer">
                    FAQ
                </p>
            </div>
            <button className="order-1 sm:order-2 text-base rainbow-button py-3 px-5 rounded-xl">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSff2yOlenE692GeMZG9rc9HEL7PH_kVUim5-uL4sB_QAkFN4w/viewform">
                    Join Waitlist
                </Link>
            </button>
        </div>
     );
}
 
export default Header;