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
            <div className="flex justify-between">
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
                <p className="text-[#7165FF] text-[14px] font-medium">{props.date}</p>
                {props.followed ? <p className="text-[8px] opacity-40">Followed you</p> : <></>}
            </div>

            <img src="/Right.svg" alt="" className="w-[25px]"/>
        </div>
     );
}
 
export default User;