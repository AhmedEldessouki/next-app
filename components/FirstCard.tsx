import Image from "next/image";

export default function FirstCard() {
  return (
    <div className=" w-full p-12 -mt-28 border rounded-xl border-white bg-white z-10">
      <div className="relative -top-20">
        <Image src="/logo-mastercraft.svg" alt="Logo" height={50} width={50} />
      </div>
      <div className="-mt-11">
        <h1 className="text-3xl font-bold font-commissioner">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <pre className="text-lg text-gray-500 pt-4  font-commissioner ">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </pre>
        <div className="flex my-2 justify-between mt-9  mb-0">
          <button className="bg-green-700 text-white rounded-full p-4 px-9 ">
            Back this project
          </button>
          <button className="flex justify-center items-center bg-gray-100 text-white rounded-full ">
            <Image
              src="/icon-bookmark.svg"
              alt="Bookmark"
              className="fill-current"
              height={55}
              width={56}
            />
            <span className="text-green-700 font-bold pl-4 pr-5 text-lg">
              Bookmarked
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
