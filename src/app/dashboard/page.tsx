"use client"
import { BiLogOut } from "react-icons/bi";
import { SlQuestion } from "react-icons/sl";
import Image from "next/image";
import styles from "./Dashboard.module.css"
import { useEffect, useRef, useMemo, useState } from "react";
import UserDashboard from "@/components/dashboard/UserDashboard";
import { IoReload } from "react-icons/io5";
import { LuMenuSquare, LuSettings } from "react-icons/lu";
import UnprocessedDashboard from "@/components/dashboard/UnprocessedDashboard";

export default function Dashboard() {
  //is this just visual?
  const [loadPercent, setLoadPercent] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [processed, setProcessed] = useState<boolean>(false);

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
    setProcessed(false)
  }, [loadPercent])

  useEffect(() => {
    if(localStorage.getItem("unfollowed")){
      
    }
  }, [])

  return(
    <main className="relative overflow-y-scroll">
      <div className={`${styles['top-gradient']} rounded-b-xl text-white px-[3%] pt-4 ${(loading || processed) ? "pb-28" : "pb-10"}
      flex flex-col transition-all duration-300`}>
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
      {!processed ? <UnprocessedDashboard/>
      :
      <UserDashboard loading={loading} setLoading={setLoading}/>}
    </main>
  )
}

