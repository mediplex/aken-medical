import {
  ArrowRightCircleIcon,
  BeakerIcon,
  CurrencyDollarIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";

export const PartnersSection = ({
  partners,
  headline,
}: {
  partners: { imgSrc: StaticImageData; alt: string }[];
  headline: string;
}) => {
  return (
    <div className="flex flex-col items-center bg-blue-950/5 px-4 py-20">
      <Headline content={headline} />
      <div className="flex flex-col  items-center">
        <ListView />
        <PartnersStrip partners={partners} />
      </div>

      <CTA />
    </div>
  );
};

const ListView = () => {
  return (
    <div className="mx-auto flex lg:w-1/2 max-w-lg flex-col gap-8">
      <div className="flex gap-3">
        <div className="flex size-12 flex-shrink-0 flex-col items-center justify-center rounded-full ring-2 ring-blue-950">
          <BeakerIcon className="size-7 to-blue-950" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-blue-950">Research and Developement</h3>
          <p className="">
            Aken has partnered with top universities, research centers, and
            cancer institutes in Europe.
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="flex size-12 flex-shrink-0 flex-col items-center justify-center rounded-full ring-2 ring-blue-950">
          <CurrencyDollarIcon className="size-7 to-blue-950" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-blue-950">Funding</h3>
          <p className="">
            Aken has partnered with top universities, research centers, and
            cancer institutes in Europe.
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="flex size-12 flex-shrink-0 flex-col items-center justify-center rounded-full ring-2 ring-blue-950">
          <TruckIcon className="size-7 to-blue-950" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-blue-950">
            Manufacturing and Shipping
          </h3>
          <p className="">
            This ensures quality in materials, manufacturing, studies,
            logistics, and patient delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

const Headline = ({ content }: { content: string }) => {
  return (
    <h2 className="md:w-2/3 text-wrap text-center text-2xl font-bold tracking-tight text-transparent bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text  sm:text-4xl mb-10">
    {/* // <h2 className="md:w-2/3 text-wrap text-center text-2xl font-bold tracking-tight  text-blue-950 sm:text-4xl mb-10"> */}
      {content}
    </h2>
  );
};

const PartnersStrip = ({
  partners,
}: {
  partners: { imgSrc: StaticImageData; alt: string }[];
}) => {
  return (
    <div className="flex lg:w-1/2 max-w-7xl flex-row flex-wrap items-center justify-center gap-0 py-8">
      {partners.map((p, i) => (
        <div
          key={i}
          className="flex-column flex flex-shrink-0 items-center justify-center"
        >
          <Image
            className="shrink-0  transition duration-500 ease-out  hover:scale-105"
            src={p.imgSrc}
            alt={p.alt}
            width={120}
          />
        </div>
      ))}
    </div>
  );
};

const CTA = () => {
  return (
    <a
      href="#"
      className="from-38% to-42% my-5 m-10 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-3.5 py-6 text-sm font-semibold text-white shadow-lg transition duration-300 ease-out hover:scale-105 hover:shadow-2xl md:w-96"
    >
      <ArrowRightCircleIcon height={24} width={24} />
      <span>Join us now</span>
    </a>
  );
};
