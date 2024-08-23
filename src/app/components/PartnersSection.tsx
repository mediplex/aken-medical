import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";

export const PartnersSection = ({partners}: {partners:{imgSrc: StaticImageData; alt: string }[]}) => {
  return (
    <div className="flex max-w-7xl flex-col items-center py-10 sm:mx-auto sm:px-6 lg:px-8">
      <div className="flex w-full items-center gap-3 bg-white/30 p-5 sm:min-w-96 sm:rounded-3xl sm:shadow-2xl sm:backdrop-blur-lg">
        <div className="flex w-full flex-col gap-4 p-10">
          <h2 className="pb-10 text-center text-xl font-bold tracking-tight text-blue-950 sm:text-4xl">
           Our ecosystem to build and ship our nanoparticles
          </h2>

          <div className="flex flex-col gap-x-16 lg:flex-row">
            <div className="flex w-full flex-col gap-2 lg:w-1/2">
              <p>
                Aken has partnered with top universities, research centers, and
                cancer institutes in Europe.
              </p>
              <p>
                These collaborations are crucial in advancing our research and
                development efforts.
              </p>
              <p>
                Moreover, Aken has built strong connections with industry
                leaders throughout the development journey. This ensures quality
                in materials, manufacturing, studies, logistics, and patient
                delivery.
              </p>
              <p>
                Additionally, the vibrant European biotech ecosystem supports
                our efforts. It enhances our capacity to market innovative
                treatments.
              </p>
              <a
                href="#"
                className="from-38% to-42% my-5 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-3.5 py-6 text-sm font-semibold text-white shadow-lg transition duration-300 ease-out hover:scale-105 hover:shadow-2xl md:my-10"
              >
                <ArrowRightCircleIcon height={24} width={24} />
                <span>Join our ecosystem today</span>
              </a>
            </div>

            <div className="flex w-full flex-wrap lg:w-1/2">
              {partners.map((p, i) => (
                <div key={i} className="h-20 w-1/3 flex justify=center items-center md:w-1/4">
                  <Image
                    className="has-transition"
                    src={p.imgSrc}
                    alt={p.alt}
                    height={72}
                    width={128}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
