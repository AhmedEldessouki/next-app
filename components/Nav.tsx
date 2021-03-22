import Image from "next/image";
import { useState } from "react";
import CloseButton from "./CloseButton";
import FullScreenBg from "./FullScreenBg";

export default function Nav() {
  const [model, setModel] = useState<"open" | "close">("close");
  const [src, setSrc] = useState("/image-hero-desktop.jpg");

  return (
    <nav className="overflow-hidden">
      {model === "open" && (
        <FullScreenBg
          handleClick={() => setModel("close")}
          className="bg-gradient-to-b from-black to-gray-200 opacity-70"
        />
      )}
      <div className="h-72 overflow-hidden relative">
        <Image
          alt="image hero desktop"
          objectFit="cover"
          objectPosition="50% 50%"
          layout="fill"
          src={src}
        />
      </div>
      <div
        className={`flex justify-between items-center px-10 ${
          model === "close" ? `z-30` : `z-50`
        } w-full nav-full-w absolute top-12 md:top-6  text-white font-commissioner`}
      >
        <Image src="/logo.svg" alt="Logo" height={20} width={150} />
        <ul className=" md:hidden flex justify-around mx-10 max-w-full gap-7  font-normal text-base">
          <li>About </li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
        <div className="md:block hidden">
          {model === "close" ? (
            <button onClick={() => setModel("open")} className="md:visible">
              <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
                <g fill="#FFF" fillRule="evenodd">
                  <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
                </g>
              </svg>
            </button>
          ) : (
            <>
              <div className="flex justify-center w-full absolute top-14 z-50 right-0 left-0">
                <ul className="w-80 flex flex-col bg-white font-medium text-black rounded-2xl border-solid justify-center text-lg">
                  <li className="p-6 border-solid border-b-2">About</li>
                  <li className="p-6 border-solid border-b-2">Discover</li>
                  <li className="p-6">Get Started</li>
                </ul>
              </div>
              <CloseButton
                className="-mt-14"
                handleClick={() => setModel("close")}
              />
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
