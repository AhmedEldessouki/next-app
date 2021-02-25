import Card from "./Card";

export default function BackThisProject({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{ minHeight: "1149px" }}
      className="flex justify-center items-center w-full z-20 bg-black bg-opacity-50 absolute inset-y-0 "
    >
      <Card>
        <div className="max-w-xl">
          <div className="flex justify-between">
            <h1 className="font-commissioner text-2xl font-bold">
              Back this project
            </h1>
            <button className="w-4 h-4 -mt-4 -mr-5 font-black text-xl text-gray-500 hover:text-black">
              <div
                style={{ transform: "rotate(45deg)" }}
                className="w-1 h-4 bg-current -rotate-180 -translate-y-1/4 -skew-y-12 "
              ></div>
              <div
                style={{ transform: "rotate(-45deg)" }}
                className="w-1 h-4 bg-current -rotate-180 -translate-y-1/4 -skew-y-12 -mt-4 "
              ></div>
            </button>
          </div>
          <p className="font-commissioner text-sm font-normal text-gray-500 py-4 pb-6">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <div className="flex flex-col gap-5">{children}</div>
        </div>
      </Card>
    </div>
  );
}
