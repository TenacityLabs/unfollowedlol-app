const Frame3 = () => {
    return ( 
        <div className="flex-1 z-[1]">
            <div className="grid-cols-2 grid justify-items-center wrap:flex wrap:flex-wrap-reverse justify-around items-center h-full">
                <div className="relative">
                    <img src="/Vector.png" alt="" />
                    <img src="/Vector.svg" alt="" className="absolute w-[60%] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"/>
                </div>


                <div className="max-w-[500px] flex flex-col gap-[40px] p-[4%]">
                    <p className="text-white font-bold text-[40px] text-left wrap:text-center">Privacy first, always.</p>
                    <p className="text-white text-[24px] text-left wrap:text-center">We’ll never ask you to login to your Instagram account or enter any personal information. Ever.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Frame3;