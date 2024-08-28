const ArrowRightCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);
const BeakerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
    />
  </svg>
);
const CurrencyDollarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);
const TruckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
    />
  </svg>
);
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
      <div className="flex flex-col items-center">
        <ListView />
        <PartnersStrip partners={partners} />
      </div>

      <CTA />
    </div>
  );
};

const ListView = () => {
  return (
    <div className="mx-auto flex max-w-lg flex-col gap-8 lg:w-1/2">
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
    <h2 className="mb-10 text-wrap bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-center text-2xl font-bold tracking-tight text-transparent sm:text-4xl md:w-2/3">
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

const CTA = () => {
  return (
    <a
      href="#"
      className="from-38% to-42% m-10 my-5 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-3.5 py-6 text-sm font-semibold text-white shadow-lg transition duration-300 ease-out hover:scale-105 hover:shadow-2xl md:w-96"
    >
      <ArrowRightCircleIcon height={24} width={24} />
      <span>Join us now</span>
    </a>
  );
};
