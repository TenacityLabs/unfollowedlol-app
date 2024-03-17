const Status = (props: any) => {
    // props changed depending on usage
    const profiles: string[] = props.profiles;

    const ProfilePictures = () => {
        
        return ( 
            // <div className={width + ' flex relative h-[20px]'}>
            <div className={profiles[2] ? "w-[40px] flex relative h-[20px]" : profiles[1] ? "w-[30px] flex relative h-[20px]" : "w-[20px] flex relative h-[20px]" }>
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
                        <p className="mobile:text-[12px] max-[405px]:hidden">@<span className='font-medium'>{props.name2}</span> {profiles.length > 1 ? "and others" : ""}</p>
                    </div>
                </div>
            </div>
            <img src="/Right.svg" alt="" />
        </div>
     );
}

export default function StatusDemo(){
    return ( 
        <div className="flex-1 z-[1]">
            <div className="z-[1] grid-cols-2 grid wrap:flex wrap:flex-wrap justify-items-center justify-around items-center h-full">
                <div className="mb-[10%] wrap:w-screen flex justify-center">
                    <div className="">
                        <p className="text-white text-[40px] font-bold leading-[110%] text-left wrap:text-center p-[4%]">Track your profile&apos;s followers and unfollowers</p>
                    </div>
                </div>
                <div>
                    <div className="max-h-[800px] max-w-[435px] bg-white rounded-[20px] p-[30px] flex flex-col gap-[20px] self-end wrap:w-screen">
                        <p className="text-[#000F4E] text-[30px] font-bold"><span className="text-[#7993FF]">Un</span>followed.lol</p>
                        
                        <div className="w-full flex flex-col gap-[20px] ">
                            <p className="font-bold text-[20px] text-[#262626]">Yesterday</p> 
                            <div className="flex flex-col gap-[24px]">
                                <Status followed={false} others={true} user1={{name: 'jessica121', pfp: 'Photo (5).svg'}} name2={'jgk'} profiles={['/Ellipse 472.svg', '/Ellipse 473 (1).svg', '/Ellipse 473.svg' ]} />
                            </div>
                            
                        </div>
                        <div className='w-full h-[1px] bg-[#DBDBDB]'></div>
                        <div className="w-full flex flex-col gap-[20px] mobile:gap-[10px]">
                            <p className="font-bold text-[20px] text-[#262626]">This Week</p>
                            <div className="flex flex-col gap-[24px] mobile:gap-[12px]">
                                <Status followed={true} others={false} user1={{name: 'mom', pfp: 'Photo.svg'}} name2={'jgk'} profiles={['/Ellipse 472.svg', '/Ellipse 473 (1).svg' ]} />
                                <Status followed={false} others={false} user1={{name: 'janelle_becker19', pfp: 'Photo (1).svg'}} name2={'jgk'} profiles={['/Ellipse 472.svg']} />
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-[#DBDBDB]'></div>
                        <div className="w-full flex flex-col gap-[20px] mobile:gap-[10px]">
                            <p className="font-bold text-[20px] text-[#262626]">Earlier</p>
                            <div className="flex flex-col gap-[24px] mobile:gap-[12px]">
                                <Status followed={false} others={true} user1={{name: 'r.stuart', pfp: 'Photo (2).svg'}} name2={'jgk'} profiles={['/Ellipse 472.svg', '/Ellipse 473 (1).svg', '/Ellipse 473.svg' ]} />
                                <Status followed={true} others={false} user1={{name: 'michael.jackson', pfp: 'Photo (3).svg'}} name2={'jgk'} profiles={['/Ellipse 472.svg', '/Ellipse 473 (1).svg']} />
                                <Status followed={false} others={true} user1={{name: 'gabriel2093', pfp: 'Photo (4).svg'}} name2={'jgk'} profiles={['/Ellipse 472.svg' ]} />

                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}