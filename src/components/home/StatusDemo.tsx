const Status = (props: any) => {
    const profiles: string[] = props.profiles;

    const ProfilePictures = () => {
        return (
            <div className={profiles[2] ? "w-10 flex relative h-5" : profiles[1] ? "w-7 flex relative h-5" : "w-5 flex relative h-5"}>
                <img src={profiles[0]} alt="" className='h-5 w-5' />
                {profiles[1] ? <img src={profiles[1]} alt="" className='h-5 w-5 absolute left-2.5'/> : <></>}
                {profiles[2] ? <img src={profiles[2]} alt="" className='h-5 w-5 absolute left-5'/> : <></>}
            </div>
        );
    }
    
    return (
        <div className='flex justify-between'>
            <div className='flex gap-3'>
                <img src={props.user1.pfp} alt="Profile Picture" className='w-14 h-14'/>
                <div className="flex flex-col">
                    <p className="text-2xl">@<span className='font-medium'>{props.user1.name}</span> {props.others ? " and others" : ""}</p>
                    <div className="flex items-center gap-1">
                        {props.followed ? <img src="/arrow-purple.svg" alt="" className='self-start'/> : <img src="/arrow-red.svg" alt="" className='self-start'/>}
                        {props.followed ? <p className="text-lg text-purple-500">Followed</p> : <p className="text-lg text-red-500">Unfollowed</p>}
                        <ProfilePictures />
                        <p className="mobile:text-sm max-w-[25.3125rem]:hidden">@<span className='font-medium'>{props.name2}</span> {profiles.length > 1 ? "and others" : ""}</p>
                    </div>
                </div>
            </div>
            <img src="/Right.svg" alt="" />
        </div>
    );
}

export default function StatusDemo(){
    return ( 
        <div className="flex-1 z-10">
            <div className="z-10 grid-cols-2 grid wrap:flex wrap:flex-wrap justify-items-center justify-around items-center h-full">
                <div className="mb-[10%] wrap:w-screen flex justify-center">
                    <div className="">
                        <p className="text-white text-4xl font-bold leading-[110%] text-center p-[4%] slide-in left-slide">Track your profile&apos;s followers and unfollowers</p>
                    </div>
                </div>
                <div id="features">
                    <div className="max-h-[50rem] max-w-[27rem] bg-white rounded-[20px] p-8 flex flex-col gap-5 self-end wrap:w-screen">
                        <p className="text-[#000F4E] text-3xl font-bold"><span className="text-[#7993FF]">Un</span>followed.lol</p>
                        
                        <div className="w-full flex flex-col gap-5 ">
                            <p className="font-bold text-xl text-[#262626]">Yesterday</p> 
                            <div className="flex flex-col gap-6">
                                <Status followed={false} others={true} user1={{name: 'jessica121', pfp: 'Photo (5).svg'}} name2={'jgk'} profiles={['/Ellipse 472.svg', '/Ellipse 473 (1).svg', '/Ellipse 473.svg' ]} />
                            </div>
                            
                        </div>
                        <div className='w-full h-[1px] bg-[#DBDBDB]'></div>
                        <div className="w-full flex flex-col gap-5 mobile:gap-[10px]">
                            <p className="font-bold text-xl text-[#262626]">This Week</p>
                            <div className="flex flex-col gap-6 mobile:gap-3">
                                <Status followed={true} others={false} user1={{name: 'mom', pfp: 'Photo.svg'}} name2={'jgk'} profiles={['/Ellipse 472.svg', '/Ellipse 473 (1).svg' ]} />
                                <Status followed={false} others={false} user1={{name: 'janelle_becker19', pfp: 'Photo (1).svg'}} name2={'jgk'} profiles={['/Ellipse 472.svg']} />
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-[#DBDBDB]'></div>
                        <div className="w-full flex flex-col gap-5 mobile:gap-[10px]">
                            <p className="font-bold text-xl text-[#262626]">Earlier</p>
                            <div className="flex flex-col gap-6 mobile:gap-3">
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