const User = (props: any) => {
    return ( 
        <div className="w-full h-16 flex justify-between px-5 items-center border-t-[#F3F3F3] border-t">
            <div className="flex items-center gap-2">
                <img src={props.pfp} alt="" className="w-10"/>
                <div className="">
                    <p className="font-medium text-sm">{props.name}</p>
                    <p className="font-medium text-xxs opacity-40">{props.username}</p>
                </div>
            </div>
            <div className="flex w-40 justify-between">
                <div className="w-9 justify-start">
                    <p className="font-medium text-sm">{props.posts}</p>
                    <p className="text-xxs opacity-40">Posts</p>
                </div>
                <div className="w-9 justify-start">
                    <p className="font-medium text-sm">{props.followers}</p>
                    <p className="text-xxs opacity-40">Followers</p>
                </div>
                <div className="w-9 justify-start">
                    <p className="font-medium text-sm">{props.following}</p>
                    <p className="text-xxs opacity-40">Following</p>
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
        <div className="flex-1 z-10 ">
            <div className="grid-cols-2 grid justify-items-center wrap:flex wrap:flex-wrap-reverse justify-around items-center h-full">
                <div className="flex-col flex gap-10 items-center p-[4%]">
                    <p className="text-white text-4xl font-bold leading-[110%] max-w-[500px] text-left wrap:text-center">See who&apos;s not following you back</p>
                    <p className="w-full text-white text-2xl text-left">and unfollow them 🙈</p>
                </div>
                <div className="bg-white w-[35rem] h-[22.5rem] rounded-xl flex flex-col ">
                    <div className="flex flex-col gap-2 p-5">
                        <p className="text-xs text-[#555]">People who don&apos;t follow me back</p>
                        <div className="flex gap-2.5">
                            <div className="flex gap-1 px-2 py-1 rounded-[5px] border-[#E5E5EF] border items-center">
                                <img src="/Indentifier-red.svg" alt=""/> 
                                <p className="text-xxs text-[#1E1B39]">Following</p>
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