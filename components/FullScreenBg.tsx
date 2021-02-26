export default function FullScreenBg({
  children,
  className,
  handleClick,
}: {
  handleClick: () => void;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      onClick={handleClick}
      style={{ minHeight: "1149px" }}
      className={`flex justify-center items-center w-full z-40 bg-black ${
        !className && `bg-opacity-50`
      } absolute inset-y-0 ${className}`}
    >
      {children}
    </div>
  );
}
