import Image from "next/image";
import Card from "./Card";

export default function SuccessModal() {
  return (
    <>
      <div className="bg-black  bg-opacity-50 flex flex-col items-center justify-center z-10"></div>
      <div className=" z-20 absolute max-w-screen-sm h-96 top-1/4 right-1/4 before ">
        <Card>
          <div className="flex flex-col items-center justify-center gap-4">
            <Image src="/icon-check.svg" alt="Logo" height={100} width={100} />

            <h1 className="text-3xl font-bold font-commissioner pt-10">
              Thanks for your support!
            </h1>
            <p className="text-lg text-gray-500 pt-4  font-commissioner pb-10">
              Your pledge brings us one step closer to sharing Mastercraft
              Bamboo Monitor Riser worldwide. You will get an email once our
              campaign is completed. Got it!
            </p>
            <button className="bg-primary-color-moderate  text-white rounded-full p-3 px-9">
              Got it
            </button>
          </div>
        </Card>
      </div>
    </>
  );
}
