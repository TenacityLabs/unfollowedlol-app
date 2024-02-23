const Frame3 = () => {
    return ( 
        <div className="flex-1">
            <div className="flex flex-wrap-reverse justify-around items-center h-full">
                <div className="relative">
                    <img src="/Vector.png" alt="" />
                    {/* <img src="/Vector.svg" alt="" className="absolute bottom-[350px] left-[110px]"/> */}
                </div>
                
                <div className="w-[540px] h-[220px] flex flex-col gap-[40px]">
                    <p className="text-white font-bold text-[40px] text-center sm:text-left">Privacy first, always.</p>
                    <p className="text-white text-[24px] text-center sm:text-left">We’ll never ask you to login to your Instagram account or enter any personal information. Ever.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Frame3;