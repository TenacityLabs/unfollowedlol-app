import { BiLogOut } from "react-icons/bi"
import { LuMenuSquare, LuSettings } from "react-icons/lu"
import { SlQuestion } from "react-icons/sl"
import styles from "./Search.module.css"

export default function Search(){
    return (
        <main className="relative overflow-y-scroll">
        <div className={`${styles['top-gradient']} rounded-b-xl text-white px-[3%] pt-4 pb-28
        flex flex-col transition-all duration-300 items-center`}>
          <div className="flex flex-row justify-between items-center self-start w-full">
            <div className="flex flex-row gap-3 items-center">
              <LuMenuSquare/>
              <span>unfollowed.lol</span>
              <span className="opacity-[0.4]">/</span>
              <span>Search</span>
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
          <div className={`flex text-3xl font-black tracking-wider items-center justify-center mt-8`}>
            unfollowed.lol
          </div>
          <div className="mt-20 text-white flex flex-col items-center w-[70vw] gap-2">
            <div className="self-start">
                Search an Instagram user to process their profile
            </div>
            <div className="flex flex-row w-full bg-white rounded">
                <input className="bg-transparent w-full rounded py-2 outline-none caret-black px-4 text-black"/>
                <button className="rainbow-button py-2 px-10 rounded text-nowrap">
                    Analyze Profile
                </button>
            </div>
          </div>
        </div>
      </main>
    )
}