import User from "./User";

const Frame2 = () => {
    return ( 
        <div className="flex-1">
            <div className="flex flex-wrap-reverse justify-around items-center h-full">

                <div className="bg-white w-[560px] h-[360px] rounded-[12px] flex flex-col ">
                    <div className="flex flex-col gap-[8px] p-[18px]">
                        <p className="text-[11px] text-[#555]">My Social Circle</p>
                        <div className="flex gap-[10.5px]">
                            <div className="flex gap-[3.75px] pl-[8px] pr-[8px] pt-[4px] pb-[4px] rounded-[5px] border-[#7165FF] border-[0.75px] items-center">
                                <img src="/Indentifier-purple.svg" alt=""/> 
                                <p className="text-[7.5px] text-[#7165FF]">Followers</p>
                            </div>
                            <div className="flex gap-[3.75px] pl-[8px] pr-[8px] pt-[4px] pb-[4px] rounded-[5px] border-[#E5E5EF] border-[0.75px] items-center">
                                <img src="/Indentifier-red.svg" alt=""/> 
                                <p className="text-[7.5px] text-[#1E1B39]">Following</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <User pfp={"/Photo (5).svg"} name={"User 3"} username={"@user_three"} posts={578} followers={357} following={357} date={"2 Days ago"} followed={true}/>
                        <User pfp={"/Photo (5).svg"} name={"User 4"} username={"@user_four"} posts={578} followers={357} following={357} date={"2 Days ago"} followed={true}/>
                        <User pfp={"/Photo (5).svg"} name={"User 5"} username={"@user_five"} posts={578} followers={357} following={357} date={"2 Days ago"} followed={true}/>
                        <User pfp={"/Photo (5).svg"} name={"User 6"} username={"@user_six"} posts={578} followers={357} following={357} date={"2 Days ago"} followed={true}/>
       
                    </div>
                </div>
                <div className="flex-col flex gap-[40px] items-center">
                    <p className="text-white text-[40px] font-bold leading-[110%] max-w-[500px] text-center sm:text-left">Keep an eye on other profiles’ follower activity</p>
                    <p className="text-white text-[24px] text-center sm:text-left">See who’s following your friends (and exes 👀)!</p>
                </div>
            </div>
        </div>
     );
}
 
export default Frame2;