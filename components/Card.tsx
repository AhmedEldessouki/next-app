export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className=" p-12  border rounded-xl border-white bg-white ">
      {children}
    </div>
  );
}
