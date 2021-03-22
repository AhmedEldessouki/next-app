import Image from "next/image";
import Card from "./Card";
import PrimaryButton from "./PrimaryButton";

export default function SuccessModal({
  handleClick,
}: {
  handleClick: () => void;
}) {
  return (
    <div className=" z-50 fixed max-w-md md:-mt-28">
      <Card>
        <div className="flex flex-col items-center justify-center gap-2">
          <Image src="/icon-check.svg" alt="Logo" height={75} width={75} />
          <h1 className="text-xl md:text-lg font-bold font-commissioner pt-6">
            Thanks for your support!
          </h1>
          <p className="text-center text-gray-500 pt-2 text-sm md:text-xs font-commissioner pb-4">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
          <PrimaryButton className="p-3 w-28" handleClick={handleClick}>
            Got it!
          </PrimaryButton>
        </div>
      </Card>
    </div>
  );
}
