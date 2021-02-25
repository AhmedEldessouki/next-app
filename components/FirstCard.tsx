import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";

import { pledges } from "../data/pledges";

import Card from "./Card";
import SuccessModal from "./SuccessModal";
import BackThisProject from "./BackThisProject";
import ProjectCard from "./ProjectCard";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function FirstCard() {
  const { data, error } = useSWR<Array<typeof pledges[0]>, string>(
    "/api/pledges",
    fetcher
  );
  const [isChecked, setChecked] = useState([false, false, false, false]);
  const [bookMark, setBookMark] = useState(false);
  return (
    <>
      <div className="-mt-28  z-10 relative max-w-screen-md">
        <Card>
          <div className="relative -top-20">
            <Image
              src="/logo-mastercraft.svg"
              alt="Logo"
              height={50}
              width={50}
            />
          </div>
          <div className="-mt-11">
            <h1 className="text-3xl font-bold font-commissioner">
              Mastercraft Bamboo Monitor Riser
            </h1>
            <p className="text-lg text-gray-500 pt-4  font-commissioner ">
              A beautiful & handcrafted monitor stand to reduce neck and eye
              strain.
            </p>
            <div className="flex my-2 justify-between mt-9  mb-0">
              <button className="bg-primary-color-dark text-white rounded-full p-4 px-9 ">
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
                      ? "text-gray-500 font-bold pl-4 pr-5 text-lg"
                      : "text-primary-color-dark font-bold pl-4 pr-5 text-lg"
                  }
                >
                  {bookMark ? "Bookmark" : "Bookmarked"}
                </span>
              </button>
            </div>
          </div>
        </Card>
      </div>
      <BackThisProject>
        {data
          ? data.map(
              (
                { id, title, body, pledge, availableSpots }: typeof pledges[0],
                i
              ) => (
                <ProjectCard
                  key={id}
                  title={title}
                  pledge={pledge as number}
                  body={body}
                  isChecked={isChecked[i]}
                  onSelect={() => {
                    console.log(`[Clicked]: `, isChecked[i]);
                    setChecked([]);
                    if (isChecked.find((item) => item === true)) {
                      const old = isChecked.indexOf(true);
                      isChecked.splice(old, 1, false);
                    }
                    isChecked.splice(i, 1, !isChecked[i]);
                    setChecked([...isChecked]);
                  }}
                  availableSpots={availableSpots}
                />
              )
            )
          : error}
      </BackThisProject>
      {/* <SuccessModal /> */}
    </>
  );
}
