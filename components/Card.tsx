export default function Card({
  children,
  isGrey,
}: {
  children: React.ReactNode;
  isGrey?: boolean;
}) {
  return (
    <div
      className={`p-12 md:p-7 border rounded-xl bg-white ${
        isGrey ? `border-gray-300` : `border-white`
      } md:w-80`}
    >
      {children}
    </div>
  );
}
