"use client"
import { BiLogOut } from "react-icons/bi";
import { SlQuestion } from "react-icons/sl";
import styles from "@/app/user/[username]/Dashboard.module.css"
import { useEffect, useRef, useState } from "react";
import UserDashboard from "@/components/dashboard/UserDashboard";
import { LuSettings } from "react-icons/lu";
import UnprocessedDashboard from "@/components/dashboard/UnprocessedDashboard";
import { useParams } from "next/navigation";
import Link from "next/link";
import ApiError from "./ApiError";

export default function Dashboard() {
  const params = useParams<{ username: string }>();
  
  const [loadPercent, setLoadPercent] = useState<number>(0);
  const [processed, setProcessed] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  // Introduce a new state variable for error tracking
  const [hasError, setHasError] = useState<boolean>(false);

  const modalRef = useRef<any>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setData(null);
    setLoadPercent(0);
    setHasError(false); // Reset error state on new fetch attempt
    fetch(`https://api.unfollowed.lol:8000/user/${params.username}/`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.error) {
          if (data.error === "User not found") {
            setData(null);
            setLoadPercent(100);
            setProcessed(false);
          } else {
            setHasError(true);
          }
        } else {
          if (!localStorage.getItem("firstTime")) {
            localStorage.setItem("firstTime", "true");
            setModalOpen(true);
          }
          setData(data);
          setLoadPercent(100);
          setProcessed(true);
        }
      })
  };

  function formatDate(dateString: string): string {
    const date = new Date(dateString + 'Z'); // Parse as UTC
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // User's time zone
    const options: Intl.DateTimeFormatOptions = {
      timeZone: userTimeZone,
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    };
    const getDaySuffix = (day: number): string => {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };
    const formattedParts = new Intl.DateTimeFormat('en-US', options).formatToParts(date);
    const month = formattedParts.find(part => part.type === "month")?.value;
    const day = formattedParts.find(part => part.type === "day")?.value;
    const year = formattedParts.find(part => part.type === "year")?.value;
    const hour = formattedParts.find(part => part.type === "hour")?.value;
    const minute = formattedParts.find(part => part.type === "minute")?.value;
    const dayPeriod = formattedParts.find(part => part.type === "dayPeriod")?.value;
    const daySuffix = getDaySuffix(parseInt(day!));
    return `${month} ${day}${daySuffix} ${year}, ${hour}:${minute} ${dayPeriod}`;
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
    
    if(!data && loadPercent < 100){
      const timer = setTimeout(() => {
        setLoadPercent(prev => Math.min(prev + Math.round(min + variance * Math.random()), 99));
      }, 200);
  
      return () => clearTimeout(timer);
    }
  
    if(data) {
      setLoadPercent(100);
    }
  }, [loadPercent, data]); 
  
  if (hasError) {
    return <ApiError />;
  }

  return (
    <>
      <main className="relative overflow-y-scroll">
        <div className={`${styles['top-gradient']} rounded-b-xl text-white px-[3%] pt-4 ${(loadPercent < 100 || processed) ? "pb-28" : "pb-10"}
      flex flex-col transition-all duration-300`}>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-3 items-center">
              <Link href="/home">
              <img src="/unfollowed_logo.png" alt="unfollowed.lol logo" className="w-6 h-6" />
              </Link>
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
              <div className="flex flex-row justify-between items-center w-full"> 
              <div className="flex flex-col w-full">
                <span className="text-[2.15rem]">{data?.instanme || data?.username || params?.username}&apos;s Dashboard</span>
                <div className="flex flex-row gap-2 items-center" style={{ display: processed ? 'flex' : 'none' }}>
                  <span className="text-[1rem]">LAST PROCESSED: </span>
                  <span className="text-[1rem]">{processed ? formatDate(data?.general.last_updated) : null}</span>
                </div>
              </div>
              <Link href={`https://www.instagram.com/${params.username}/`}>
                <div className="p-2 h-12 w-52 border rounded-[10px] justify-center items-center gap-3 inline-flex">
                  <img src="/instagram.svg" className="fill-white w-5 h-5"></img>
                  <div className="text-center text-white text-xl font-normal min-w-fit">Reprocess User</div>
                </div>
              </Link>
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

