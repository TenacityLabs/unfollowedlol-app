import React, { useMemo } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { SocialDashboardProps, UserData } from './types';
import UserAvatar from './UserAvatar';

function SocialDashboard({ filteredData, socialSelected, data }: SocialDashboardProps) {
    const renderItem = (item: UserData, key: number) => (
        <div key={key} className={`flex flex-row justify-between w-full py-2 border-t-neutral-300/[0.3] items-center ${key === 0 ? '' : 'border-t'}`}>
            <div className="flex flex-row gap-4 items-center">
                <UserAvatar src={item?.avatar_url ?? '/default-avatar.png'}
                    alt="profile picture"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full" />
                <div className="flex flex-col justify-center">
                    <Link href={`https://www.instagram.com/${item.username}/`} target="_blank">
                        <span className="text-lg text-neutral-700 font-semibold">{item?.insta_name || item?.username}</span>
                    </Link>
                    <span className="text-neutral-400 tracking-wider text-sm">@{item?.username}</span>
                </div>
            </div>
            <div className="flex gap-10 items-center">
                <Link href={`https://www.instagram.com/${item.username}/`} target="_blank">
                    <button className="h-8 px-3.5 py-2 bg-violet-400 bg-opacity-10 rounded-full justify-center items-center gap-2.5 inline-flex max-w-fit">
                        <img src="/instagram_logo.svg" className="w-3 h-3"></img>
                        <span className="text-xs font-semibold">Unfollow</span>
                    </button>
                </Link>
                <Link href={`/user/${item?.username}`} className="flex items-center justify-center text-neutral-700 hover:text-neutral-400 transition-colors mr-8 gap-5">
                    <span className="text-sm">Process profile</span>
                    <FaArrowRight />
                </Link>
            </div>
        </div>
    );

    const empty = <div className={`flex flex-col w-full gap-10 justify-center items-center text-neutral-500 text-2xl ${data?.transactions?.last_follower?.from_user || data?.transactions?.last_unfollower?.from_user ? 'h-96' : 'h-128'}`}>
        <UserAvatar src="/Person.png" alt="Person" width={0} height={0} className="h-[100px] w-auto"/>
        <span>Nothing to see here!</span>
        </div>;

    const memoizedContent = useMemo(() => {
        const categoryMap: { [key: number]: string } = {
            0: 'followers',
            1: 'following',
            2: 'fans',
            3: 'unfollowers'
        };
        const category = categoryMap[socialSelected];
        if (filteredData[category].length === 0) return empty;
        return filteredData[category].map((item: UserData, key: number) => renderItem(item, key));
    }, [filteredData, socialSelected]);

    
    return (
        <div className={`${data?.transactions?.last_follower?.from_user || data?.transactions?.last_unfollower?.from_user ? 'h-96' : 'h-128'}`}>
            {memoizedContent}
        </div>
    );
}

export default SocialDashboard;
