import { LuSearch } from "react-icons/lu"
import { FaArrowRight } from "react-icons/fa"
import { useState, useMemo } from "react"
import styles from  "@/app/user/[username]/Dashboard.module.css"
import Image from "next/image"
import Link from "next/link"

interface props {
    loading: boolean,
    data:any,
}

// Define the UserData interface outside of the component
interface UserData {
    username: string;
    avatar_url: string;
    insta_name: string;
}


export default function UserDashboard({ loading, data }: props) {

    const [socialSelected, setSocialSelected] = useState<number>(3);
    //const [selected, setSelected] = useState<number>(0);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const filteredData = useMemo(() => {
        if (!data || searchQuery === '') return data;

        const filterByQuery = (list: UserData[]) => list.filter(item => 
            item.username.toLowerCase().includes(searchQuery) ||
            (item.insta_name && item.insta_name.toLowerCase().includes(searchQuery))
        );

        return {
            ...data,
            fans: filterByQuery(data.fans),
            followers: filterByQuery(data.followers),
            following: filterByQuery(data.following),
            unfollowers: filterByQuery(data.unfollowers),
        };
    }, [data, searchQuery]);

    const renderItem = (item: UserData, key: number) => (
        <div key={key} className="flex flex-row justify-between w-full py-2 border-t border-t-neutral-300/[0.3] items-center">
          <div className="flex flex-row gap-4 items-center">
            <Image src={item?.avatar_url ?? '/default-avatar.png'} // Fallback to a default image if avatar_url is not present
                alt="profile picture"
                width={40} // Corrected for actual size to match className
                height={40}
                className="w-10 h-10 rounded-full" />
            <div className="flex flex-col justify-center">
              <span className="text-lg text-neutral-700 font-semibold">{item?.insta_name || item?.username}</span>
              <span className="text-neutral-400 tracking-wider text-sm">@{item?.username}</span>
            </div>
          </div>
          <Link href={`/user/${item?.username}`} className="flex items-center justify-center text-neutral-700 hover:text-neutral-400 transition-colors mr-8">
            <FaArrowRight />
          </Link>
        </div>
      );
      
      const FollowersMemo = useMemo(() => {
        if (!filteredData) return <></>;
        return filteredData.followers.map((item: UserData, key: number) => renderItem(item, key));
    }, [filteredData]);
    
    const FollowingsMemo = useMemo(() => {
        if (!filteredData) return <></>;
        return filteredData.following.map((item: UserData, key: number) => renderItem(item, key));
    }, [filteredData]);
    
    // Repeat for FansMemo and UnfollowersMemo
    const FansMemo = useMemo(() => {
        if (!filteredData) return <></>;
        return filteredData.fans.map((item: UserData, key: number) => renderItem(item, key));
    }, [filteredData]);
    
    const UnfollowersMemo = useMemo(() => {
        if (!filteredData) return <></>;
        return filteredData.unfollowers.map((item: UserData, key: number) => renderItem(item, key));
    }, [filteredData]);
    
    return (
        <div className="flex flex-col -mt-20 px-[3%]">
            <div className="grid gap-8 pb-20" style={{ gridTemplateColumns: "70% auto" }}>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-8 h-min">
                        <section className={`basis-1/2 ${styles['card']}`}>
                            <div className="flex flex-col justify-between gap-2">
                                <div className="text-neutral-500">
                                    Recent Follower
                                </div>
                                {!loading ? <div className="flex flex-row gap-4 items-center">
                                        <Image src={data?.transactions?.last_follower?.from_user?.avatar_url}
                                            alt="pfp"
                                            width={200}
                                            height={200}
                                            className="w-10 h-10 rounded-full" />
                                        <div className="flex flex-col justify-center">
                                            <span className="text-lg text-neutral-700 font-semibold">{data?.transactions?.last_follower?.from_user?.insta_name || data?.transactions?.last_follower?.from_user?.username}</span>
                                            <span className="text-neutral-400 tracking-wider text-sm">@{data?.transactions?.last_follower?.from_user?.username}</span>
                                        </div>
                                    </div>
                                    : <div className={`${styles['loading-card']} h-[3rem]`} />}
                                {!loading ? <div className="flex flex-row gap-2 items-center text-neutral-500 mt-1">
                                    {data?.transactions?.last_follower?.timestamp}
                                </div>
                                    : <div className={`${styles['loading-card']} h-[1.5rem] mt-1`} />}
                            </div>
                        </section>
                        <section className={`basis-1/2 ${styles['card']} grid`}
                            style={{ gridTemplateColumns: "65% auto" }}>
                            <div className="flex flex-col justify-between gap-2">
                                <div className="text-neutral-500">
                                    Recent Unfollower
                                </div>
                                {!loading ? <div className="flex flex-row gap-4 items-center">
                                        <Image src={data?.transactions?.last_unfollower?.from_user?.avatar_url}
                                            alt="pfp"
                                            width={200}
                                            height={200}
                                            className="w-10 h-10 rounded-full" />
                                        <div className="flex flex-col justify-center">
                                            <span className="text-lg text-neutral-700 font-semibold">{data?.transactions?.last_unfollower?.from_user?.insta_name || data?.transactions?.last_follower?.from_user?.username}</span>
                                            <span className="text-neutral-400 tracking-wider text-sm">@{data?.transactions?.last_unfollower?.from_user?.username}</span>
                                        </div>
                                    </div>
                                    : <div className={`${styles['loading-card']} h-[3rem]`} />}
                                {!loading ? <div className="flex flex-row gap-2 items-center text-neutral-500 mt-1">
                                    {data?.transactions?.last_unfollower?.timestamp}
                                </div>
                                    : <div className={`${styles['loading-card']} h-[1.5rem] mt-1`} />}
                            </div>
                        </section>
                    </div>
                    <section className={`${styles['card']} flex flex-col overflow-y-scroll`}>
                        <span className="text-neutral-500">My Social Circle</span>
                        <div className="flex flex-row justify-between items-start">
                            <div className="flex flex-row flex-wrap gap-2 mt-2 items-center">
                                <button className={`flex flex-row items-center gap-2 border border-neutral-500/[0.5] 
                    rounded-xl py-0.5 px-4 hover:border-red-500 text-neutral-500 transition-all duration-300 z-10
                    ${socialSelected == 3 && 'bg-red-50 border-red-500'}`}
                                    onClick={() => { setSocialSelected(3) }}>
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    Doesn't follow user back
                                </button>
                                <button className={`flex flex-row items-center gap-2 border border-neutral-500/[0.5] 
                    rounded-xl py-0.5 px-4 hover:border-blue-500 text-neutral-500 transition-all duration-300 z-10
                    ${socialSelected == 2 && 'bg-blue-50 border-blue-500'}`}
                                    onClick={() => { setSocialSelected(2) }}>
                                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                                    User doesn't follow back
                                </button>
                                <div className="w-[1px] h-6 bg-slate-200"/>   
                                <button className={`flex flex-row items-center gap-2 border border-neutral-500/[0.5] 
                    rounded-xl py-0.5 px-4 hover:border-indigo-500 text-neutral-500 transition-all duration-300 z-10
                    ${socialSelected == 0 && 'bg-indigo-50 border-indigo-500'}`}
                                    onClick={() => { setSocialSelected(0) }}>
                                    <div className="w-3 h-3 rounded-full bg-indigo-500" />
                                    Followers
                                </button>
                                <button className={`flex flex-row items-center gap-2 border border-neutral-500/[0.5] 
                    rounded-xl py-0.5 px-4 hover:border-rose-500 text-neutral-500 transition-all duration-300 z-10
                    ${socialSelected == 1 && 'bg-rose-50 border-rose-500'}`}
                                    onClick={() => { setSocialSelected(1) }}>
                                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                                    Following
                                </button>                                                           
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <LuSearch />
                                <input
                                    placeholder="Search..."
                                    className="outline-none border-b border-neutral-500/[0.5]"
                                    value={searchQuery} // Bind input value to state
                                    onChange={handleSearchChange} // Update state on change
                                />
                            </div>
                        </div>
                        {!loading ? <div className="flex flex-col w-full mt-4 max-h-[400px] overflow-y-scroll">
                        {socialSelected === 0 ?
                                FollowersMemo :
                                (socialSelected === 1 ?
                                    FollowingsMemo :
                                    (socialSelected === 2 ?
                                        FansMemo :
                                        (socialSelected === 3 ? UnfollowersMemo : null)))}
                        </div>
                        :
                        <div className={`${styles['loading-card']} h-full mt-4`} />}
                    </section>
                </div>
                <div className="flex flex-col gap-4">
                    <section className={`${styles['card']} flex flex-col`}>
                        <span className="text-neutral-500">Your Account</span>
                        {!loading ? <Image src={data?.general?.avatar_url} alt="pfp" className="mt-5 w-24 h-24 self-center rounded" sizes="100px" width={0} height={0}/>
                        : <div className={`${styles['loading-card']} w-24 h-24 mt-5 self-center`}/>}
                        {!loading ? 
                        <>
                        <span className="mt-3 tracking-wider font-bold self-center text-lg text-neutral-700">{data?.general?.insta_name}</span>
                        <span className="tracking-wider self-center text-neutral-500">@{data?.general?.username}</span>
                        <div className="mt-5 grid grid-cols-2">
                            <section className="flex flex-col items-center">
                                <span className="text-neutral-700 text-2xl font-bold">{data?.general?.follower_count}</span>
                                <span className="text-neutral-500">Followers</span>
                            </section>
                            <section className="flex flex-col items-center">
                                <span className="text-neutral-700 text-2xl font-bold">{data?.general?.following_count}</span>
                                <span className="text-neutral-500">Following</span>
                            </section>
                            <div className="flex justify-center items-center pt-7">
                        <button className="h-10 p-3 bg-indigo-800 bg-opacity-10 rounded-md border border-slate-700 justify-center items-center gap-2.5 inline-flex max-w-fit">
                            <img src="/instagram_logo.svg" className="fill-slate-700 w-5 h-5"></img>
                            <span>View on Instagram</span>
                            </button>
                        </div>
                        </div>
                        </>
                        :
                        <div className={`${styles['loading-card']} w-full h-full mt-3 self-center`}/>}
                    </section>
                    <section className={`${styles['card']} flex flex-col justify-center items-center`}>
                        <span className="w-full text-neutral-600 text-lg font-medium">Report an Issue</span>
                        <span className="w-full text-gray-500 text-sm mb-6">Found a bug? Help us improve unfollowed.lol by reporting it. We appreciate you!</span>
                        <button className="h-10 p-3 bg-indigo-800 bg-opacity-10 rounded-md border border-slate-700 justify-center items-center gap-2.5 inline-flex max-w-fit">
                            <img src="/bug.svg" className="w-5 h-5"></img>
                            <span>Bug report form</span>
                            </button>
                    </section>
                </div>
            </div>
        </div>
    )

}