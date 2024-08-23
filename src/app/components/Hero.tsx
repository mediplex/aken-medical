"use client";

import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export const Hero = ({
  tag,
  title,
  content,
}: {
  tag: string;
  title: string;
  content: string;
}) => {
  return (
    <div className="flex max-w-7xl flex-col pt-20 sm:mx-auto sm:px-6 lg:px-8">
      <div className="flex max-w-3xl flex-col items-center gap-4 px-4 py-10 text-center sm:min-w-96">
        <div className="relative rounded-lg bg-blue-950 px-3 text-sm leading-8 text-white">
          {tag}
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-blue-950 sm:text-5xl">
          {title}
        </h1>
        <p className="text-pretty text-lg leading-8 text-blue-900">{content}</p>
        <a
          href="#"
          className="from-38% to-42% my-5 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-3.5 py-6 text-sm font-semibold text-white shadow-lg transition duration-300 ease-out hover:scale-105 hover:shadow-2xl md:my-10 md:w-96"
        >
          <ArrowRightCircleIcon height={24} width={24} />
          <span>Learn more</span>
        </a>
      </div>
    </div>
  );
};
