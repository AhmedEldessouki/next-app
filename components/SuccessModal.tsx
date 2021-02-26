import Image from "next/image";
import Card from "./Card";
import PrimaryButton from "./PrimaryButton";

export default function SuccessModal() {
  return (
    <div className=" z-20 max-w-lg">
      <Card>
        <div className="flex flex-col items-center justify-center gap-4">
          <Image src="/icon-check.svg" alt="Logo" height={100} width={100} />
          <h1 className="text-2xl font-bold font-commissioner pt-10">
            Thanks for your support!
          </h1>
          <p className="text-center text-gray-500 pt-2 text-sm font-commissioner pb-10">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
          <PrimaryButton className="p-4 w-26" handleClick={() => {}}>
            Got it!
          </PrimaryButton>
        </div>
      </Card>
    </div>
  );
}
