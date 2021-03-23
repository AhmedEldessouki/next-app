import CountUp from "react-countup";
import Card from "./Card";

export default function NumbsCard() {
  function formatNumber(num: number): string {
    return num.toLocaleString("en-US");
  }
  return (
    <Card>
      <div className="flex flex-col gap-7">
        <div className="flex justify-between md:flex-col">
          <div className="flex flex-col gap-2 md:items-center">
            <span className="text-3xl  font-extrabold">
              $
              <CountUp end={89914} formattingFn={formatNumber} />
            </span>
            <span className="text-gray-500 text-sm">of $100,000 backed</span>
          </div>
          <div className="flex flex-col gap-2 md:items-center md:border-t-2 md:border-b-2 md:mx-auto border-r-2 md:border-r-0 border-l-2 md:border-l-0 px-7 md:py-7 md:my-7 mx-7 md:px-0 border-solid">
            <span className="text-3xl  font-extrabold">
              <CountUp end={5007} formattingFn={formatNumber} />
            </span>
            <span className="text-gray-500 text-sm">total backers</span>
          </div>
          <div className="flex flex-col gap-2 md:items-center">
            <span className="text-3xl  font-extrabold">
              <CountUp end={56} formattingFn={formatNumber} />
            </span>
            <span className="text-gray-500 text-sm">days left</span>
          </div>
        </div>
        <div>
          <div className="w-full border-solid border h-2 rounded-full p-1 bg-gray-200 border-gray-200 z-0"></div>
          <div className="blah border-solid border h-2 w-0 rounded-full p-1 bg-primary-color-moderate border-primary-color-moderate z-1 relative -top-2 -mt-0.5"></div>
        </div>
      </div>
      <style jsx>
        {`
          @keyframes widthAnimation {
            from {
              width: 0%;
            }
            to {
              width: ${(89914 / 100000) * 100}%;
            }
          }
          .blah {
            width: ${(89914 / 100000) * 100}%;
            animation-name: widthAnimation;
            animation-duration: 1s;
            animation-iteration-count: 1;
          }
        `}
      </style>
    </Card>
  );
}
