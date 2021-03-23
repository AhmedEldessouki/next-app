import PrimaryButton from "./PrimaryButton";
export default function ProjectCardMainPage({
  title,
  pledge,
  body,
  availableSpots,
  handleClick,
}: {
  title: string;
  pledge: number | undefined;
  body: string;
  availableSpots: number | undefined;
  handleClick: () => void;
}) {
  // This is only because I cant get ::after to work with Tailwind

  return (
    <div
      className={`border-2 rounded-xl bg-white border-gray-300 flex place-items-start flex-col  p-6 pb-2 ${
        availableSpots === 0 && `opacity-50`
      }
      `}
    >
      <div className={`flex gap-7 place-items-start`}>
        <div className={`flex gap-4 flex-col`}>
          <div className={`flex justify-between md:flex-col md:gap-2`}>
            <h2 className="font-commissioner text-1xl md:text-sm font-bold hover:text-primary-color-dark cursor-pointer">
              {title}
            </h2>
            {pledge && (
              <span className="font-commissioner md:text-sm text-primary-color-dark">
                Pledge ${pledge} or more
              </span>
            )}
          </div>
          <p className="font-commissioner text-gray-500 text-base  md:text-sm">
            {body}
          </p>
        </div>
      </div>
      <div
        className={`flex justify-between md:flex-col items-center md:items-baseline md:gap-6 w-full my-4`}
      >
        {availableSpots >= 0 && (
          <div className="font-commissioner flex items-center gap-2">
            <span className="font-bold text-3xl">{availableSpots}</span>
            <span className="text-gray-500"> left</span>
          </div>
        )}
        <PrimaryButton className="py-3 w-36" handleClick={handleClick}>
          Select Reward
        </PrimaryButton>
      </div>
    </div>
  );
}
