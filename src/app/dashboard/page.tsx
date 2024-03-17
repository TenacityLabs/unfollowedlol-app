"use client"

import { LuMenuSquare } from "react-icons/lu";
import { IoReload } from "react-icons/io5";
import { BsPersonFillUp } from "react-icons/bs";
import { BsPersonFillDown } from "react-icons/bs";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { BiSolidRightDownArrowCircle } from "react-icons/bi";

import styles from "./Dashboard.module.css"
import { useEffect, useRef, useState } from "react";

export default function Dashboard() {
  //is this just visual?
  const [loadPercent, setLoadPercent] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false)

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

  return(
    <main className="relative overflow-y-scroll">
      <div className={`${styles['top-gradient']} rounded-b-xl text-white px-[3%] pt-4 pb-28
      flex flex-col`}>
        <div className="flex flex-row gap-3 items-center">
          <LuMenuSquare/>
          <span>unfollowed.lol</span>
          <span className="opacity-[0.4]">/</span>
          <span>mikemonroe</span>
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
              <div className={`h-[6px] bg-gradient-to-r ${styles['analyze-loadingbar']}
              rounded-full transition-all duration-500 ease-in-out`}
              style={{width: `${loadPercent}%`}}/>
            </div>
          </div>
          :
          <div className="flex flex-col w-full">
            <span className="text-[2.15rem]">Mike's Dashboard</span>
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
                    <div className="flex flex-row gap-1 text-green-500 items-center">
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
            <section className={`${styles['card']} flex flex-col h-full relative`}>
              <span className="text-neutral-500">Followers</span>
              {!loading ? <span className="text-neutral-700 text-2xl font-bold">12.7k</span>
              : <div className={`${styles['loading-card-flex']} w-[6rem] h-[2rem]`}/>}
              {!loading ? <div className="mt-1 flex flex-row gap-2 items-center text-neutral-500">
                <div className="flex flex-row gap-1 text-green-500 items-center">
                  <BiSolidRightTopArrowCircle/> <span className="font-bold">10.7%</span>
                </div>
                <span className="text-[0.9rem]">SINCE LAST YEAR</span>
              </div>
              : <div className={`${styles['loading-card-flex']} mt-2 w-[10rem] h-[1.5rem]`}/>}
            </section>
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
              <span className="text-neutral-500">I don't follow back</span>
              <div className="flex flex-row mt-2 items-center">
                {!loading ? <span className="text-neutral-700 text-2xl font-bold">123</span>
                : <div className={`${styles['loading-card-flex']} w-[4rem] h-[2.5rem]`}/>}
                {!loading ? <div className="ml-5 flex flex-col text-neutral-500">
                  <div className="flex flex-row gap-1 text-green-500 items-center">
                    <BiSolidRightTopArrowCircle/> <span className="font-bold">7.3%</span>
                  </div>
                  <span className="text-[0.9rem]">SINCE LAST WEEK</span>
                </div>
                : <div className={`${styles['loading-card-flex']} ml-3 w-[6rem] h-[2.5rem]`}/>}
              </div>
            </section>
            <section className={`${styles['card']} flex flex-col`}>
              <span className="text-neutral-500">Don't follow me back</span>
              <div className="flex flex-row mt-2 items-center">
                {!loading ? <span className="text-neutral-700 text-2xl font-bold">42</span>
                : <div className={`${styles['loading-card-flex']} w-[4rem] h-[2.5rem]`}/>}
                {!loading ? <div className="ml-5 flex flex-col text-neutral-500">
                  <div className="flex flex-row gap-1 text-red-500 items-center">
                    <BiSolidRightTopArrowCircle/> <span className="font-bold">7.3%</span>
                  </div>
                  <span className="text-[0.9rem]">SINCE LAST WEEK</span>
                </div>
                : <div className={`${styles['loading-card-flex']} ml-3 w-[6rem] h-[2.5rem]`}/>}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

