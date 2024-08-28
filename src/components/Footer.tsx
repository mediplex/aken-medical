// import Image from 'next/image';
// import akenMedicalLogo from '../../public/images/aken-medical-logo.webp';

// export const Footer = () => {
//   return (
//     <footer className="flex flex-col items-center justify-center bg-blue-950/5">
//       <div className="mx-auto flex max-w-7xl flex-col items-center justify-center overflow-hidden px-6 py-10 sm:py-20 lg:px-8">
//         <Image
//           src={akenMedicalLogo}
//           alt={'Aken Medical'}
//           height={48}
//           width={115.5}
//         />

//         {/* <a  href="mailto:contact@akenmedical.com" className="flex flex-row items-center justify-center gap-3">
//           <EnvelopeIcon className="size-6 shrink-0 grow-0 text-blue-950" />
//           <p className="text-blue-950">contact@akenmedical.com</p>
//         </a> */}

//         <div className="mt-4 flex flex-col gap-2 divide-x p-4 lg:flex-row">
//           <div>
//             <p className="text-center text-xs text-blue-950">phone number:</p>
//             <p className="text-center text-xs text-blue-950">address:</p>
//             <p className="text-center text-xs text-blue-950">email:</p>
//           </div>
//           <div>
//             <a href="" className="text-center text-xs text-blue-950">
//               Terms and conditions
//             </a>
//           </div>
//           <div>
//             <p className="text-center text-xs text-blue-950">
//               &copy; 2024 Aken Medical SAS All rights reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

import Image from 'next/image';
import akenMedicalLogo from '../../public/images/aken-medical-logo.webp';

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-blue-950/5">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center overflow-hidden px-6 py-10 sm:py-20 lg:px-8">
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

        <div className="mt-4 flex flex-col gap-2 divide-x p-4 lg:flex-row">
          <div>
            <p className="text-center text-xs text-blue-950">phone number:</p>
            <p className="text-center text-xs text-blue-950">address:</p>
            <p className="text-center text-xs text-blue-950">email:</p>
          </div>
          <div>
            <a href="" className="text-center text-xs text-blue-950">
              Terms and conditions
            </a>
          </div>
          <div>
            <p className="text-center text-xs text-blue-950">
              &copy; 2024 Aken Medical SAS All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
