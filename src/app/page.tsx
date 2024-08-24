import {
  Hero,
  PartnersSection,
  Why,
  Nav,
  ContactForm,
  Footer,
} from "@/components";

import { StaticImageData } from "next/image";

import wilco from "../../public/images/wilco-logo.webp";
import bpiFrance from "../../public/images/bpi-france-logo.webp";
import cnrs from "../../public/images/cnrs-logo.webp";
import eckertAndZiegler from "../../public/images/eckert-and-ziegler-logo.webp";
import icm from "../../public/images/icm-logo.webp";
import inserm from "../../public/images/inserm-logo.webp";
import pantera from "../../public/images/pantera-logo.webp";
import reseauEntreprendre from "../../public/images/reseau-entreprendre-logo.webp";
import siric from "../../public/images/siric-logo.webp";
import universiteDeMontpellier from "../../public/images/universite-de-montpellier-logo.webp";
import akenMedicalLogo from "../../public/images/aken-medical-logo-negative.webp";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

const data: {
  tag: string;
  title: string;
  content: string;
  why: {
    content: string;
    benefits: string[];
  };
  partnersSection: {
    partners: { imgSrc: StaticImageData; alt: string }[];
    headline: string;
  };
} = {
  tag: "Revolution in Cancer Treatment",
  title: "Nanoparticle-based Radiopharmaceutical",
  content:
    "We develop the world first universal nanoparticle platform that embeds radioactive materials to deliver targeted radiation to cancer cells.",
  why: {
    content: `
        Aken Medical innovation represents a groundbreaking class of nanoparticles specifically designed for targeted cancer therapy. These nanoparticles possess unique properties that address the limitations of conventional approaches. They offer a versatile platform for encapsulating a wide range of radioactive materials, enabling the controlled delivery of therapeutic radiation directly to cancer cells. This targeted approach minimizes exposure to healthy tissues, potentially reducing debilitating side effects and improving patient tolerance to treatment.
      `,
    benefits: [
      "Embedding of a variety of radioactive materials",
      "Compatibility with existing vectors",
      "Enhanced targetting using a multi-vector approach",
      "Seamless theranostics",
    ],
  },
  partnersSection: {
    partners: [
      { imgSrc: wilco, alt: "Wilco Logo" },
      { imgSrc: bpiFrance, alt: "Bpi France Logo" },
      { imgSrc: cnrs, alt: "CNRS Logo" },
      { imgSrc: eckertAndZiegler, alt: "Eckert & Ziegler Logo" },
      { imgSrc: icm, alt: "ICM Logo" },
      { imgSrc: inserm, alt: "INSERM Logo" },
      { imgSrc: pantera, alt: "Pantera Logo" },
      { imgSrc: reseauEntreprendre, alt: "Reseau Entreprendre Logo" },
      { imgSrc: siric, alt: "SIRIC Logo" },
      {
        imgSrc: universiteDeMontpellier,
        alt: "Universite de Montpellier Logo",
      },
    ],

    headline:
      "Meet Our ecosystem to build and ship our nanoparticle-based Radiopharmaceutical",
  },
};

export default function Home() {
  return (
    <>
      <FlexWrapperWithGradientBG>
        <Nav imgSrc={akenMedicalLogo} alt={"Aken Medical Logo"} />
        {/* <Hero tag={data.tag} title={data.title} content={data.content} /> */}
        {/* <PartnersSection partners={data.partnersSection.partners} headline={data.partnersSection.headline}/> */}
        <div className="flex max-w-7xl flex-col pt-20 sm:mx-auto sm:px-6 lg:px-8">
          <div className="flex max-w-3xl flex-col items-center gap-4 px-4 py-10 text-center sm:min-w-96">
            {/* <div className="relative rounded-lg bg-blue-950 px-3 text-sm leading-8 text-white">
          {tag}
        </div> */}
            <div className="relative rounded-md bg-blue-950 px-3 text-sm leading-8 text-white">
              {data.tag}
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-blue-950 sm:text-6xl">
              {data.title}
            </h1>
            <p className="text-pretty text-lg leading-8 text-blue-900">
              {data.content}
            </p>
            <ContactForm />
          </div>
        </div>
      <Footer />
      </FlexWrapperWithGradientBG>
    </>
  );
}

const FlexWrapperWithGradientBG = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <main className="absolute isolate flex min-h-screen min-w-full flex-col items-stretch justify-start">
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
        {children}
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
      </main>
    </>
  );
};
