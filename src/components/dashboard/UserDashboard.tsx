import { BiSolidRightDownArrowCircle, BiSolidRightTopArrowCircle } from "react-icons/bi"
import { BsPersonFillDown, BsPersonFillUp } from "react-icons/bs"
import { LuSearch } from "react-icons/lu"
import { FaArrowRight } from "react-icons/fa"
import { useState, useEffect, useMemo } from "react"
import styles from  "@/app/user/[username]/Dashboard.module.css"
import Image from "next/image"
import Link from "next/link"

interface props {
    loading: boolean,
    data:any,
}

export default function UserDashboard({ loading, data }: props) {

    const [socialSelected, setSocialSelected] = useState<number>(0);
    //const [selected, setSelected] = useState<number>(0);

    const FollowersMemo = useMemo(() => {
        if(!data) return <></>
        return data.followers.map((item:any, key:number) => {
            return (
                <div key={key} className="flex flex-row justify-between w-full py-2 border-t border-t-neutral-300/[0.3] items-center">
                    <div className="flex flex-row gap-4 items-center">
                        <Image src={item?.avatar_url}
                            alt="pfp"
                            width={200}
                            height={200}
                            className="w-10 h-10 rounded-full" />
                         <div className="flex flex-col justify-center">
                            <span className="text-lg text-neutral-700 font-semibold">{item?.insta_name || item?.username}</span>
                            <span className="text-neutral-400 tracking-wider text-sm">@{item?.username}</span>
                        </div>
                    </div>
                    <Link href={`/user/${item?.insta_name}`}
                    className="flex items-center justify-center text-neutral-700 hover:text-neutral-400 transition-colors mr-8">
                        <FaArrowRight />
                    </Link>
                </div>
            )
        })
    }, [data])

    const FollowingsMemo = useMemo(() => {
        if(!data) return <></>
        return data.following.map((item:any, key:number) => {
            return (
                <div key={key} className="flex flex-row justify-between w-full py-2 border-t border-t-neutral-300/[0.3] items-center">
                    <div className="flex flex-row gap-4 items-center">
                        <Image src={item?.avatar_url}
                            alt="pfp"
                            width={200}
                            height={200}
                            className="w-10 h-10 rounded-full" />
                        <div className="flex flex-col justify-center">
                            <span className="text-lg text-neutral-700 font-semibold">{item?.insta_name || item?.username}</span>
                            <span className="text-neutral-400 tracking-wider text-sm">@{item?.username}</span>
                        </div>
                    </div>
                    <Link href={`/user/${item?.insta_name}`}
                    className="flex items-center justify-center text-neutral-700 hover:text-neutral-400 transition-colors mr-8">
                        <FaArrowRight />
                    </Link>
                </div>
            )
        })
    }, [data])

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
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-2 mt-2">
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
                                    className="outline-none border-b border-neutral-500/[0.5]" />
                            </div>
                        </div>
                        {!loading ? <div className="flex flex-col w-full mt-4 max-h-[400px] overflow-y-scroll">
                            {socialSelected === 0 ?
                                FollowersMemo : FollowingsMemo}
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
                        </div>
                        </>
                        :
                        <div className={`${styles['loading-card']} w-full h-full mt-3 self-center`}/>}
                    </section>
                    <section className={`${styles['card']} flex flex-col`}>
                        
                    </section>
                </div>
            </div>
        </div>
    )

}