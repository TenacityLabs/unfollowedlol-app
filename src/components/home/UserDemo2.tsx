const User = (props: any) => {
    return ( 
        <div className="w-full h-[70px] flex justify-between pl-[18px] pr-[18px] items-center border-t-[#F3F3F3] border-t-[1px]">
            <div className="flex items-center gap-[8px]">
                <img src={props.pfp} alt="" className="w-[40px]"/>
                <div className="">
                    <p className="font-medium text-[14px]">{props.name}</p>
                    <p className="font-medium text-[8px] opacity-40">{props.username}</p>
                </div>
            </div>
            <div className="flex w-40 justify-between">
                <div className="w-[36px] justify-start">
                    <p className="font-medium text-[14px]">{props.posts}</p>
                    <p className="text-[8px] opacity-40">Posts</p>
                </div>
                <div className="w-[36px] justify-start">
                    <p className="font-medium text-[14px]">{props.followers}</p>
                    <p className="text-[8px] opacity-40">Followers</p>
                </div>
                <div className="w-[36px] justify-start">
                    <p className="font-medium text-[14px]">{props.following}</p>
                    <p className="text-[8px] opacity-40">Following</p>
                </div>
            </div>
            <div>
                <button className="py-1.5 px-3.5 justify-center border border-[#7165ffcc] rounded-full text-[#7165FF] text-xs gap-2.5">Unfollow</button>
            </div>

            <img src="/Right.svg" alt="" className="w-[25px]"/>
        </div>
     );
}

export default function UserDemo(){
    return ( 
        <div className="flex-1 z-[1] ">
            <div className="grid-cols-2 grid justify-items-center wrap:flex wrap:flex-wrap-reverse justify-around items-center h-full">
                <div className="flex-col flex gap-[40px] items-center p-[4%]">
                    <p className="text-white text-[40px] font-bold leading-[110%] max-w-[500px] text-left wrap:text-center">Keep an eye on other profiles’ follower activity</p>
                    <p className="text-white text-[24px] text-left wrap:text-center">See who’s following your friends (and exes 👀)!</p>
                </div>
                <div className="bg-white w-[560px] h-[360px] rounded-[12px] flex flex-col ">
                    <div className="flex flex-col gap-[8px] p-[18px]">
                        <p className="text-[11px] text-[#555]">People who don't follow me back</p>
                        <div className="flex gap-[10.5px]">
                            <div className="flex gap-[3.75px] pl-[8px] pr-[8px] pt-[4px] pb-[4px] rounded-[5px] border-[#E5E5EF] border-[0.75px] items-center">
                                <img src="/Indentifier-red.svg" alt=""/> 
                                <p className="text-[7.5px] text-[#1E1B39]">Following</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <User pfp={"/Photo (5).svg"} name={"User 3"} username={"@user_three"} posts={578} followers={357} following={357}/>
                        <User pfp={"/Photo (5).svg"} name={"User 3"} username={"@user_three"} posts={578} followers={357} following={357}/>
                        <User pfp={"/Photo (5).svg"} name={"User 3"} username={"@user_three"} posts={578} followers={357} following={357}/>
                        <User pfp={"/Photo (5).svg"} name={"User 3"} username={"@user_three"} posts={578} followers={357} following={357}/>
                    </div>
                </div>
            </div>
        </div>
     );
}