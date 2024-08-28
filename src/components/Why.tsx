import { ArrowRightCircleIcon, CheckCircleIcon } from "./ui";

export const Why = ({
  benefits,
  content,
}: {
  benefits: string[];
  content: string;
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
              {content}
            </div>

            <div className="flex w-full flex-col items-start justify-stretch lg:w-3/5">
              {benefits.map((b, i: number) => (
                <div key={i} className="flex items-center py-1 md:py-4">
                  <div className="mr-3 flex-shrink-0">
                    {
                      <CheckCircleIcon
                        className="text-indigo-500"
                        height={48}
                        width={48}
                      />
                    }
                  </div>
                  <div className="flex flex-col justify-center">
                    {/* <h4 className="text-lg font-bold">Lorem ipsum</h4> */}
                    <p>{b}</p>
                  </div>
                </div>
              ))}

              <a
                href="#"
                className="from-38% to-42% my-5 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-3.5 py-6 text-sm font-semibold text-white shadow-lg transition duration-300 ease-out hover:scale-105 hover:shadow-2xl md:my-10"
              >
                <ArrowRightCircleIcon height={24} width={24} />
                <span>Join our ecosystem today</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
