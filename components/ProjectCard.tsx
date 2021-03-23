import { useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton";
export default function ProjectCard({
  title,
  pledge,
  body,
  availableSpots,
  isChecked,
  onSelect,
  handleClick,
}: {
  title: string;
  pledge: number | undefined;
  body: string;
  availableSpots: number | undefined;
  isChecked: boolean;
  onSelect: () => void;
  handleClick: () => void;
}) {
  const [isCheck, setCheck] = useState(false);
  // This is only because I cant get ::after to work with Tailwind
  const [isHovered, setHover] = useState(false);
  useEffect(() => {
    setCheck(isChecked);
  }, [isChecked]);

  return (
    <div
      className={`border-2 rounded-xl max-w-max bg-white border-gray-300 flex place-items-start flex-col  ${
        availableSpots === 0 && `opacity-50`
      }
      ${isCheck && `border-primary-color-moderate`}
      `}
    >
      <div className={`flex gap-7 place-items-start p-6 pb-2 .checked`}>
        <div>
          <button
            onClick={() => {
              onSelect();
            }}
            className="focus:outline-none"
          >
            <div className="w-5 h-5 border-2 border-solid border-gray-400  rounded-full flex justify-center items-center">
              <div
                className={`w-3 h-3 border border-white ${
                  isCheck && `bg-primary-color-moderate`
                } border-solid border-primary-color-mbg-primary-color-moderate rounded-full`}
              ></div>
            </div>
          </button>
        </div>
        <div className={`flex gap-4 flex-col`}>
          <div className={`flex justify-between md:flex-col`}>
            <div className={`flex gap-7 md:gap-2 md:-mt-3 md:flex-col `}>
              <h2 className="font-commissioner text-1xl md:text-sm font-bold hover:text-primary-color-dark cursor-pointer">
                {title}
              </h2>
              {pledge && (
                <span className="font-commissioner md:text-sm text-primary-color-dark">
                  Pledge ${pledge} or more
                </span>
              )}
            </div>
            {availableSpots >= 0 && (
              <div className="font-commissioner md:hidden">
                <span className="font-bold pl-2">{availableSpots}</span>{" "}
                <span>left</span>
              </div>
            )}
          </div>
          <p className="font-commissioner text-gray-500 text-base  md:text-sm">
            {body}
          </p>
          {availableSpots >= 0 && (
            <div className="font-commissioner hidden md:block">
              <span className="font-bold">{availableSpots}</span>
              <span className="text-gray-500"> left</span>
            </div>
          )}
        </div>
      </div>
      {isCheck && (
        <div className="border-t-2 border-gray-300 border-solid w-full transition-all ">
          <div className="flex place-items-center place-content-between p-6">
            <span className="text-gray-500 font-light md:w-full md:text-center md:pb-4">
              Enter your pledge
            </span>
            <div className="flex my-2 justify-between mb-0 gap-3">
              {pledge && (
                <button
                  className=" text-black border-solid border-2 border-gray-300 font-bold text-sm rounded-full p-2 w-24  hover:border-primary-color-moderate flex justify-center items-center gap-1"
                  onMouseEnter={() => setHover(!isHovered)}
                  onMouseLeave={() => setHover(!isHovered)}
                >
                  <span className="text-gray-300">$ </span> {pledge}{" "}
                  {isHovered && (
                    <div
                      style={{ width: 1 }}
                      className="bg-primary-color-moderate  h-5"
                    ></div>
                  )}
                </button>
              )}
              <PrimaryButton handleClick={handleClick}>Continue</PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
