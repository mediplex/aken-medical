import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";

export const PartnersSection = ({
  partners,
}: {
  partners: { imgSrc: StaticImageData; alt: string }[];
}) => {
  return (
    <div className="flex max-w-7xl flex-col items-center py-10 sm:mx-auto sm:px-6 lg:px-8">
      <div className="flex w-full items-center gap-3 bg-white/30 p-5 sm:min-w-96 sm:rounded-3xl sm:shadow-2xl sm:backdrop-blur-lg">
        <div className="flex w-full flex-col items-center gap-4 sm:p-10">
          <h2 className="w-2/3 text-wrap pb-10 text-center text-xl font-bold tracking-tight text-blue-950 sm:text-4xl">
            Our ecosystem to build and ship our nanoparticles
          </h2>

          <div className="flex flex-col gap-x-16 lg:flex-row">
            <div className="flex w-full flex-col gap-2 leading-relaxed lg:w-2/5">
              <p className=" bg-blue-500 bg-clip-text first-letter:text-xl first-letter:font-extrabold first-letter:text-transparent">
                Aken has partnered with top universities, research centers, and
                cancer institutes in Europe.
              </p>
              <p className=" bg-blue-500 bg-clip-text first-letter:text-xl first-letter:font-extrabold first-letter:text-transparent">
                These collaborations are crucial in advancing our research and
                development efforts.
              </p>
              <p className=" bg-blue-500 bg-clip-text first-letter:text-xl first-letter:font-extrabold first-letter:text-transparent">
                This ensures quality in materials, manufacturing, studies,
                logistics, and patient delivery.
              </p>
              <p className=" bg-blue-500 bg-clip-text first-letter:text-xl first-letter:font-extrabold first-letter:text-transparent">
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

            <div className="flex w-full flex-row flex-wrap items-start justify-center lg:w-3/5">
              {partners.map((p, i) => (
                <div
                  key={i}
                  className="flex h-20 w-1/3 items-center justify-center md:w-1/4"
                >
                  <Image
                    className="has-transition"
                    src={p.imgSrc}
                    alt={p.alt}
                    height={80}
                    width={154}
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
