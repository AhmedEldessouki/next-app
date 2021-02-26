import Card from "./Card";
import CloseButton from "./CloseButton";
import FullScreenBg from "./FullScreenBg";

export default function BackThisProject({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FullScreenBg handleClick={() => {}}>
      <Card>
        <div className="max-w-xl">
          <div className="flex justify-between">
            <h1 className="font-commissioner text-2xl font-bold">
              Back this project
            </h1>
            <CloseButton handleClick={() => {}} />
          </div>
          <p className="font-commissioner text-sm font-normal text-gray-500 py-4 pb-6">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <div className="flex flex-col gap-5">{children}</div>
        </div>
      </Card>
    </FullScreenBg>
  );
}
