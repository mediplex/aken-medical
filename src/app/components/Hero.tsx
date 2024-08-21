"use client";

import Image from "next/image";
import { LogoClouds, ModalForm } from "@/components";
import {
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export const Hero = ({ data }) => {
  const [modalFormOpen, setModalFormOpen] = useState(true);

  // const switchmodalFormOpen =()=>{
  //   setModalFormOpen(!modalFormOpen)
  // }

  return (
    <div className="bg-white">
      <ModalForm open={modalFormOpen} setOpen={setModalFormOpen} />
      <div className="relative isolate flex flex-col items-center px-6 pt-8 lg:px-8">
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

        {/* <Image
          alt="Your Company"
          src="/images/aken-medical-logo.webp"
          className="h-12 w-auto"
          height={64}
          width={79}
        /> */}

        {/* content */}
        <div className="mx-auto max-w-2xl pt-20">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-lg bg-blue-950 px-3 py-1 text-sm leading-6 text-white">
              {data.tag}
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl">
              {data.title}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-8 text-blue-900">
              {data.content}
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col justify-center items-center">
              <a
                href="#"
                className="from-38% to-62% flex w-full md:w-96 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-3.5 py-6 text-sm font-semibold text-white shadow-lg shadow-blue-500"
              >
                <ArrowRightCircleIcon height={24} width={24} />
                <span>Learn more</span>
              </a>
            </div>

            {/* list of benefits */}
            
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
