

const Status = (props: any) => {
    const profiles: string[] = props.profiles;

    const ProfilePictures = () => {
        
        
        const width: string = 'w-[' + (20 + (10 * (profiles.length - 1))) + 'px]';

        return ( 
            <div className={width + ' flex relative h-[20px]'}>
                <img src={profiles[0]} alt="" className='h-[20px] w-[20px]' />
                {profiles[1] ? <img src={profiles[1]} alt="" className='h-[20px] w-[20px] absolute left-[10px]'/> : <></>}
                {profiles[2] ? <img src={profiles[2]} alt="" className='h-[20px] w-[20px] absolute left-[20px]'/> : <></>}
            </div>
         );
    }
    
    
    return ( 
        <div className='flex justify-between'>
                                <div className='flex gap-[12px]'>
                                    <img src={props.user1.pfp} alt="Profile Picture" className='w-[54px] h-[54px]'/>
                                    <div className="flex flex-col">
                                        {<p className="text-[20px]">@<span className='font-medium'>{props.user1.name}</span> {props.others ? " and others" : ""}</p>}
                                        <div className="flex items-center gap-[2px]">
                                            {props.followed ? <img src="/arrow-purple.svg" alt="" className='self-start'/> : <img src="/arrow-red.svg" alt="" className='self-start'/>}
                                            {props.followed ? <p className="text-[15px] text-[#7165FF]">Followed</p> : <p className="text-[15px] text-[#FF718B]">Unfollowed</p>}
                                            <ProfilePictures />
                                            {/* <div className='flex relative h-[20px] w-[40px]'>
                                                <img src="Ellipse 472.svg" alt="" className='h-[20px] w-[20px]' />
                                                <img src="Ellipse 473 (1).svg" alt="" className='h-[20px] w-[20px] absolute left-[10px]'/>
                                                <img src="Ellipse 473.svg" alt="" className='h-[20px] w-[20px] absolute left-[20px]'/>
                                            </div> */}
                                            <p className="text-[15px]">@<span className='font-medium'>{props.name2}</span> {profiles.length > 1 ? "and others" : ""}</p>
                                        </div>
                                    </div>
                                </div>
                                <img src="/Right.svg" alt="" />
                            </div>
     );
}
 
export default Status;