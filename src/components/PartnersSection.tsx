import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import {
  FaFlask as BeakerIcon,
  FaDollarSign as CurrencyDollarIcon,
  FaTruck as TruckIcon,
} from 'react-icons/fa6';

export interface Partner {
  imgSrc: StaticImageData;
  alt: string;
}

export interface PartnersSectionData {
  partners: Partner[];
  headline: string;
}

export const PartnersSection: React.FC<PartnersSectionData> = ({
  headline,
  partners,
}) => {
  return (
    <div className="flex flex-col items-center bg-blue-950/5 px-4 py-20">
      <Headline content={headline} />
      <div className="flex flex-col items-center">
        <ListView />
        <PartnersStrip partners={partners} />
      </div>
      <CTA />
    </div>
  );
};

const ListView: React.FC = () => {
  return (
    <div className="mx-auto flex max-w-lg flex-col gap-8 lg:w-1/2">
      <div className="flex gap-3">
        <div className="flex size-12 flex-shrink-0 flex-col items-center justify-center rounded-full ring-2 ring-blue-950">
          <BeakerIcon className="size-7 fill-none stroke-blue-950" />
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
          <CurrencyDollarIcon className="size-7 fill-none stroke-blue-950" />
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
          <TruckIcon className="size-7 fill-none stroke-blue-950" />
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

const Headline: React.FC<{ content: string }> = ({ content }) => {
  return (
    <h2 className="mb-10 text-wrap bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-center text-2xl font-bold tracking-tight text-transparent sm:text-4xl md:w-2/3">
      {/* // <h2 className="md:w-2/3 text-wrap text-center text-2xl font-bold tracking-tight  text-blue-950 sm:text-4xl mb-10"> */}
      {content}
    </h2>
  );
};

const PartnersStrip: React.FC<{
  partners: { imgSrc: StaticImageData; alt: string }[];
}> = ({ partners }) => {
  return (
    <div className="flex max-w-7xl flex-row flex-wrap items-center justify-center gap-0 py-8 lg:w-1/2">
      {partners.map((p, i) => (
        <div
          key={i}
          className="flex-column flex flex-shrink-0 items-center justify-center"
        >
          <Image
            className="shrink-0 transition duration-500 ease-out hover:scale-105"
            src={p.imgSrc}
            alt={p.alt}
            width={120}
          />
        </div>
      ))}
    </div>
  );
};

const CTA: React.FC = () => {
  return (
    <a
      href="#"
      className="from-38% to-42% m-10 my-5 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-3.5 py-6 text-sm font-semibold text-white shadow-lg transition duration-300 ease-out hover:scale-105 hover:shadow-2xl md:w-96"
    >
      {/* <ArrowRightCircleIcon
        className="size-6 fill-none stroke-white"
        height={24}
        width={24}
      /> */}
      <span>Join us now</span>
    </a>
  );
};
