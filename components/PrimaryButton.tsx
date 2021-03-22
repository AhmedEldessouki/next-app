export default function PrimaryButton({
  children,
  className,
  handleClick,
}: {
  children: string;
  className?: string;
  handleClick: () => void;
}) {
  return (
    <button
      className={`flex justify-center text-white items-center bg-primary-color-moderate font-bold text-sm rounded-full p-2 w-24 hover:bg-primary-color-dark ${
        className && className
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
