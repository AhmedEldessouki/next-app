export default function CloseButton({
  handleClick,
  className,
}: {
  handleClick: () => void;
  className?: string;
}) {
  return (
    <button
      className={`w-4 h-4 -mt-4 -mr-5 font-black text-xl text-gray-500 hover:text-black ${
        className && className
      }`}
      onClick={handleClick}
      aria-label="Close Button"
    >
      <div
        style={{ transform: "rotate(45deg)" }}
        className="w-1 h-4 bg-current -rotate-180 -translate-y-1/4 -skew-y-12 "
      />
      <div
        style={{ transform: "rotate(-45deg)" }}
        className="w-1 h-4 bg-current -rotate-180 -translate-y-1/4 -skew-y-12 -mt-4 "
      />
    </button>
  );
}
