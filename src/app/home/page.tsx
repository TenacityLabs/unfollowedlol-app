"use client";
import { BiLogOut } from "react-icons/bi";
import { LuSettings } from "react-icons/lu";
import { SlQuestion } from "react-icons/sl";
import styles from "./Search.module.css";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const [recents, setRecents] = useState<string[]>([]);

  useEffect(() => {
    const recentStorage = localStorage.getItem("recents");
    if (recentStorage) {
      setRecents(JSON.parse(recentStorage).slice(-10)); // Get the last 10 items
    }
  }, []);

  const [search, setSearch] = useState<string>('');

  const handleSearch = () => {
    if (search) {
      // Add the new search term to the beginning of the recents array
      setRecents((prev) => {
        const updatedRecents = [search, ...prev];
        if (updatedRecents.length > 10) {
          updatedRecents.pop(); // Keep only the latest 10 searches
        }
        localStorage.setItem("recents", JSON.stringify(updatedRecents)); // Save to localStorage
        return updatedRecents;
      });

      // Redirect to the user profile
      router.push(`/user/${search}`);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <main className="relative bg-white h-screen">
      <div
        className={`${styles["top-gradient"]} rounded-b-xl text-white px-[3%] pt-4 pb-20 flex flex-col transition-all duration-300 items-center`}
      >
        <div className="flex flex-row justify-between items-center self-start w-full">
          <div className="flex flex-row gap-3 items-center">
            <Link href="/">
              <img
                src="/unfollowed_logo.png"
                alt="unfollowed.lol"
                className="w-6 h-6"
              />
            </Link>
            <Link href="/">
              <span>unfollowed.lol</span>
            </Link>
            <span className="opacity-[0.4]">/</span>
            <span>Home</span>
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
        <div
          className={`flex text-4xl font-black tracking-wider items-center justify-center mt-8`}
        >
          unfollowed.lol
        </div>
        <div className="mt-16 text-white flex flex-col items-center w-[70vw] gap-2">
          <div className="self-start">Search an Instagram user to view their profile</div>
          <div className="flex flex-row w-full bg-white rounded">
            <input
              className={`bg-transparent w-full rounded py-2 outline-none caret-black px-4 text-black`}
              value={search}
              placeholder="Search a user..."
              onKeyDown={handleKeyPress}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className={`rainbow-button py-2 px-10 rounded text-nowrap ${
                !search && "grayscale cursor-not-allowed contrast-50"
              } transition-all duration-300`}
              onClick={handleSearch}
            >
              Analyze Profile
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles["card"]} mt-8 mx-20 mb-20`}>
        <div className="text-neutral-500 font-semibold">Recent Searches</div>
        <div className="max-h-72 mt-4 flex flex-col w-full gap-2 text-neutral-500 overflow-auto">
          {recents.length > 0 ? (
            recents.slice(0, 10).map((item, key) => (
              <Link
                href={`/user/${item}`}
                key={key}
                className="flex flex-row justify-between items-center pr-8"
              >
                {item}
                <FaArrowRight />
              </Link>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center p-12 w-full gap-6 overflow-auto">
              <Image
                src="/Person.png"
                alt="Person"
                sizes="50vw"
                width={0}
                height={0}
                className="h-[100px] w-auto"
              />
              <span className="text-center">
                Process a user profile and <br /> favourite them to add them here
              </span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
