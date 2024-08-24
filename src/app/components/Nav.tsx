import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";

export const Nav = ({ imgSrc, alt }: { imgSrc: StaticImageData, alt: string }) => {
  return (
    <>
      <nav className="fixed z-50 flex h-20 w-full flex-row items-center justify-center bg-blue-950/95 backdrop-blur-md gap-3">
        {/* <Image
          className="has-transition"
          src={imgSrc}
          alt={alt}
          height={48}
          width={115.5}
        /> */}
          <ExclamationCircleIcon className="size-12 text-yellow-500"/>
          <p className="text-yellow-500 font-bold text-xl">Website Under Construction</p>


      </nav>
    </>
  );
};
