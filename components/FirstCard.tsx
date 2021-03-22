/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";

import { pledges } from "../data/pledges";

import Card from "./Card";
import BackThisProject from "./BackThisProject";
import ProjectCardMainPage from "./ProjectCardMainPage";
import FullScreenBg from "./FullScreenBg";
import SuccessModal from "./SuccessModal";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function FirstCard() {
  const { data, error } = useSWR<Array<typeof pledges[0]>, string>(
    "/api/pledges",
    fetcher
  );
  const [bookMark, setBookMark] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isSuccessful, setSuccessful] = useState(false);

  function handleModel() {
    setOpen(!isOpen);
  }
  function handleSuccessModel() {
    setSuccessful(!isSuccessful);
  }
  return (
    <>
      <div className="max-w-screen-md w-6/12 lg:w-8/12 md:w-80 flex flex-col gap-5">
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
        <Card>
          <div className="flex flex-col gap-5 pb-5">
            <h1 className="text-black text-lg font-bold">About this project</h1>
            <p className="text-gray-500 md:text-sm">
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.
            </p>

            <p className="text-gray-500 md:text-sm">
              Featuring artisan craftsmanship, the simplicity of design creates
              extra desk space below your computer to allow notepads, pens, and
              USB sticks to be stored under the stand.
            </p>

            {data
              ? data.map(
                  ({
                    id,
                    title,
                    body,
                    pledge,
                    availableSpots,
                  }: typeof pledges[0]) => {
                    if (title !== "Pledge with no reward")
                      return (
                        <ProjectCardMainPage
                          key={id}
                          title={title}
                          pledge={pledge as number}
                          body={body}
                          availableSpots={availableSpots}
                          handleClick={handleSuccessModel}
                        />
                      );
                    return null;
                  }
                )
              : error}
          </div>
        </Card>
      </div>
      {(isSuccessful || isOpen) && (
        <>
          <FullScreenBg
            handleClick={() => {
              if (isSuccessful) {
                handleSuccessModel();
              } else {
                handleModel();
              }
            }}
          />
          {isSuccessful && <SuccessModal handleClick={handleSuccessModel} />}
          {isOpen && (
            <BackThisProject
              onCloseModel={handleModel}
              onSuccess={handleSuccessModel}
              data={data}
              error={error}
            />
          )}
        </>
      )}
    </>
  );
}
