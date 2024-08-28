import { Hero, ContactForm } from "@/components";

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
import { SparklesCore } from "@/components/ui/sparkles";

const data: {
  hero: {
    tag: string;
    title: string;
    content: string;
  };
  why: {
    content: string;
    benefits: string[];
  };
  partnersSection: {
    partners: { imgSrc: StaticImageData; alt: string }[];
    headline: string;
  };
} = {
  hero: {
    tag: "Revolution in Cancer Treatment",
    title: "Nanoparticle-based Radiopharmaceutical",
    content:
      "We develop the world first universal nanoparticle platform that embeds radioactive materials to deliver targeted radiation to cancer cells.",
  },
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
      <div className="relative z-50 ">
        <Hero {...data.hero} />
        <ContactForm />
      </div>
      <div className="absolute inset-0 h-screen w-full bg-gradient-to-b from-blue-50 to-white ">
        <SparklesCore
          id="tsparticlesfullpage"
          background="#transparent"
          minSize={0.6}
          maxSize={2}
          particleDensity={20}
          className="z-50 h-full w-full"
          particleColor="#000"
        />
      </div>
    </>
  );
}
