"use client"

import { LuMenuSquare, LuSearch, LuSettings } from "react-icons/lu";
import { IoReload } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { BsPersonFillUp } from "react-icons/bs";
import { BsPersonFillDown } from "react-icons/bs";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { BiSolidRightDownArrowCircle } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { SlQuestion } from "react-icons/sl";
import Image from "next/image";

import LineChart from "@/components/data-visualization/LineChart";

import styles from "./Dashboard.module.css"
import { useEffect, useRef, useMemo, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const ChartDescriptor:(...props:any[]) => JSX.Element = 
(active: boolean, metric:string, value:number|string, percent:number, interval:string, loading:boolean) => {
  return (
  <div className={`absolute flex flex-col transition-all duration-500 ease-out
  ${active ? "opacity-1 translate-x-0" : "opacity-0 translate-x-12"}`}>
    <span className="text-neutral-500">{metric}</span>
    {!loading ? <span className="text-neutral-700 text-2xl font-bold">{value}</span>
    : <div className={`${styles['loading-card-flex']} w-24 h-8`}/>}
    {!loading ? <div className="mt-1 flex flex-row gap-2 items-center text-neutral-500">
      <div className={`flex flex-row gap-1 ${percent != 0 && (percent > 0 ? "text-green-500" : "text-red-500")} 
      items-center`}>
        {percent != 0 && (percent > 0 ? <BiSolidRightTopArrowCircle/>
        : <BiSolidRightDownArrowCircle/>)} <span className="font-bold">{percent}%</span>
      </div>
      <span className="text-[0.9rem]">{interval}</span>
    </div>
    : <div className={`${styles['loading-card-flex']} mt-2 w-[10rem] h-[1.5rem]`}/>}
  </div>
  )
}

const ChartMain:(...props:any[]) => JSX.Element = 
(active:boolean, data:any, metric:string, color1:string, color2:string, id:string) => {
  return(
    <div className={`absolute transition-all duration-500 ease-out w-full origin-bottom
    ${active ? "opacity-1 scale-y-100" : "opacity-0 scale-y-0"}`}>
      <LineChart chartData={data} metric={metric} color1={color1} color2={color2} elementId={id}/>
    </div>
  )
}

const sampleFollower = {name: "Donald Trump", handle: "@realDonaldTrump", posts: 578, followers: 1542, following: 89,
followString: "2 days ago", pfp: "/assets/dtrump.jpeg"}

const sampleFollowing = {name: "Ye Kelly", handle: "@BillCosby__", posts: 7, followers: "1.2M", following: 400,
followString: "3 days ago", pfp: "/assets/ye.jpeg"}

export default function Dashboard() {
  //is this just visual?
  const [loadPercent, setLoadPercent] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [socialSelected, setSocialSelected] = useState<number>(0);
  const [selected, setSelected] = useState<number>(0);

  const followers = [
    sampleFollower, sampleFollower, sampleFollower, sampleFollower, sampleFollower, sampleFollower, sampleFollower, sampleFollower, sampleFollower, sampleFollower
  ]

  const followings = [
    sampleFollowing, sampleFollowing, sampleFollowing, sampleFollowing, sampleFollowing, sampleFollowing, sampleFollowing, sampleFollowing, sampleFollowing, sampleFollowing, 
  ]


  useEffect(() => {
    const min = 8;
    const variance = 10;
    if(loadPercent < 100){
      setLoading(true);
      setTimeout(() => {
        const next = Math.min(loadPercent + Math.round(min + variance * Math.random()), 100);
        setLoadPercent(next)
      }, 550)
    }
    else setLoading(false);
  }, [loadPercent])

  const FollowersMemo = useMemo(() => {
    return followers.map((item, key) => {
      return(
        <div key={key} className="grid py-4 border-t border-t-neutral-300/[0.3]"
        style={{
          gridTemplateColumns: "35% 12% 12% 12% 20% auto"
        }}>
          <div className="flex flex-row gap-4">
            <Image src={item.pfp}
            alt="pfp"
            width={300}
            height={300}
            className="w-16 h-16 rounded-full"/>
            <div className="flex flex-col justify-center">
              <span className="text-xl text-neutral-700 font-semibold">{item.name}</span>
              <span className="text-neutral-400 tracking-wider">{item.handle}</span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xl text-neutral-700 font-semibold">{item.posts}</span>
            <span className="text-neutral-400 tracking-wider">Posts</span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xl text-neutral-700 font-semibold">{item.followers}</span>
            <span className="text-neutral-400 tracking-wider">Followers</span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xl text-neutral-700 font-semibold">{item.following}</span>
            <span className="text-neutral-400 tracking-wider">Following</span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xl text-indigo-500 font-semibold">{item.followString}</span>
            <span className="text-neutral-400 tracking-wider">Followed you</span>
          </div>
          <button className="flex items-center justify-center text-neutral-700 hover:text-neutral-400 transition-colors">
            <FaArrowRight/>
          </button>
        </div>
      )
    })
  }, [followers])

  const FollowingsMemo = useMemo(() => {
    return followings.map((item, key) => {
      return(
        <div key={key} className="grid py-4 border-t border-t-neutral-300/[0.3]"
        style={{
          gridTemplateColumns: "35% 12% 12% 12% 20% auto"
        }}>
          <div className="flex flex-row gap-4">
            <Image src={item.pfp}
            alt="pfp"
            width={300}
            height={300}
            className="w-16 h-16 rounded-full"/>
            <div className="flex flex-col justify-center">
              <span className="text-xl text-neutral-700 font-semibold">{item.name}</span>
              <span className="text-neutral-400 tracking-wider">{item.handle}</span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xl text-neutral-700 font-semibold">{item.posts}</span>
            <span className="text-neutral-400 tracking-wider">Posts</span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xl text-neutral-700 font-semibold">{item.followers}</span>
            <span className="text-neutral-400 tracking-wider">Followers</span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xl text-neutral-700 font-semibold">{item.following}</span>
            <span className="text-neutral-400 tracking-wider">Following</span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xl text-rose-500 font-semibold">{item.followString}</span>
            <span className="text-neutral-400 tracking-wider">You followed</span>
          </div>
          <button className="flex items-center justify-center text-neutral-700 hover:text-neutral-400 transition-colors">
            <FaArrowRight/>
          </button>
        </div>
      )
    })
  }, [followings])

  const ChartDescriptorMemo = useMemo(() => ChartDescriptor, [selected])
  const ChartMainMemo = useMemo(() => ChartMain, [selected])

  return(
    <main className="relative overflow-y-scroll">
      <div className={`${styles['top-gradient']} rounded-b-xl text-white px-[3%] pt-4 pb-28
      flex flex-col`}>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-3 items-center">
            <LuMenuSquare/>
            <span>unfollowed.lol</span>
            <span className="opacity-[0.4]">/</span>
            <span>mikemonroe</span>
          </div>
          <div className="flex flex-row gap-3 items-center text-xl">
            <button>
              <LuSettings/>
            </button>
            <button>
              <SlQuestion/>
            </button>
            <button>
              <BiLogOut/>
            </button>
          </div>
        </div>
        <div className={`flex font-semibold mt-8 tracking-wider h-[5rem] items-end`}>
          {loading ?
          <div className="flex flex-col w-full">
            <span className="text-[2.15rem] ">
              Analyzing...
            </span>
            <div className={`flex flex-row items-center mt-3 gap-6 transition-all origin-top
            duration-500 ease-out
            ${loading ? "h-[1rem] opacity-1" : "h-0 opacity-0"}`}>
              <div className="tracking-widest text-nowrap">
                <span>{loadPercent}%</span> COMPLETE
              </div>
              <div className={`h-1.5 bg-gradient-to-r ${styles['analyze-loadingbar']}
              rounded-full transition-all duration-500 ease-in`}
              style={{width: `${loadPercent}%`}}/>
            </div>
          </div>
          :
          <div className="flex flex-col w-full">
            <span className="text-[2.15rem]">Mike&apos;s Dashboard</span>
            <div className="flex flex-row gap-2 items-center">
              <span className="text-[1rem]"> REFRESHED 1 MINUTE AGO </span>
              <button onClick={() => {setLoadPercent(0)}}
              className="hover:rotate-[270deg] transition-all delay-150 duration-500"><IoReload/></button>
            </div>
          </div>}
        </div>
      </div>
      <div className="flex flex-col -mt-20 px-[3%]">
        <div className="grid gap-8 pb-20" style={{gridTemplateColumns: "70% auto"}}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-8 h-min">
              <section className={`basis-1/2 ${styles['card']} grid`}
              style={{gridTemplateColumns: "65% auto"}}>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row gap-2 items-center text-neutral-500">
                    <BsPersonFillUp/> New Followers
                  </div> 
                  {!loading ? <span className="text-[2rem] font-bold text-neutral-700">12,021</span>
                  : <div className={`${styles['loading-card']} h-[3rem]`}/>}
                  {!loading ? <div className="flex flex-row gap-2 items-center text-neutral-500">
                    <div className={`flex flex-row gap-1 text-green-500 items-center`}>
                      <BiSolidRightTopArrowCircle/> <span className="font-bold">7.3%</span>
                    </div>
                    <span className="text-[0.9rem]">SINCE LAST WEEK</span>
                  </div>
                  : <div className={`${styles['loading-card']} h-[1.5rem] mt-1`}/>}
                </div>
                {!loading ? <div className="flex items-center justify-center">
                  <img src="/assets/demo-graph.png" className="h-full w-auto"/>
                </div>
                : <div className={`${styles['loading-card']} h-full`}/>}
              </section>
              <section className={`basis-1/2 ${styles['card']} grid`}
              style={{gridTemplateColumns: "65% auto"}}>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row gap-2 items-center text-neutral-500">
                    <BsPersonFillDown/>Lost Followers
                  </div> 
                  {!loading ? <span className="text-[2rem] font-bold text-neutral-700">753</span>
                  : <div className={`${styles['loading-card']} h-[3rem]`}/>}
                  {!loading ? <div className="flex flex-row gap-2 items-center text-neutral-500">
                    <div className="flex flex-row gap-1 text-red-500 items-center">
                      <BiSolidRightTopArrowCircle/> <span className="font-bold">14.1%</span>
                    </div>
                    <span className="text-[0.9rem]">SINCE LAST WEEK</span>
                  </div>
                  : <div className={`${styles['loading-card']} h-[1.5rem] mt-1`}/>}
                </div>
                {!loading ? <div className="flex items-center justify-center">
                  <img src="/assets/demo-graph2.png" className="h-full w-auto"/>
                </div>
                : <div className={`${styles['loading-card']} h-full`}/>}
              </section>
            </div>
            <section className={`${styles['card']} flex flex-col h-full`}>
              <span className="text-neutral-500">My Social Circle</span>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 mt-2">
                  <button className={`flex flex-row items-center gap-2 border border-neutral-500/[0.5] 
                    rounded-xl py-0.5 px-4 hover:border-indigo-500 text-neutral-500 transition-all duration-300 z-10
                    ${socialSelected == 0 && 'bg-indigo-50 border-indigo-500'}`}
                    onClick={() => {setSocialSelected(0)}}>
                      <div className="w-3 h-3 rounded-full bg-indigo-500"/>
                      Followers
                  </button>
                  <button className={`flex flex-row items-center gap-2 border border-neutral-500/[0.5] 
                    rounded-xl py-0.5 px-4 hover:border-rose-500 text-neutral-500 transition-all duration-300 z-10
                    ${socialSelected == 1 && 'bg-rose-50 border-rose-500'}`}
                    onClick={() => {setSocialSelected(1)}}>
                      <div className="w-3 h-3 rounded-full bg-rose-500"/>
                      Following
                  </button>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <LuSearch/>
                  <input 
                  placeholder="Search..."
                  className="outline-none border-b border-neutral-500/[0.5]"/>
                </div>
              </div>
              <div className="flex flex-col w-full mt-4">
                {socialSelected === 0 ? 
                FollowersMemo : FollowingsMemo}
              </div>
            </section>
            {/* <section className={`${styles['card']} flex flex-col h-full`}>
              <div className="flex flex-row justify-between items-start h-[5rem]">
                <div></div>
                {ChartDescriptorMemo(selected == 0, "Followers", "12.7k", 10.6, "SINCE LAST YEAR", loading)}
                {ChartDescriptorMemo(selected == 1, "Likes", "403.2k", -12.0, "SINCE LAST YEAR", loading)}
                {ChartDescriptorMemo(selected == 2, "Comments", "980", 0, "SINCE LAST YEAR", loading)}
                <div className="flex flex-row gap-2 mt-2 items-center">
                  <button className={`flex flex-row items-center gap-2 border border-neutral-500/[0.5] 
                  rounded-xl py-0.5 px-4 hover:border-indigo-500 text-neutral-500 transition-all duration-300 z-10
                  ${selected == 0 && 'bg-indigo-50 border-indigo-500'}`}
                  onClick={() => {setSelected(0)}}>
                    <div className="w-3 h-3 rounded-full bg-indigo-500"/>
                    Followers
                  </button>
                  <button className={`flex flex-row items-center gap-2 border border-neutral-500/[0.5] 
                  rounded-xl py-0.5 px-4 hover:border-amber-500 text-neutral-500 transition-all duration-300 z-10
                  ${selected == 1 && 'bg-amber-50 border-amber-500'}`}
                  onClick={() => {setSelected(1)}}>
                    <div className="w-3 h-3 rounded-full bg-amber-500"/>
                    Likes
                  </button>
                  <button className={`flex flex-row items-center gap-2 border border-neutral-500/[0.5] 
                  rounded-xl py-0.5 px-4 hover:border-fuchsia-500 text-neutral-500 transition-all duration-300 z-10
                  ${selected == 2 && 'bg-fuchsia-50 border-fuchsia-500'}`}
                  onClick={() => {setSelected(2)}}>
                    <div className="w-3 h-3 rounded-full bg-fuchsia-500"/>
                    Comments
                  </button>
                  <button className={`flex flex-row items-center gap-2 border border-neutral-500/[0.5] 
                  rounded-full py-1 px-5 text-neutral-500 bg-indigo-100 z-10`}>
                    Last 12 months
                    <IoIosArrowDown/>
                  </button>
                </div>
              </div>
              {!loading && <div className="flex relative w-full mt-4 h-[calc(30vw_+_1rem)]">
                {ChartMainMemo(selected == 0, [], "Followers", "#6365f1", "#9193eb", "points-chart-0")}
                {ChartMainMemo(selected == 1, [], "Likes", "#f59e0b", "#f2b855", "points-chart-1")}
                {ChartMainMemo(selected == 2, [], "Comments", "#d846ef", "#e18eed", "points-chart-2")}
              </div>}
            </section> */}
          </div>
          <div className="flex flex-col gap-4">
            <section className={`${styles['card']} flex flex-col`}>
              <span className="text-neutral-500">Your Account</span>
              <img src="/assets/demo-pfp.png" className="mt-5 w-24 h-24 self-center"/> 
              <span className="mt-3 tracking-wider font-bold self-center text-lg text-neutral-700">Mike Monroe</span>
              <span className="tracking-wider self-center text-neutral-500">@mikemonroe</span>
              <div className="mt-5 grid grid-cols-3">
                <section className="flex flex-col items-center">
                  <span className="text-neutral-700 text-2xl font-bold">123</span>
                  <span className="text-neutral-500">Posts</span>
                </section>
                <section className="flex flex-col items-center">
                  <span className="text-neutral-700 text-2xl font-bold">12.7k</span>
                  <span className="text-neutral-500">Followers</span>
                </section>
                <section className="flex flex-col items-center">
                  <span className="text-neutral-700 text-2xl font-bold">784</span>
                  <span className="text-neutral-500">Following</span>
                </section>
              </div>
            </section>
            <section className={`${styles['card']} flex flex-col`}>
              <span className="text-neutral-500">I don&apos;t follow back</span>
              <div className="flex flex-row mt-2 items-center">
                {!loading ? <span className="text-neutral-700 text-2xl font-bold">123</span>
                : <div className={`${styles['loading-card-flex']} w-16 h-10`}/>}
                {!loading ? <div className="ml-5 flex flex-col text-neutral-500">
                  <div className="flex flex-row gap-1 text-green-500 items-center">
                    <BiSolidRightTopArrowCircle/> <span className="font-bold">7.3%</span>
                  </div>
                  <span className="text-[0.9rem]">SINCE LAST WEEK</span>
                </div>
                : <div className={`${styles['loading-card-flex']} ml-3 w-24 h-10`}/>}
              </div>
            </section>
            <section className={`${styles['card']} flex flex-col`}>
              <span className="text-neutral-500">Don&apos;t follow me back</span>
              <div className="flex flex-row mt-2 items-center">
                {!loading ? <span className="text-neutral-700 text-2xl font-bold">42</span>
                : <div className={`${styles['loading-card-flex']} w-16 h-10`}/>}
                {!loading ? <div className="ml-5 flex flex-col text-neutral-500">
                  <div className="flex flex-row gap-1 text-red-500 items-center">
                    <BiSolidRightTopArrowCircle/> <span className="font-bold">7.3%</span>
                  </div>
                  <span className="text-[0.9rem]">SINCE LAST WEEK</span>
                </div>
                : <div className={`${styles['loading-card-flex']} ml-3 w-24 h-10`}/>}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

