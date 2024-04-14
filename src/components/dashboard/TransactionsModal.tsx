import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface UserData {
    username: string;
    avatar_url: string;
    insta_name: string;
}

interface TransactionData {
    from_user: UserData;
    timestamp: string;
    action: string;
}

interface TransactionsModalProps {
    showFollowers: boolean;
    setShowFollowers: (value: boolean) => void;
    showUnfollowers: boolean;
    setShowUnfollowers: (value: boolean) => void;
    data: any;
}

const TransactionsModal = ({ showFollowers, setShowFollowers, showUnfollowers, setShowUnfollowers, data }: TransactionsModalProps) => {

    const followers = showFollowers ? 'Followers' : 'Unfollowers';
    const transactions = showFollowers ? data?.transactions.followers_all : data?.transactions.unfollowers_all;

    const renderTransactions = (item: TransactionData, key: number) => (    
        <div key={key} className={`flex flex-row justify-between py-2 border-t-neutral-300/[0.3] items-center ${key === 0 ? '' : 'border-t'}`}>
            <div className="flex flex-row gap-4 items-center">
                <Image src={item?.from_user.avatar_url ?? '/default-avatar.png'}
                    alt="profile picture"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full" />
                <div className="flex flex-col justify-center">
                    <Link href={`https://www.instagram.com/${item.from_user.username}/`} target="_blank">
                        <span className="text-lg text-neutral-700 font-semibold">{item?.from_user.insta_name || item?.from_user.username}</span>
                    </Link>
                    <span className="text-neutral-400 tracking-wider text-sm">@{item?.from_user.username}</span>
                </div>
            </div> 
            <div className="flex gap-10 items-center">
            {item.action} {item.timestamp}
            <Link href={`https://www.instagram.com/${item.from_user.username}/`} target="_blank">
                    <button className="h-8 px-3.5 py-2 bg-violet-400 bg-opacity-10 rounded-full justify-center items-center gap-2.5 inline-flex max-w-fit">
                        <img src="/instagram_logo.svg" className="w-3 h-3"></img>
                        <span className="text-xs font-semibold">Unfollow</span>
                    </button>
                </Link>
                    <Link href={`/user/${item?.from_user.username}`} className="flex items-center justify-center text-neutral-700 hover:text-neutral-400 transition-colors mr-8 gap-5">
                        <span className="text-sm">Process profile</span>
                        <FaArrowRight />
                    </Link>
                </div>    
        </div>
    );

    const handleKeyDown = (event: { key: string }) => {
        if (event.key === 'Escape') {
            setShowFollowers(false);
            setShowUnfollowers(false);
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        const followersModal = document.getElementById('followersModal') as HTMLElement | null;
        if (followersModal && !followersModal.contains(event.target as Node)) {
            setShowFollowers(false);
            setShowUnfollowers(false);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (!showFollowers && !showUnfollowers) return null;

    return (
        <div className={`fixed inset-0 bg-black/[0.85] backdrop-blur-sm z-[9999] transition-opacity duration-500 modal-overlay`}>
            <section className="flex flex-col bg-white rounded-lg m-20 p-7 max-h-5/6 relative"  id='followersModal'>
                <div className="flex justify-between items-center">
                    <span className="text-neutral-500">{followers}</span>
                    <Image src="/exit.svg" alt="close" width={20} height={20} onClick={() => { setShowFollowers(false); setShowUnfollowers(false); }} className="cursor-pointer"/>
                </div>
                
                <div className="overflow-auto first:border-none">
                    {transactions.map((item: TransactionData, key: number) => (
                        renderTransactions(item, key)
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TransactionsModal;