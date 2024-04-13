import styles from  "@/app/user/[username]/Dashboard.module.css"
import Image from "next/image"
import Link from "next/link"
import { BsInstagram } from "react-icons/bs"

type UnprocessedDashboardProps = {
    username: string;
};

export default function UnprocessedDashboard({username}: UnprocessedDashboardProps) {
    return(
        <div className={`${styles['card']} m-8`}>
            <div className="inset-0 p-8 flex flex-col gap-4">
                <span className="text-neutral-700 text-2xl font-semibold">Looks like you&apos;re the first one here</span>
                <span className="text-neutral-500 text-lg">This user has not yet been processed. Use the unfollowed.lol Google Chrome extension on Instagram to process their information.</span>
                <div className="grid grid-cols-3 gap-[5%] mt-4 px-[5%]">
                    <section className="flex flex-col gap-4 items-center">
                        <Image src="/tutorial/step1.png" alt="step1" width={0} height={0} sizes="33vw" className="w-full h-auto rounded"/>
                        <span className="text-neutral-700">1. Sign into Instagram using Google Chrome and visit @jessica121’s page.</span>
                        <span className="text-indigo-500 italic">Note: You need to be following private accounts to process them</span>
                    </section>
                    <section className="flex flex-col gap-4 items-center">
                        <Image src="/tutorial/step2.png" alt="step2" width={0} height={0} sizes="33vw" className="w-full h-auto rounded"/>
                        <span className="text-neutral-700">2. Click on the unfollowed.lol Google Chrome extension.</span>
                    </section>
                    <section className="flex flex-col gap-4 items-center">
                        <Image src="/tutorial/step3.png" alt="step3" width={0} height={0} sizes="33vw" className="w-full h-auto rounded"/>
                        <span className="text-neutral-700">3. Process the user profile and come back to this page. Tada!</span>
                    </section>
                </div>
                <div className="flex items-center justify-center">
                    <Link className="cursor-pointer" href={`https://www.instagram.com/${username}`}>
                    <button className={`rainbow-button text-xl tracking-wide flex flex-row items-center gap-3 px-10 py-3 rounded cursor-pointer`}>
                        <BsInstagram/>
                        Go To Instagram
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}