import Image from "next/image";

export default function Nav() {
  return (
    <nav>
      <Image
        src="/image-hero-desktop.jpg"
        alt="image hero desktop"
        className="z-0"
        height={420}
        width={1519}
        objectFit="cover"
      />
      <div className="flex justify-between z-1 w-full nav-full-w absolute top-12 text-white font-commissioner">
        {/* <h1 className="font-bold text-3xl">crowdfund</h1> */}
        <Image src="/logo.svg" alt="Logo" height={20} width={150} />

        <ul className="flex justify-around mx-10 max-w-full gap-7  font-normal text-base">
          <li>About </li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
      </div>
    </nav>
  );
}
