"use client"
import { BiLogOut } from "react-icons/bi";
import { SlQuestion } from "react-icons/sl";
import styles from "@/app/user/[username]/Dashboard.module.css"
import { useEffect, useRef, useState } from "react";
import UserDashboard from "@/components/dashboard/UserDashboard";
import { IoReload } from "react-icons/io5";
import { LuMenuSquare, LuSettings } from "react-icons/lu";
import UnprocessedDashboard from "@/components/dashboard/UnprocessedDashboard";
import { useParams } from "next/navigation";

export default function Dashboard() {
  //is this just visual?
  const params = useParams<{ username: string }>();

  const [loadPercent, setLoadPercent] = useState<number>(0);
  const [processed, setProcessed] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [data, setData] = useState<any>(null)

  const modalRef = useRef<any>(null)

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setData(null)
    setLoadPercent(0);
    fetch(`http://127.0.0.1:8000/user/${params.username}/`)
      .then(response => response.json())
      .then(data => {
        if(data.error){
          setData(null)
          setLoadPercent(100);
          setProcessed(false)
        }
        else{
          console.log(data)
          setData(data)
          setModalOpen(true);
          setLoadPercent(100);
          setProcessed(true)
        }
      })
      .catch(error => {
        console.error(error)
      });
  }

  useEffect(() => {
    const handleModalClick = (e:MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalOpen(false)
      }
    }

    document.addEventListener("mousedown", handleModalClick)
    return () => {
      document.removeEventListener("mousedown", handleModalClick)
    }
  }, [])

  useEffect(() => {
    const recentStorage = localStorage.getItem("recents");
    if (recentStorage) {
      let clone = JSON.parse(recentStorage) as string[]
      if (clone.includes(params.username)) {
        clone = [params.username, ...clone.filter(item => item !== params.username)]
      }
      else clone = [params.username, ...clone]
      if (clone.length > 10) clone.splice(10)
      localStorage.setItem("recents", JSON.stringify(clone))
    }
  }, [])

  useEffect(() => {
    const min = 8;
    const variance = 10;
    if (loadPercent < 100) {
      setTimeout(() => {
        const next = Math.min(loadPercent + Math.round(min + variance * Math.random()), 95);
        setLoadPercent(next)
      }, 200)
    }
  }, [loadPercent])

  return (
    <>
      <main className="relative overflow-y-scroll">
        <div className={`${styles['top-gradient']} rounded-b-xl text-white px-[3%] pt-4 ${(loadPercent < 100 || processed) ? "pb-28" : "pb-10"}
      flex flex-col transition-all duration-300`}>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-3 items-center">
              <LuMenuSquare />
              <span>unfollowed.lol</span>
              <span className="opacity-[0.4]">/</span>
              <span>{params.username}</span>
            </div>
            <div className="flex flex-row gap-3 items-center text-xl">
              <button>
                <LuSettings />
              </button>
              <button>
                <SlQuestion />
              </button>
              <button>
                <BiLogOut />
              </button>
            </div>
          </div>
          <div className={`flex font-semibold mt-8 tracking-wider h-[5rem] items-end`}>
            {loadPercent < 100 ?
              <div className="flex flex-col w-full">
                <span className="text-[2.15rem] ">
                  Analyzing...
                </span>
                <div className={`flex flex-row items-center mt-3 gap-6 transition-all origin-top
            duration-500 ease-out
            ${loadPercent < 100 ? "h-[1rem] opacity-1" : "h-0 opacity-0"}`}>
                  <div className="tracking-widest text-nowrap">
                    <span>{loadPercent}%</span> COMPLETE
                  </div>
                  <div className={`h-1.5 bg-gradient-to-r ${styles['analyze-loadingbar']}
              rounded-full transition-all duration-500 ease-in`}
                    style={{ width: `${loadPercent}%` }} />
                </div>
              </div>
              :
              <div className="flex flex-col w-full">
                <span className="text-[2.15rem]">Mike&apos;s Dashboard</span>
                <div className="flex flex-row gap-2 items-center">
                  <span className="text-[1rem]"> REFRESHED 1 MINUTE AGO </span>
                  <button onClick={getData}
                    className="hover:rotate-[270deg] transition-all delay-150 duration-500"><IoReload /></button>
                </div>
              </div>}
          </div>
        </div>
        { !(loadPercent < 100) && !processed ? <UnprocessedDashboard />
          :
          <UserDashboard loading={loadPercent < 100} data={data}/>}
      </main>
      <div className={`fixed inset-0 bg-black/[0.85] backdrop-blur-sm flex items-center justify-center z-[9999] 
      transition-opacity duration-500 ${!modalOpen && "pointer-events-none"}`}
      style={{opacity: modalOpen ? 1 : 0}}>
        <div className="bg-white min-w-[40%] px-12 py-20 rounded flex items-center justify-center flex-col gap-3" ref={modalRef}>
          <span className="font-black text-3xl text-neutral-700 text-center">Welcome to unfollowed.lol</span>
          <span className="text-neutral-500">Let&apos;s start with a quick guide to your dashboard.</span>
          <button className="rainbow-button px-12 py-3 rounded text-lg mt-10">Take the tour</button>
          <span className="text-neutral-500 hover:underline cursor-pointer" onClick={() => {setModalOpen(false)}}>Skip tutorial</span>
        </div>
      </div>
    </>
  )
}

