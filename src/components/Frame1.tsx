import '../app/globals.css';
import Status from './Status';

const Frame1 = () => {
    return ( 
        <div className="flex-1">
            <div className="flex flex-wrap justify-around items-center h-full">
                <div className="h-[90px] w-[510px]">
                    <p className="text-white text-[40px] font-bold leading-[110%]">Track your profile's followers and unfollowers</p>
                </div>
                <div>
                    <div className="h-[800px] w-[435px] bg-white rounded-[20px] p-[30px] flex flex-col gap-[20px] self-end">
                        <p className="text-[#000F4E] text-[30px] font-bold"><span className="text-[#7993FF]">Un</span>followed.lol</p>
                        <div className="w-full flex flex-col gap-[12px]">
                            <p className="font-bold text-[20px] text-[#262626]">Yesterday</p>
                            <div className="flex flex-col gap-[24px]">
                                <Status followed={false} others={true} user1={{name: 'jessica121', pfp: 'Photo (5).svg'}} name2={'jgk'} profiles={['/Ellipse 472.svg', '/Ellipse 473 (1).svg', '/Ellipse 473.svg' ]} />
                            </div>
                            
                        </div>
                        <div className='w-full h-[1px] bg-[#DBDBDB]'></div>
                        <div className="w-full flex flex-col gap-[12px]">
                            <p className="font-bold text-[20px] text-[#262626]">This Week</p>
                            <div className="flex flex-col gap-[24px]">
                                <Status followed={true} others={false} user1={{name: 'mom', pfp: 'Photo.svg'}} name2={'jgk'} profiles={['/Ellipse 472.svg', '/Ellipse 473 (1).svg']} />
                                <Status followed={false} others={false} user1={{name: 'janelle_becker19', pfp: 'Photo (1).svg'}} name2={'jgk'} profiles={['/Ellipse 472.svg']} />
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-[#DBDBDB]'></div>
                        <div className="w-full flex flex-col gap-[12px]">
                            <p className="font-bold text-[20px] text-[#262626]">Earlier</p>
                            <div className="flex flex-col gap-[24px]">
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
 
export default Frame1;