const User = (props: any) => {
    return ( 
        <div className="w-full h-[70px] flex justify-between px-4 items-center border-t-[#F3F3F3] border-t-[1px]">
            <div className="flex items-center gap-2">
                <img src={props.pfp} alt="" className="w-[40px]"/>
                <div className="">
                    <p className="font-medium text-sm">{props.name}</p>
                    <p className="font-medium text-xxs opacity-40">{props.username}</p>
                </div>
            </div>
            <div className="flex justify-between w-40">
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
                <p className="text-[#7165FF] text-sm font-medium">{props.date}</p>
                {props.followed ? <p className="text-xxs opacity-40">Followed you</p> : <></>}
            </div>

            <img src="/Right.svg" alt="" className="w-[25px]"/>
        </div>
     );
}

export default function UserDemo(){
    return ( 
        <div className="flex-1 z-10 ">
            <div className="grid-cols-2 grid justify-items-center wrap:flex wrap:flex-wrap-reverse justify-around items-center h-full">

                <div className="bg-white w-[35rem] h-[22.5rem] rounded-xl flex flex-col ">
                    <div className="flex flex-col gap-2 p-5">
                        <p className="text-[11px] text-[#555]">My Social Circle</p>
                        <div className="flex gap-2.5">
                            <div className="flex gap-1 px-2 py-1 rounded-[5px] border-[#7165FF] border items-center">
                                <img src="/Indentifier-purple.svg" alt=""/> 
                                <p className="text-xxs text-[#7165FF]">Followers</p>
                            </div>
                            <div className="flex gap-1 px-2 py-1 rounded-[5px] border-[#E5E5EF] border items-center">
                                <img src="/Indentifier-red.svg" alt=""/> 
                                <p className="text-xxs text-[#1E1B39]">Following</p>
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
                <div className="flex-col flex gap-10 items-center p-[4%]">
                    <p className="text-white text-[2.5rem] font-bold leading-[110%] max-w-[500px] text-left wrap:text-center">Keep an eye on other profiles’ follower activity</p>
                    <p className="text-white text-2xl text-left wrap:text-center">See who’s following your friends (and exes 👀)!</p>
                </div>
            </div>
        </div>
     );
}