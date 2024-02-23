const FAQ = () => {
    return ( 
        <div className="
        p-[120px]
        flex 
        flex-col 
        gap-[56px] 
        bg-cover 
        bg-center
        " 
        style={{backgroundImage: "url('/FAQ-bg.png')" }}>
            <p className="text-wrap text-white font-bold text-[40px]">Frequently Asked Questions</p>
            <div className="flex flex-col">
                <div className="flex border-t-[#3F3565] border-t-[2px] border-b-[#3F3565] border-b-[1px] pl-[20px] pr-[20px] pt-[34px] pb-[34px] justify-between" >
                    <p className="text-white text-[24px]">How can I install Unfollowed.lol?</p>
                    <img src="/Plus sign.svg" alt="" />
                </div>
                <div className="flex border-t-[#3F3565] border-t-[1px] border-b-[#3F3565] border-b-[1px] pl-[20px] pr-[20px] pt-[34px] pb-[34px] justify-between" >
                    <p className="text-white text-[24px]">Do I need to enter my login information?</p>
                    <img src="/Plus sign.svg" alt="" />
                </div>
                <div className="flex border-t-[#3F3565] border-t-[1px] border-b-[#3F3565] border-b-[1px] pl-[20px] pr-[20px] pt-[34px] pb-[34px] justify-between" >
                    <p className="text-white text-[24px]">How does it work?</p>
                    <img src="/Plus sign.svg" alt="" />
                </div>
                <div className="flex border-t-[#3F3565] border-t-[1px] border-b-[#3F3565] border-b-[2px] pl-[20px] pr-[20px] pt-[34px] pb-[34px] justify-between" >
                    <p className="text-white text-[24px]">Can others see that I've analyzed their profile?</p>
                    <img src="/Plus sign.svg" alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default FAQ;