import { LogoClouds, Nav } from "@/components";
import {
  CheckCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

const data = {
  tag: "Revolution in Cancer Treatment",
  title: "Nanoparticle-based Radiopharmaceutical",
  content:
    "We develop a nanoparticle platform that embeds radioactive materials to deliver targeted radiation to cancer cells.",
  benefits: [
    "Embedding of a variety of radioactive materials",
    "Compatibility with existing vectors",
    "Enhanced targetting using a multi-vector approach",
    "Seamless theranostics",
  ],
  navigation: [
    { name: "Our Innovation", href: "#" },
    { name: "Pipeline", href: "#" },
    { name: "Our Team", href: "#" },
    { name: "Company", href: "#" },
  ],
};

export const Hero = () => {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50 flex justify-center items-center">
        <Nav items={data.navigation} />
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* content */}
        <div className="mx-auto max-w-2xl pt-20">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-lg bg-gray-900 px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              {data.tag}
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {data.title}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-8 text-gray-600">
              {data.content}
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-indigo-500 px-3.5 py-6 text-sm font-semibold text-white shadow-lg shadow-indigo-500"
              >
                <ArrowRightCircleIcon height={24} width={24} />
                <span>Learn more</span>
              </a>
            </div>

            {/* list of benefits */}
            <div className="mx-auto mt-16 flex flex-wrap divide-indigo-200 text-left">
              {data.benefits.map((b, i) => (
                <div key={i} className="flex md:w-1/2 items-center p-3">
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
            </div>
          </div>
        </div>
        <LogoClouds />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
};
