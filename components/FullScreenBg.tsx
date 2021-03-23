export default function FullScreenBg({
  className,
  handleClick,
}: {
  handleClick: () => void;
  className?: string;
}) {
  return (
    <div
      onClick={handleClick}
      style={{ minHeight: "1149px" }}
      className={`flex justify-center items-center w-full z-40 bg-black ${
        !className && `bg-opacity-50`
      } fixed inset-y-0 ${className}`}
    />
  );
}
