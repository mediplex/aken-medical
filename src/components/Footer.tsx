import Image from 'next/image'
import akenMedicalLogo from "../../public/images/aken-medical-logo-negative.webp";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-blue-950">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-20 lg:px-8 flex flex-col justify-center items-center">

      <Image
          src={akenMedicalLogo}
          alt={'Aken Medical'}
          height={48}
          width={115.5}
        /> 

        {/* <a  href="mailto:contact@akenmedical.com" className="flex flex-row items-center justify-center gap-3">
          <EnvelopeIcon className="size-6 shrink-0 grow-0 text-blue-950" />
          <p className="text-blue-950">contact@akenmedical.com</p>
        </a> */}

        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2024 Aken Medical SAS All rights reserved.
        </p>
      </div>
    </footer>
  );
};
