import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";

import { pledges } from "../data/pledges";

import Card from "./Card";
import BackThisProject from "./BackThisProject";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function FirstCard() {
  const { data, error } = useSWR<Array<typeof pledges[0]>, string>(
    "/api/pledges",
    fetcher
  );
  const [bookMark, setBookMark] = useState(false);
  const [isOpen, setOpen] = useState(false);
  function handleModel() {
    setOpen(!isOpen);
  }
  return (
    <>
      <div className="max-w-screen-md">
        <Card>
          <div className="flex flex-col md:text-center justify-center items-center ">
            <div className="absolute -top-6">
              <Image
                src="/logo-mastercraft.svg"
                alt="Logo"
                height={50}
                width={50}
              />
            </div>
            <h1 className="text-3xl md:text-xl  font-bold font-commissioner mt-7">
              Mastercraft Bamboo Monitor Riser
            </h1>
            <p className="text-lg text-gray-500 pt-4  font-commissioner md:text-sm">
              A beautiful & handcrafted monitor stand to reduce neck and eye
              strain.
            </p>
            <div className="flex w-full justify-between mt-9  mb-0">
              <button
                className="bg-primary-color-dark text-white rounded-full p-4 px-9 "
                onClick={handleModel}
              >
                Back this project
              </button>
              <button
                className="flex justify-center items-center bg-gray-100 text-white rounded-full"
                onClick={() => {
                  setBookMark(!bookMark);
                }}
              >
                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <circle
                      fill={bookMark ? "#2F2F2F" : "hsl(176, 72%, 28%)"}
                      cx="28"
                      cy="28"
                      r="28"
                    />
                    <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
                  </g>
                </svg>
                <span
                  className={
                    bookMark
                      ? "text-gray-500 font-bold pl-4 pr-5 text-lg md:hidden"
                      : "text-primary-color-dark font-bold pl-4 pr-5 text-lg md:hidden"
                  }
                >
                  {bookMark ? "Bookmark" : "Bookmarked"}
                </span>
              </button>
            </div>
          </div>
        </Card>
      </div>
      {isOpen && (
        <BackThisProject onCloseModel={handleModel} data={data} error={error} />
      )}
    </>
  );
}
