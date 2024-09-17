'use client';

import { Typewriter } from '@/components';
import { useActionState, useRef, useState } from 'react';

export interface HeroData {
  tag: string;
  title: string;
  content: string;
}

const action = async (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  previousState: unknown,
  formData: FormData
): Promise<{ error?: string; message?: unknown }> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  if (formData.get('name') !== 'Mehdi')
    return { error: 'Name is already taken' };
  else return { message: Object.entries(formData) };
};

export const Hero: React.FC<HeroData> = ({ tag, title, content }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [isLastSlide, setLastSlide] = useState(false);

  const toogleLastSlide = (): void => {
    setLastSlide(!isLastSlide);
  };

  const [state, submitAction, isPending] = useActionState(action, null);

  const toogleDialog = (): void => {
    if (!dialogRef.current) return;

    if (dialogRef.current.hasAttribute('open')) dialogRef.current.close();
    else dialogRef.current.showModal();
  };

  return (
    <>
      <dialog
        ref={dialogRef}
        className="w-80 rounded-3xl shadow-2xl backdrop:bg-white/80 backdrop:backdrop-blur-md"
      >
        <form
          method="dialog"
          action={submitAction}
          className="flex flex-col gap-4 p-4"
        >
          <div className="flex w-72 flex-col gap-4 overflow-hidden">
            {isLastSlide && (
              <button
                onClick={toogleLastSlide}
                type="button"
                className="absolute flex size-8 items-center justify-center rounded-full bg-white p-2 text-xs font-bold text-emerald-950/50 shadow-xl"
              >
                &lt;
              </button>
            )}
            <header className="flex h-8 shrink-0 grow-0 basis-full flex-row items-center justify-center">
              <h2 className="self-center font-bold text-emerald-950/50">
                Step&nbsp;{!isLastSlide ? '1' : '2'}/2
              </h2>
            </header>

            <div
              className={`flex shrink-0 grow-0 basis-full ${isLastSlide && '-translate-x-full'} transition-all duration-500 ease-in @container/slider`}
            >
              <fieldset
                className={`flex shrink-0 grow-0 basis-full flex-col gap-2 *:rounded-3xl ${isLastSlide ? 'opacity-0' : 'opacity-100'} transition-all duration-300 ease-in`}
              >
                <legend className="font-bold text-emerald-950">
                  Please select what do you want to learn about
                </legend>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  title="Email"
                  placeholder="Enter your email"
                />
                <button
                  onClick={toogleLastSlide}
                  type="button"
                  className="w-full bg-teal-600 p-2 font-bold text-white"
                >
                  Next
                </button>
              </fieldset>

              <fieldset
                className={`flex shrink-0 grow-0 basis-full flex-col gap-2 *:rounded-3xl ${!isLastSlide ? 'opacity-0' : 'opacity-100'} transition-all duration-300 ease-in`}
              >
                <legend className="font-bold text-emerald-950">
                  Where do you want to receive the full report about the
                  project?
                </legend>
                <label htmlFor="profession">Profession</label>
                <input
                  type="text"
                  name="profession"
                  required
                  placeholder="Enter your profession"
                />
                <label htmlFor="lab">Lab</label>
                <input
                  type="text"
                  name="lab"
                  required
                  title="lab"
                  placeholder="Enter your lab"
                />
                <button
                  type="submit"
                  className="w-full bg-teal-600 p-2 font-bold text-white"
                  disabled={isPending}
                >
                  submit
                </button>
              </fieldset>
            </div>
          </div>
        </form>
        {!!state?.error && <p className="text-red-500">{state.error}</p>}
      </dialog>

      <div className="container mx-auto flex h-screen flex-col items-center justify-center gap-1 p-4">
        <div className="relative rounded-md bg-blue-950/5 px-3 text-center text-sm leading-8 text-blue-950/80 backdrop-blur-sm">
          {tag}
        </div>

        <h1 className="xs:text-4xl xs:[height:80px] w-screen text-pretty text-center text-3xl font-bold leading-8 tracking-tight text-blue-950 backdrop-blur-sm [height:64px] sm:text-6xl sm:[height:128px] md:max-w-3xl">
          <Typewriter text={title} delay={100} />
        </h1>

        <p className="max-w-lg text-pretty text-center text-lg leading-8 text-blue-950/50 backdrop-blur-sm">
          {content}
        </p>

        <div className="my-10 flex w-full max-w-md flex-col items-center justify-center rounded-md bg-white/5 px-4 py-8 ring backdrop-blur-sm first:mt-0 last:mb-0">
          <h2 className="my-5 font-bold first:mt-0 last:mb-0">
            Do you want to lean more?
          </h2>
          <button
            onClick={toogleDialog}
            className="h-16 w-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 font-bold text-white shadow-xl sm:w-96"
          >
            Learn More
          </button>
          <a onClick={toogleDialog} className="italic text-blue-500 underline">
            Click here to learn more
          </a>
        </div>
      </div>
    </>
  );
};

// const Dialog: React.FC<{
//   children: ReactNode;
//   ref: RefObject<HTMLDialogElement | null>;
//   toogleDialog: () => void;
// }> = ({ children, ref, toogleDialog }) => {
//   return <dialog ref={ref}>{children}</dialog>;
// };

// const Nanoparticle = (
//   props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
// ) => {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 325 351"
//       fill="none"
//     >
//       <g id="solid-np">
//         <g id="antibodies">
//           <g id="Antibody">
//             <path
//               id="Rectangle 28"
//               d="M163.369 49.905L167.114 49.905L167.114 15.5014C167.114 14.4674 166.275 13.6291 165.241 13.6291V13.6291C164.207 13.6291 163.369 14.4674 163.369 15.5014L163.369 49.905Z"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 29"
//               width="3.76394"
//               height="20.2524"
//               rx="1.88197"
//               transform="matrix(0.707107 0.707107 0.707107 -0.707107 162.628 15.2)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 30"
//               width="3.76394"
//               height="18.2371"
//               rx="1.88197"
//               transform="matrix(0.707107 0.707107 0.707107 -0.707107 168.118 17.9904)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 31"
//               width="3.76394"
//               height="10.4173"
//               rx="1.88197"
//               transform="matrix(0.707107 0.707107 0.707107 -0.707107 169.582 8.24438)"
//               fill="#828282"
//             />
//             <rect
//               id="Rectangle 32"
//               width="3.76394"
//               height="10.1487"
//               rx="1.88197"
//               transform="matrix(0.707107 0.707107 0.707107 -0.707107 173.839 12.2697)"
//               fill="#828282"
//             />
//             <rect
//               id="Rectangle 36"
//               width="1.40423"
//               height="5.76934"
//               transform="matrix(-0.707107 0.707107 0.707107 0.707107 169.394 11.1118)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 117"
//               width="1.40423"
//               height="5.76934"
//               transform="matrix(-4.37114e-08 1 1 4.37114e-08 159.103 20.5371)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 120"
//               width="1.40423"
//               height="5.76934"
//               transform="matrix(-4.37114e-08 1 1 4.37114e-08 159.103 23.3456)"
//               fill="#333333"
//             />
//             <g id="Group 496">
//               <path
//                 id="Rectangle 28_2"
//                 d="M161.156 49.9048L157.412 49.9048L157.412 15.5012C157.412 14.4671 158.25 13.6289 159.284 13.6289V13.6289C160.318 13.6289 161.156 14.4671 161.156 15.5012L161.156 49.9048Z"
//                 fill="#333333"
//               />
//               <rect
//                 id="Rectangle 29_2"
//                 x="161.896"
//                 y="15.1997"
//                 width="3.76394"
//                 height="20.2524"
//                 rx="1.88197"
//                 transform="rotate(135 161.896 15.1997)"
//                 fill="#333333"
//               />
//               <rect
//                 id="Rectangle 30_2"
//                 x="156.406"
//                 y="17.9901"
//                 width="3.76394"
//                 height="18.2371"
//                 rx="1.88197"
//                 transform="rotate(135 156.406 17.9901)"
//                 fill="#333333"
//               />
//               <rect
//                 id="Rectangle 31_2"
//                 x="154.942"
//                 y="8.24414"
//                 width="3.76394"
//                 height="10.4173"
//                 rx="1.88197"
//                 transform="rotate(135 154.942 8.24414)"
//                 fill="#828282"
//               />
//               <rect
//                 id="Rectangle 32_2"
//                 x="150.686"
//                 y="12.2694"
//                 width="3.76394"
//                 height="10.1487"
//                 rx="1.88197"
//                 transform="rotate(135 150.686 12.2694)"
//                 fill="#828282"
//               />
//             </g>
//             <rect
//               id="Rectangle 118"
//               x="155.131"
//               y="11.1116"
//               width="1.40423"
//               height="5.76934"
//               transform="rotate(45 155.131 11.1116)"
//               fill="#333333"
//             />
//           </g>
//           <g id="Antibody_2">
//             <path
//               id="Rectangle 28_3"
//               d="M161.155 301.851L157.411 301.851L157.411 336.255C157.411 337.289 158.249 338.127 159.283 338.127V338.127C160.317 338.127 161.155 337.289 161.155 336.255L161.155 301.851Z"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 29_3"
//               width="3.76394"
//               height="20.2524"
//               rx="1.88197"
//               transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 161.896 336.556)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 30_3"
//               width="3.76394"
//               height="18.2371"
//               rx="1.88197"
//               transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 156.406 333.766)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 31_3"
//               width="3.76394"
//               height="10.4173"
//               rx="1.88197"
//               transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 154.942 343.512)"
//               fill="#828282"
//             />
//             <rect
//               id="Rectangle 32_3"
//               width="3.76394"
//               height="10.1487"
//               rx="1.88197"
//               transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 150.686 339.486)"
//               fill="#828282"
//             />
//             <rect
//               id="Rectangle 36_2"
//               width="1.40423"
//               height="5.76934"
//               transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 155.131 340.644)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 117_2"
//               width="1.40423"
//               height="5.76934"
//               transform="matrix(1.31134e-07 -1 -1 -1.31134e-07 165.422 331.219)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 120_2"
//               width="1.40423"
//               height="5.76934"
//               transform="matrix(1.31134e-07 -1 -1 -1.31134e-07 165.422 328.411)"
//               fill="#333333"
//             />
//             <g id="Group 496_2">
//               <path
//                 id="Rectangle 28_4"
//                 d="M163.368 301.851L167.113 301.851L167.113 336.255C167.113 337.289 166.275 338.127 165.24 338.127V338.127C164.206 338.127 163.368 337.289 163.368 336.255L163.368 301.851Z"
//                 fill="#333333"
//               />
//               <rect
//                 id="Rectangle 29_4"
//                 x="162.628"
//                 y="336.556"
//                 width="3.76394"
//                 height="20.2524"
//                 rx="1.88197"
//                 transform="rotate(-45 162.628 336.556)"
//                 fill="#333333"
//               />
//               <rect
//                 id="Rectangle 30_4"
//                 x="168.118"
//                 y="333.766"
//                 width="3.76394"
//                 height="18.2371"
//                 rx="1.88197"
//                 transform="rotate(-45 168.118 333.766)"
//                 fill="#333333"
//               />
//               <rect
//                 id="Rectangle 31_4"
//                 x="169.582"
//                 y="343.512"
//                 width="3.76394"
//                 height="10.4173"
//                 rx="1.88197"
//                 transform="rotate(-45 169.582 343.512)"
//                 fill="#828282"
//               />
//               <rect
//                 id="Rectangle 32_4"
//                 x="173.839"
//                 y="339.487"
//                 width="3.76394"
//                 height="10.1487"
//                 rx="1.88197"
//                 transform="rotate(-45 173.839 339.487)"
//                 fill="#828282"
//               />
//             </g>
//             <rect
//               id="Rectangle 118_2"
//               x="169.394"
//               y="340.645"
//               width="1.40423"
//               height="5.76934"
//               transform="rotate(-135 169.394 340.645)"
//               fill="#333333"
//             />
//           </g>
//           <g id="Antibody_3">
//             <path
//               id="Rectangle 28_5"
//               d="M271.911 113.85L273.783 117.093L303.578 99.891C304.473 99.374 304.78 98.2289 304.263 97.3334V97.3334C303.746 96.4379 302.601 96.131 301.706 96.6481L271.911 113.85Z"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 29_5"
//               width="3.76394"
//               height="20.2524"
//               rx="1.88197"
//               transform="matrix(-0.258819 0.965926 0.965926 0.258819 301.597 95.856)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 30_5"
//               width="3.76394"
//               height="18.2371"
//               rx="1.88197"
//               transform="matrix(-0.258819 0.965926 0.965926 0.258819 301.925 102.006)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 31_5"
//               width="3.76394"
//               height="10.4173"
//               rx="1.88197"
//               transform="matrix(-0.258819 0.965926 0.965926 0.258819 311.098 98.4006)"
//               fill="#828282"
//             />
//             <rect
//               id="Rectangle 32_5"
//               width="3.76394"
//               height="10.1487"
//               rx="1.88197"
//               transform="matrix(-0.258819 0.965926 0.965926 0.258819 309.739 104.1)"
//               fill="#828282"
//             />
//             <rect
//               id="Rectangle 36_3"
//               width="1.40423"
//               height="5.76934"
//               transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 308.52 99.6707)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 117_3"
//               width="1.40423"
//               height="5.76934"
//               transform="matrix(-0.866025 0.5 0.5 0.866025 295.212 95.4713)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 120_3"
//               width="1.40423"
//               height="5.76934"
//               transform="matrix(-0.866025 0.5 0.5 0.866025 292.779 96.8756)"
//               fill="#333333"
//             />
//             <g id="Group 496_3">
//               <path
//                 id="Rectangle 28_6"
//                 d="M270.805 111.933L268.932 108.69L298.727 91.4884C299.622 90.9714 300.767 91.2782 301.284 92.1737V92.1737C301.801 93.0692 301.495 94.2143 300.599 94.7313L270.805 111.933Z"
//                 fill="#333333"
//               />
//               <rect
//                 id="Rectangle 29_6"
//                 x="301.23"
//                 y="95.2219"
//                 width="3.76394"
//                 height="20.2524"
//                 rx="1.88197"
//                 transform="rotate(-165 301.23 95.2219)"
//                 fill="#333333"
//               />
//               <rect
//                 id="Rectangle 30_6"
//                 x="296.068"
//                 y="91.8625"
//                 width="3.76394"
//                 height="18.2371"
//                 rx="1.88197"
//                 transform="rotate(-165 296.068 91.8625)"
//                 fill="#333333"
//               />
//               <rect
//                 id="Rectangle 31_6"
//                 x="303.777"
//                 y="85.7218"
//                 width="3.76394"
//                 height="10.4173"
//                 rx="1.88197"
//                 transform="rotate(-165 303.777 85.7218)"
//                 fill="#828282"
//               />
//               <rect
//                 id="Rectangle 32_6"
//                 x="298.163"
//                 y="84.048"
//                 width="3.76394"
//                 height="10.1487"
//                 rx="1.88197"
//                 transform="rotate(-165 298.163 84.048)"
//                 fill="#828282"
//               />
//             </g>
//             <rect
//               id="Rectangle 118_3"
//               x="301.389"
//               y="87.319"
//               width="1.40423"
//               height="5.76934"
//               transform="rotate(105 301.389 87.319)"
//               fill="#333333"
//             />
//           </g>
//           <g id="Antibody_4">
//             <path
//               id="Rectangle 28_7"
//               d="M52.6133 237.906L50.741 234.663L20.9466 251.865C20.0511 252.382 19.7442 253.527 20.2613 254.423V254.423C20.7783 255.318 21.9234 255.625 22.8189 255.108L52.6133 237.906Z"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 29_7"
//               width="3.76394"
//               height="20.2524"
//               rx="1.88197"
//               transform="matrix(0.258819 -0.965926 -0.965926 -0.258819 22.9277 255.9)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 30_7"
//               width="3.76394"
//               height="18.2371"
//               rx="1.88197"
//               transform="matrix(0.258819 -0.965926 -0.965926 -0.258819 22.5996 249.75)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 31_7"
//               width="3.76394"
//               height="10.4173"
//               rx="1.88197"
//               transform="matrix(0.258819 -0.965926 -0.965926 -0.258819 13.4268 253.355)"
//               fill="#828282"
//             />
//             <rect
//               id="Rectangle 32_7"
//               width="3.76394"
//               height="10.1487"
//               rx="1.88197"
//               transform="matrix(0.258819 -0.965926 -0.965926 -0.258819 14.7852 247.656)"
//               fill="#828282"
//             />
//             <rect
//               id="Rectangle 36_4"
//               width="1.40423"
//               height="5.76934"
//               transform="matrix(0.965926 0.258819 0.258819 -0.965926 16.0049 252.085)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 117_4"
//               width="1.40423"
//               height="5.76934"
//               transform="matrix(0.866025 -0.5 -0.5 -0.866025 29.3125 256.285)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 120_4"
//               width="1.40423"
//               height="5.76934"
//               transform="matrix(0.866025 -0.5 -0.5 -0.866025 31.7451 254.88)"
//               fill="#333333"
//             />
//             <g id="Group 496_4">
//               <path
//                 id="Rectangle 28_8"
//                 d="M53.7197 239.823L55.592 243.066L25.7976 260.268C24.9021 260.785 23.757 260.478 23.24 259.582V259.582C22.723 258.687 23.0298 257.542 23.9253 257.025L53.7197 239.823Z"
//                 fill="#333333"
//               />
//               <rect
//                 id="Rectangle 29_8"
//                 x="23.2939"
//                 y="256.534"
//                 width="3.76394"
//                 height="20.2524"
//                 rx="1.88197"
//                 transform="rotate(15 23.2939 256.534)"
//                 fill="#333333"
//               />
//               <rect
//                 id="Rectangle 30_8"
//                 x="28.4561"
//                 y="259.894"
//                 width="3.76394"
//                 height="18.2371"
//                 rx="1.88197"
//                 transform="rotate(15 28.4561 259.894)"
//                 fill="#333333"
//               />
//               <rect
//                 id="Rectangle 31_8"
//                 x="20.7471"
//                 y="266.034"
//                 width="3.76394"
//                 height="10.4173"
//                 rx="1.88197"
//                 transform="rotate(15 20.7471 266.034)"
//                 fill="#828282"
//               />
//               <rect
//                 id="Rectangle 32_8"
//                 x="26.3613"
//                 y="267.708"
//                 width="3.76394"
//                 height="10.1487"
//                 rx="1.88197"
//                 transform="rotate(15 26.3613 267.708)"
//                 fill="#828282"
//               />
//             </g>
//             <rect
//               id="Rectangle 118_4"
//               x="23.1357"
//               y="264.437"
//               width="1.40423"
//               height="5.76934"
//               transform="rotate(-75 23.1357 264.437)"
//               fill="#333333"
//             />
//           </g>
//           <g id="Antibody_5">
//             <path
//               id="Rectangle 28_9"
//               d="M270.805 239.823L268.932 243.066L298.727 260.268C299.622 260.785 300.767 260.478 301.284 259.582V259.582C301.801 258.687 301.495 257.542 300.599 257.025L270.805 239.823Z"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 29_9"
//               width="3.76394"
//               height="20.2524"
//               rx="1.88197"
//               transform="matrix(-0.965926 0.258819 0.258819 0.965926 301.23 256.534)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 30_9"
//               width="3.76394"
//               height="18.2371"
//               rx="1.88197"
//               transform="matrix(-0.965926 0.258819 0.258819 0.965926 296.068 259.893)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 31_9"
//               width="3.76394"
//               height="10.4173"
//               rx="1.88197"
//               transform="matrix(-0.965926 0.258819 0.258819 0.965926 303.776 266.034)"
//               fill="#828282"
//             />
//             <rect
//               id="Rectangle 32_9"
//               width="3.76394"
//               height="10.1487"
//               rx="1.88197"
//               transform="matrix(-0.965926 0.258819 0.258819 0.965926 298.162 267.708)"
//               fill="#828282"
//             />
//             <rect
//               id="Rectangle 36_5"
//               width="1.40423"
//               height="5.76934"
//               transform="matrix(-0.258819 -0.965926 -0.965926 0.258819 301.388 264.437)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 117_5"
//               width="1.40423"
//               height="5.76934"
//               transform="matrix(-0.866025 -0.5 -0.5 0.866025 298.371 250.812)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 120_5"
//               width="1.40423"
//               height="5.76934"
//               transform="matrix(-0.866025 -0.5 -0.5 0.866025 295.938 249.408)"
//               fill="#333333"
//             />
//             <g id="Group 496_5">
//               <path
//                 id="Rectangle 28_10"
//                 d="M271.911 237.906L273.783 234.663L303.578 251.865C304.473 252.382 304.78 253.527 304.263 254.423V254.423C303.746 255.318 302.601 255.625 301.706 255.108L271.911 237.906Z"
//                 fill="#333333"
//               />
//               <rect
//                 id="Rectangle 29_10"
//                 x="301.597"
//                 y="255.9"
//                 width="3.76394"
//                 height="20.2524"
//                 rx="1.88197"
//                 transform="rotate(-105 301.597 255.9)"
//                 fill="#333333"
//               />
//               <rect
//                 id="Rectangle 30_10"
//                 x="301.925"
//                 y="249.75"
//                 width="3.76394"
//                 height="18.2371"
//                 rx="1.88197"
//                 transform="rotate(-105 301.925 249.75)"
//                 fill="#333333"
//               />
//               <rect
//                 id="Rectangle 31_10"
//                 x="311.098"
//                 y="253.355"
//                 width="3.76394"
//                 height="10.4173"
//                 rx="1.88197"
//                 transform="rotate(-105 311.098 253.355)"
//                 fill="#828282"
//               />
//               <rect
//                 id="Rectangle 32_10"
//                 x="309.739"
//                 y="247.656"
//                 width="3.76394"
//                 height="10.1487"
//                 rx="1.88197"
//                 transform="rotate(-105 309.739 247.656)"
//                 fill="#828282"
//               />
//             </g>
//             <rect
//               id="Rectangle 118_5"
//               x="308.52"
//               y="252.085"
//               width="1.40423"
//               height="5.76934"
//               transform="rotate(165 308.52 252.085)"
//               fill="#333333"
//             />
//           </g>
//           <g id="Antibody_6">
//             <path
//               id="Rectangle 28_11"
//               d="M53.7188 111.933L55.5911 108.69L25.7967 91.4885C24.9012 90.9715 23.7561 91.2783 23.239 92.1738V92.1738C22.722 93.0693 23.0288 94.2144 23.9244 94.7314L53.7188 111.933Z"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 29_11"
//               width="3.76394"
//               height="20.2524"
//               rx="1.88197"
//               transform="matrix(0.965926 -0.258819 -0.258819 -0.965926 23.293 95.222)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 30_11"
//               width="3.76394"
//               height="18.2371"
//               rx="1.88197"
//               transform="matrix(0.965926 -0.258819 -0.258819 -0.965926 28.4551 91.8627)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 31_11"
//               width="3.76394"
//               height="10.4173"
//               rx="1.88197"
//               transform="matrix(0.965926 -0.258819 -0.258819 -0.965926 20.7471 85.7219)"
//               fill="#828282"
//             />
//             <rect
//               id="Rectangle 32_11"
//               width="3.76394"
//               height="10.1487"
//               rx="1.88197"
//               transform="matrix(0.965926 -0.258819 -0.258819 -0.965926 26.3613 84.0481)"
//               fill="#828282"
//             />
//             <rect
//               id="Rectangle 36_6"
//               width="1.40423"
//               height="5.76934"
//               transform="matrix(0.258819 0.965926 0.965926 -0.258819 23.1357 87.3192)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 117_6"
//               width="1.40423"
//               height="5.76934"
//               transform="matrix(0.866025 0.5 0.5 -0.866025 26.1523 100.944)"
//               fill="#333333"
//             />
//             <rect
//               id="Rectangle 120_6"
//               width="1.40423"
//               height="5.76934"
//               transform="matrix(0.866025 0.5 0.5 -0.866025 28.585 102.348)"
//               fill="#333333"
//             />
//             <g id="Group 496_6">
//               <path
//                 id="Rectangle 28_12"
//                 d="M52.6123 113.85L50.74 117.093L20.9456 99.891C20.0501 99.374 19.7433 98.2289 20.2603 97.3334V97.3334C20.7773 96.4379 21.9224 96.131 22.8179 96.648L52.6123 113.85Z"
//                 fill="#333333"
//               />
//               <rect
//                 id="Rectangle 29_12"
//                 x="22.9268"
//                 y="95.856"
//                 width="3.76394"
//                 height="20.2524"
//                 rx="1.88197"
//                 transform="rotate(75 22.9268 95.856)"
//                 fill="#333333"
//               />
//               <rect
//                 id="Rectangle 30_12"
//                 x="22.5986"
//                 y="102.006"
//                 width="3.76394"
//                 height="18.2371"
//                 rx="1.88197"
//                 transform="rotate(75 22.5986 102.006)"
//                 fill="#333333"
//               />
//               <rect
//                 id="Rectangle 31_12"
//                 x="13.4258"
//                 y="98.4006"
//                 width="3.76394"
//                 height="10.4173"
//                 rx="1.88197"
//                 transform="rotate(75 13.4258 98.4006)"
//                 fill="#828282"
//               />
//               <rect
//                 id="Rectangle 32_12"
//                 x="14.7842"
//                 y="104.1"
//                 width="3.76394"
//                 height="10.1487"
//                 rx="1.88197"
//                 transform="rotate(75 14.7842 104.1)"
//                 fill="#828282"
//               />
//             </g>
//             <rect
//               id="Rectangle 118_6"
//               x="16.0039"
//               y="99.6707"
//               width="1.40423"
//               height="5.76934"
//               transform="rotate(-15 16.0039 99.6707)"
//               fill="#333333"
//             />
//           </g>
//         </g>
//         <g id="metalic-coating" className="shadow-2xl">
//           <circle
//             id="Ellipse 39"
//             cx="161.911"
//             cy="175.939"
//             r="126.147"
//             fill="#333333"
//           />
//           <path
//             id="Ellipse 40"
//             d="M284.547 175.939C284.547 243.669 229.641 298.575 161.911 298.575C94.1814 298.575 39.2754 243.669 39.2754 175.939C39.2754 108.209 94.1814 53.3026 161.911 53.3026C229.641 53.3026 284.547 108.209 284.547 175.939Z"
//             fill="white"
//           />
//         </g>
//         <path
//           id="silica-core"
//           d="M279.186 175.822C279.186 240.514 226.743 292.958 162.05 292.958C97.3577 292.958 44.9141 240.514 44.9141 175.822C44.9141 111.129 97.3577 58.6857 162.05 58.6857C226.743 58.6857 279.186 111.129 279.186 175.822Z"
//           fill="#333333"
//         />
//         <g id="radioactive-material">
//           <g id="Ratioactive_Animated" className="animate-ping">
//             <rect
//               id="Rectangle 72"
//               x="143.188"
//               y="110.876"
//               width="38.3074"
//               height="38.3074"
//               rx="19.1537"
//               fill="#333333"
//             />
//             <g id="Group">
//               <path
//                 id="Vector"
//                 d="M162.32 147.052C171.733 147.052 179.364 139.421 179.364 130.008C179.364 120.594 171.733 112.963 162.32 112.963C152.906 112.963 145.275 120.594 145.275 130.008C145.275 139.421 152.906 147.052 162.32 147.052Z"
//                 fill="#FFB710"
//               />
//               <path
//                 id="Vector_2"
//                 d="M162.383 126.928C163.941 126.928 165.206 128.225 165.206 129.823C165.206 131.422 163.941 132.719 162.383 132.719C160.822 132.719 159.56 131.422 159.56 129.823C159.56 128.225 160.822 126.928 162.383 126.928ZM165.035 134.754L168.358 140.792C168.738 141.484 168.454 142.365 167.743 142.68C166.1 143.408 164.287 143.812 162.383 143.812C160.432 143.812 158.579 143.389 156.903 142.627C156.194 142.304 155.917 141.42 156.304 140.732L159.684 134.727C159.985 134.193 160.603 133.934 161.179 134.109C161.57 134.228 161.975 134.288 162.383 134.287C162.784 134.287 163.173 134.23 163.541 134.123C164.121 133.954 164.739 134.215 165.035 134.754ZM174.536 129.933H167.764C167.163 129.933 166.65 129.504 166.508 128.904C166.316 128.094 165.903 127.372 165.338 126.81C164.906 126.38 164.82 125.701 165.126 125.17L168.561 119.2C168.958 118.511 169.849 118.332 170.474 118.81C171.825 119.846 172.977 121.13 173.87 122.597C174.925 124.331 175.617 126.321 175.837 128.455C175.919 129.245 175.311 129.933 174.536 129.933ZM159.428 126.81C158.862 127.372 158.449 128.094 158.258 128.905C158.116 129.504 157.603 129.933 157.001 129.933H150.23C149.452 129.933 148.847 129.241 148.929 128.448C149.195 125.889 150.139 123.537 151.573 121.587C152.348 120.533 153.265 119.597 154.297 118.807C154.92 118.33 155.809 118.514 156.204 119.201L159.64 125.17C159.946 125.701 159.86 126.38 159.428 126.81Z"
//                 fill="#333333"
//               />
//             </g>
//           </g>

//           <g id="Ratioactive">
//             <rect
//               id="Rectangle 72"
//               x="143.188"
//               y="110.876"
//               width="38.3074"
//               height="38.3074"
//               rx="19.1537"
//               fill="#333333"
//             />
//             <g id="Group">
//               <path
//                 id="Vector"
//                 d="M162.32 147.052C171.733 147.052 179.364 139.421 179.364 130.008C179.364 120.594 171.733 112.963 162.32 112.963C152.906 112.963 145.275 120.594 145.275 130.008C145.275 139.421 152.906 147.052 162.32 147.052Z"
//                 fill="#FFB710"
//               />
//               <path
//                 id="Vector_2"
//                 d="M162.383 126.928C163.941 126.928 165.206 128.225 165.206 129.823C165.206 131.422 163.941 132.719 162.383 132.719C160.822 132.719 159.56 131.422 159.56 129.823C159.56 128.225 160.822 126.928 162.383 126.928ZM165.035 134.754L168.358 140.792C168.738 141.484 168.454 142.365 167.743 142.68C166.1 143.408 164.287 143.812 162.383 143.812C160.432 143.812 158.579 143.389 156.903 142.627C156.194 142.304 155.917 141.42 156.304 140.732L159.684 134.727C159.985 134.193 160.603 133.934 161.179 134.109C161.57 134.228 161.975 134.288 162.383 134.287C162.784 134.287 163.173 134.23 163.541 134.123C164.121 133.954 164.739 134.215 165.035 134.754ZM174.536 129.933H167.764C167.163 129.933 166.65 129.504 166.508 128.904C166.316 128.094 165.903 127.372 165.338 126.81C164.906 126.38 164.82 125.701 165.126 125.17L168.561 119.2C168.958 118.511 169.849 118.332 170.474 118.81C171.825 119.846 172.977 121.13 173.87 122.597C174.925 124.331 175.617 126.321 175.837 128.455C175.919 129.245 175.311 129.933 174.536 129.933ZM159.428 126.81C158.862 127.372 158.449 128.094 158.258 128.905C158.116 129.504 157.603 129.933 157.001 129.933H150.23C149.452 129.933 148.847 129.241 148.929 128.448C149.195 125.889 150.139 123.537 151.573 121.587C152.348 120.533 153.265 119.597 154.297 118.807C154.92 118.33 155.809 118.514 156.204 119.201L159.64 125.17C159.946 125.701 159.86 126.38 159.428 126.81Z"
//                 fill="#333333"
//               />
//             </g>
//           </g>

//           <g id="Ratioactive_2">
//             <rect
//               id="Rectangle 72_2"
//               x="143.188"
//               y="202.619"
//               width="38.3074"
//               height="38.3074"
//               rx="19.1537"
//               fill="#333333"
//             />
//             <g id="Group_2">
//               <path
//                 id="Vector_3"
//                 d="M162.32 238.795C171.733 238.795 179.364 231.164 179.364 221.75C179.364 212.337 171.733 204.706 162.32 204.706C152.906 204.706 145.275 212.337 145.275 221.75C145.275 231.164 152.906 238.795 162.32 238.795Z"
//                 fill="#FFB710"
//               />
//               <path
//                 id="Vector_4"
//                 d="M162.383 218.671C163.941 218.671 165.206 219.968 165.206 221.566C165.206 223.165 163.941 224.462 162.383 224.462C160.822 224.462 159.56 223.165 159.56 221.566C159.56 219.968 160.822 218.671 162.383 218.671ZM165.035 226.497L168.358 232.535C168.738 233.227 168.454 234.108 167.743 234.423C166.1 235.151 164.287 235.555 162.383 235.555C160.432 235.555 158.579 235.132 156.903 234.37C156.194 234.047 155.917 233.163 156.304 232.475L159.684 226.47C159.985 225.936 160.603 225.677 161.179 225.852C161.57 225.971 161.975 226.031 162.383 226.03C162.784 226.03 163.173 225.973 163.541 225.866C164.121 225.697 164.739 225.958 165.035 226.497ZM174.536 221.676H167.764C167.163 221.676 166.65 221.247 166.508 220.647C166.316 219.837 165.903 219.115 165.338 218.553C164.906 218.123 164.82 217.444 165.126 216.913L168.561 210.943C168.958 210.254 169.849 210.074 170.474 210.553C171.825 211.588 172.977 212.873 173.87 214.34C174.925 216.074 175.617 218.064 175.837 220.198C175.919 220.988 175.311 221.676 174.536 221.676ZM159.428 218.553C158.862 219.115 158.449 219.837 158.258 220.647C158.116 221.247 157.603 221.676 157.001 221.676H150.23C149.452 221.676 148.847 220.984 148.929 220.191C149.195 217.632 150.139 215.28 151.573 213.33C152.348 212.276 153.265 211.34 154.297 210.55C154.92 210.073 155.809 210.257 156.204 210.943L159.64 216.913C159.946 217.444 159.86 218.123 159.428 218.553Z"
//                 fill="#333333"
//               />
//             </g>
//           </g>
//           <g id="Ratioactive_3">
//             <rect
//               id="Rectangle 72_3"
//               x="143.188"
//               y="248.49"
//               width="38.3074"
//               height="38.3074"
//               rx="19.1537"
//               fill="#333333"
//             />
//             <g id="Group_3">
//               <path
//                 id="Vector_5"
//                 d="M162.32 284.666C171.733 284.666 179.364 277.035 179.364 267.622C179.364 258.208 171.733 250.578 162.32 250.578C152.906 250.578 145.275 258.208 145.275 267.622C145.275 277.035 152.906 284.666 162.32 284.666Z"
//                 fill="#FFB710"
//               />
//               <path
//                 id="Vector_6"
//                 d="M162.383 264.542C163.941 264.542 165.206 265.839 165.206 267.438C165.206 269.036 163.941 270.333 162.383 270.333C160.822 270.333 159.56 269.036 159.56 267.438C159.56 265.839 160.822 264.542 162.383 264.542ZM165.035 272.368L168.358 278.407C168.738 279.098 168.454 279.979 167.743 280.294C166.1 281.023 164.287 281.426 162.383 281.426C160.432 281.426 158.579 281.003 156.903 280.241C156.194 279.918 155.917 279.034 156.304 278.346L159.684 272.341C159.985 271.807 160.603 271.549 161.179 271.723C161.57 271.842 161.975 271.902 162.383 271.902C162.784 271.902 163.173 271.844 163.541 271.737C164.121 271.568 164.739 271.83 165.035 272.368ZM174.536 267.548H167.764C167.163 267.548 166.65 267.118 166.508 266.519C166.316 265.708 165.903 264.986 165.338 264.424C164.906 263.995 164.82 263.316 165.126 262.784L168.561 256.814C168.958 256.125 169.849 255.946 170.474 256.425C171.825 257.46 172.977 258.744 173.87 260.211C174.925 261.946 175.617 263.935 175.837 266.069C175.919 266.86 175.311 267.548 174.536 267.548ZM159.428 264.424C158.862 264.986 158.449 265.708 158.258 266.519C158.116 267.118 157.603 267.548 157.001 267.548H150.23C149.452 267.548 148.847 266.856 148.929 266.063C149.195 263.504 150.139 261.152 151.573 259.201C152.348 258.147 153.265 257.211 154.297 256.421C154.92 255.944 155.809 256.128 156.204 256.815L159.64 262.784C159.946 263.316 159.86 263.995 159.428 264.424Z"
//                 fill="#333333"
//               />
//             </g>
//           </g>
//           <g id="Ratioactive_4">
//             <rect
//               id="Rectangle 72_4"
//               x="143.188"
//               y="65.0044"
//               width="38.3074"
//               height="38.3074"
//               rx="19.1537"
//               fill="#333333"
//             />
//             <g id="Group_4">
//               <path
//                 id="Vector_7"
//                 d="M162.32 101.18C171.733 101.18 179.364 93.5492 179.364 84.1359C179.364 74.7227 171.733 67.0917 162.32 67.0917C152.906 67.0917 145.275 74.7227 145.275 84.1359C145.275 93.5492 152.906 101.18 162.32 101.18Z"
//                 fill="#FFB710"
//               />
//               <path
//                 id="Vector_8"
//                 d="M162.383 81.0562C163.941 81.0562 165.206 82.3534 165.206 83.9517C165.206 85.5501 163.941 86.8473 162.383 86.8473C160.822 86.8473 159.56 85.5501 159.56 83.9517C159.56 82.3534 160.822 81.0562 162.383 81.0562ZM165.035 88.8823L168.358 94.9207C168.738 95.6124 168.454 96.4935 167.743 96.8084C166.1 97.5367 164.287 97.9401 162.383 97.9401C160.432 97.9401 158.579 97.5171 156.903 96.755C156.194 96.4326 155.917 95.5487 156.304 94.86L159.684 88.8552C159.985 88.3215 160.603 88.0627 161.179 88.2376C161.57 88.3561 161.975 88.4161 162.383 88.4158C162.784 88.4158 163.173 88.3584 163.541 88.2514C164.121 88.0826 164.739 88.3437 165.035 88.8823ZM174.536 84.0618H167.764C167.163 84.0618 166.65 83.6325 166.508 83.0328C166.316 82.2223 165.903 81.5003 165.338 80.9384C164.906 80.5087 164.82 79.8297 165.126 79.298L168.561 73.3284C168.958 72.6394 169.849 72.4599 170.474 72.9388C171.825 73.974 172.977 75.2581 173.87 76.7256C174.925 78.4597 175.617 80.4492 175.837 82.5831C175.919 83.3738 175.311 84.0618 174.536 84.0618ZM159.428 80.9385C158.862 81.5004 158.449 82.2223 158.258 83.0329C158.116 83.6327 157.603 84.0619 157.001 84.0619H150.23C149.452 84.0619 148.847 83.3699 148.929 82.5769C149.195 80.0178 150.139 77.6657 151.573 75.7156C152.348 74.6612 153.265 73.7251 154.297 72.9351C154.92 72.4582 155.809 72.6423 156.204 73.3289L159.64 79.2983C159.946 79.8298 159.86 80.5088 159.428 80.9385Z"
//                 fill="#333333"
//               />
//             </g>
//           </g>
//           <g id="Ratioactive_5">
//             <rect
//               id="Rectangle 72_5"
//               x="182.914"
//               y="133.812"
//               width="38.3074"
//               height="38.3074"
//               rx="19.1537"
//               fill="#333333"
//             />
//             <g id="Group_5">
//               <path
//                 id="Vector_9"
//                 d="M202.045 169.987C211.459 169.987 219.09 162.356 219.09 152.943C219.09 143.53 211.459 135.899 202.045 135.899C192.632 135.899 185.001 143.53 185.001 152.943C185.001 162.356 192.632 169.987 202.045 169.987Z"
//                 fill="#FFB710"
//               />
//               <path
//                 id="Vector_10"
//                 d="M202.109 149.863C203.667 149.863 204.932 151.161 204.932 152.759C204.932 154.357 203.667 155.655 202.109 155.655C200.548 155.655 199.286 154.357 199.286 152.759C199.286 151.161 200.548 149.863 202.109 149.863ZM204.76 157.69L208.083 163.728C208.464 164.42 208.18 165.301 207.469 165.616C205.825 166.344 204.012 166.747 202.109 166.747C200.158 166.747 198.304 166.324 196.629 165.562C195.92 165.24 195.642 164.356 196.03 163.667L199.41 157.662C199.711 157.129 200.328 156.87 200.904 157.045C201.295 157.163 201.701 157.223 202.109 157.223C202.51 157.223 202.899 157.166 203.267 157.059C203.847 156.89 204.464 157.151 204.76 157.69ZM214.262 152.869H207.49C206.888 152.869 206.375 152.44 206.234 151.84C206.042 151.03 205.629 150.308 205.063 149.746C204.631 149.316 204.545 148.637 204.851 148.105L208.287 142.136C208.684 141.447 209.575 141.267 210.2 141.746C211.551 142.781 212.702 144.065 213.595 145.533C214.65 147.267 215.342 149.256 215.563 151.39C215.644 152.181 215.037 152.869 214.262 152.869ZM199.153 149.746C198.588 150.308 198.175 151.03 197.983 151.84C197.841 152.44 197.329 152.869 196.727 152.869H189.955C189.178 152.869 188.573 152.177 188.655 151.384C188.921 148.825 189.865 146.473 191.298 144.523C192.074 143.468 192.991 142.532 194.023 141.742C194.646 141.265 195.535 141.45 195.93 142.136L199.366 148.106C199.672 148.637 199.586 149.316 199.153 149.746Z"
//                 fill="#333333"
//               />
//             </g>
//           </g>
//           <g id="Ratioactive_6">
//             <rect
//               id="Rectangle 72_6"
//               x="103.463"
//               y="179.683"
//               width="38.3074"
//               height="38.3074"
//               rx="19.1537"
//               fill="#333333"
//             />
//             <g id="Group_6">
//               <path
//                 id="Vector_11"
//                 d="M122.594 215.859C132.007 215.859 139.638 208.228 139.638 198.815C139.638 189.401 132.007 181.77 122.594 181.77C113.181 181.77 105.55 189.401 105.55 198.815C105.55 208.228 113.181 215.859 122.594 215.859Z"
//                 fill="#FFB710"
//               />
//               <path
//                 id="Vector_12"
//                 d="M122.658 195.735C124.216 195.735 125.481 197.032 125.481 198.63C125.481 200.229 124.216 201.526 122.658 201.526C121.097 201.526 119.835 200.229 119.835 198.63C119.835 197.032 121.097 195.735 122.658 195.735ZM125.309 203.561L128.632 209.599C129.013 210.291 128.729 211.172 128.018 211.487C126.374 212.215 124.561 212.619 122.658 212.619C120.707 212.619 118.853 212.196 117.177 211.434C116.469 211.111 116.191 210.227 116.579 209.539L119.959 203.534C120.259 203 120.877 202.741 121.453 202.916C121.844 203.035 122.25 203.095 122.658 203.094C123.059 203.094 123.447 203.037 123.816 202.93C124.396 202.761 125.013 203.022 125.309 203.561ZM134.811 198.74H128.039C127.437 198.74 126.924 198.311 126.782 197.712C126.591 196.901 126.178 196.179 125.612 195.617C125.18 195.187 125.094 194.508 125.4 193.977L128.836 188.007C129.232 187.318 130.124 187.139 130.749 187.618C132.1 188.653 133.251 189.937 134.144 191.404C135.199 193.138 135.891 195.128 136.111 197.262C136.193 198.053 135.586 198.74 134.811 198.74ZM119.702 195.617C119.137 196.179 118.724 196.901 118.532 197.712C118.39 198.311 117.877 198.741 117.276 198.741H110.504C109.726 198.741 109.122 198.049 109.204 197.256C109.469 194.696 110.413 192.344 111.847 190.394C112.622 189.34 113.54 188.404 114.572 187.614C115.194 187.137 116.084 187.321 116.479 188.008L119.914 193.977C120.221 194.509 120.135 195.188 119.702 195.617Z"
//                 fill="#333333"
//               />
//             </g>
//           </g>
//           <g id="Ratioactive_7">
//             <rect
//               id="Rectangle 72_7"
//               x="63.7354"
//               y="202.619"
//               width="38.3074"
//               height="38.3074"
//               rx="19.1537"
//               fill="#333333"
//             />
//             <g id="Group_7">
//               <path
//                 id="Vector_13"
//                 d="M82.8665 238.795C92.2798 238.795 99.9108 231.164 99.9108 221.75C99.9108 212.337 92.2798 204.706 82.8665 204.706C73.4532 204.706 65.8223 212.337 65.8223 221.75C65.8223 231.164 73.4532 238.795 82.8665 238.795Z"
//                 fill="#FFB710"
//               />
//               <path
//                 id="Vector_14"
//                 d="M82.93 218.671C84.4883 218.671 85.753 219.968 85.753 221.566C85.753 223.165 84.4883 224.462 82.93 224.462C81.3692 224.462 80.107 223.165 80.107 221.566C80.107 219.968 81.3692 218.671 82.93 218.671ZM85.5818 226.497L88.9045 232.535C89.2852 233.227 89.0011 234.108 88.2902 234.423C86.6465 235.151 84.8337 235.555 82.9301 235.555C80.9792 235.555 79.1255 235.132 77.4499 234.37C76.7412 234.047 76.4637 233.163 76.8513 232.475L80.2314 226.47C80.5318 225.936 81.1494 225.677 81.7256 225.852C82.1167 225.971 82.5224 226.031 82.9301 226.03C83.3314 226.03 83.7199 225.973 84.0882 225.866C84.6682 225.697 85.2854 225.958 85.5818 226.497ZM95.0831 221.676H88.3112C87.7096 221.676 87.1966 221.247 87.0549 220.647C86.8632 219.837 86.4501 219.115 85.8848 218.553C85.4524 218.123 85.3664 217.444 85.6725 216.913L89.1083 210.943C89.5049 210.254 90.396 210.074 91.021 210.553C92.3722 211.588 93.5236 212.873 94.4164 214.34C95.4716 216.074 96.1635 218.064 96.3839 220.198C96.4655 220.988 95.8581 221.676 95.0831 221.676ZM79.9747 218.553C79.4093 219.115 78.9962 219.837 78.8046 220.647C78.6627 221.247 78.1498 221.676 77.5482 221.676H70.7764C69.9989 221.676 69.394 220.984 69.4763 220.191C69.7418 217.632 70.6858 215.28 72.1196 213.33C72.8949 212.276 73.8122 211.34 74.844 210.55C75.4669 210.073 76.3561 210.257 76.7513 210.943L80.1869 216.913C80.493 217.444 80.407 218.123 79.9747 218.553Z"
//                 fill="#333333"
//               />
//             </g>
//           </g>
//           <g id="Ratioactive_8">
//             <rect
//               id="Rectangle 72_8"
//               x="222.64"
//               y="110.876"
//               width="38.3074"
//               height="38.3074"
//               rx="19.1537"
//               fill="#333333"
//             />
//             <g id="Group_8">
//               <path
//                 id="Vector_15"
//                 d="M241.771 147.052C251.184 147.052 258.815 139.421 258.815 130.008C258.815 120.594 251.184 112.963 241.771 112.963C232.358 112.963 224.727 120.594 224.727 130.008C224.727 139.421 232.358 147.052 241.771 147.052Z"
//                 fill="#FFB710"
//               />
//               <path
//                 id="Vector_16"
//                 d="M241.834 126.928C243.393 126.928 244.657 128.225 244.657 129.823C244.657 131.422 243.393 132.719 241.834 132.719C240.274 132.719 239.011 131.422 239.011 129.823C239.011 128.225 240.274 126.928 241.834 126.928ZM244.486 134.754L247.809 140.792C248.189 141.484 247.905 142.365 247.195 142.68C245.551 143.408 243.738 143.812 241.834 143.812C239.884 143.812 238.03 143.389 236.354 142.627C235.645 142.304 235.368 141.42 235.756 140.732L239.136 134.727C239.436 134.193 240.054 133.934 240.63 134.109C241.021 134.228 241.427 134.288 241.834 134.287C242.236 134.287 242.624 134.23 242.993 134.123C243.573 133.954 244.19 134.215 244.486 134.754ZM253.987 129.933H247.215C246.614 129.933 246.101 129.504 245.959 128.904C245.767 128.094 245.354 127.372 244.789 126.81C244.357 126.38 244.271 125.701 244.577 125.17L248.013 119.2C248.409 118.511 249.3 118.332 249.925 118.81C251.277 119.846 252.428 121.13 253.321 122.597C254.376 124.331 255.068 126.321 255.288 128.455C255.37 129.245 254.762 129.933 253.987 129.933ZM238.879 126.81C238.314 127.372 237.901 128.094 237.709 128.905C237.567 129.504 237.054 129.933 236.453 129.933H229.681C228.903 129.933 228.298 129.241 228.381 128.448C228.646 125.889 229.59 123.537 231.024 121.587C231.799 120.533 232.716 119.597 233.748 118.807C234.371 118.33 235.26 118.514 235.656 119.201L239.091 125.17C239.397 125.701 239.311 126.38 238.879 126.81Z"
//                 fill="#333333"
//               />
//             </g>
//           </g>
//           <g id="Ratioactive_9">
//             <rect
//               id="Rectangle 72_9"
//               x="143.188"
//               y="156.747"
//               width="38.3074"
//               height="38.3074"
//               rx="19.1537"
//               fill="#333333"
//             />
//             <g id="Group_9">
//               <path
//                 id="Vector_17"
//                 d="M162.32 192.923C171.733 192.923 179.364 185.292 179.364 175.879C179.364 166.466 171.733 158.835 162.32 158.835C152.906 158.835 145.275 166.466 145.275 175.879C145.275 185.292 152.906 192.923 162.32 192.923Z"
//                 fill="#FFB710"
//               />
//               <path
//                 id="Vector_18"
//                 d="M162.383 172.799C163.941 172.799 165.206 174.096 165.206 175.695C165.206 177.293 163.941 178.59 162.383 178.59C160.822 178.59 159.56 177.293 159.56 175.695C159.56 174.096 160.822 172.799 162.383 172.799ZM165.035 180.625L168.358 186.664C168.738 187.355 168.454 188.236 167.743 188.551C166.1 189.28 164.287 189.683 162.383 189.683C160.432 189.683 158.579 189.26 156.903 188.498C156.194 188.176 155.917 187.292 156.304 186.603L159.684 180.598C159.985 180.064 160.603 179.806 161.179 179.981C161.57 180.099 161.975 180.159 162.383 180.159C162.784 180.159 163.173 180.101 163.541 179.994C164.121 179.826 164.739 180.087 165.035 180.625ZM174.536 175.805H167.764C167.163 175.805 166.65 175.375 166.508 174.776C166.316 173.965 165.903 173.243 165.338 172.681C164.906 172.252 164.82 171.573 165.126 171.041L168.561 165.071C168.958 164.382 169.849 164.203 170.474 164.682C171.825 165.717 172.977 167.001 173.87 168.469C174.925 170.203 175.617 172.192 175.837 174.326C175.919 175.117 175.311 175.805 174.536 175.805ZM159.428 172.681C158.862 173.243 158.449 173.965 158.258 174.776C158.116 175.376 157.603 175.805 157.001 175.805H150.23C149.452 175.805 148.847 175.113 148.929 174.32C149.195 171.761 150.139 169.409 151.573 167.458C152.348 166.404 153.265 165.468 154.297 164.678C154.92 164.201 155.809 164.385 156.204 165.072L159.64 171.041C159.946 171.573 159.86 172.252 159.428 172.681Z"
//                 fill="#333333"
//               />
//             </g>
//           </g>
//           <g id="Ratioactive_10">
//             <rect
//               id="Rectangle 72_10"
//               x="103.463"
//               y="133.812"
//               width="38.3074"
//               height="38.3074"
//               rx="19.1537"
//               fill="#333333"
//             />
//             <g id="Group_10">
//               <path
//                 id="Vector_19"
//                 d="M122.594 169.987C132.007 169.987 139.638 162.356 139.638 152.943C139.638 143.53 132.007 135.899 122.594 135.899C113.181 135.899 105.55 143.53 105.55 152.943C105.55 162.356 113.181 169.987 122.594 169.987Z"
//                 fill="#FFB710"
//               />
//               <path
//                 id="Vector_20"
//                 d="M122.658 149.863C124.216 149.863 125.481 151.161 125.481 152.759C125.481 154.357 124.216 155.654 122.658 155.654C121.097 155.654 119.835 154.357 119.835 152.759C119.835 151.161 121.097 149.863 122.658 149.863ZM125.309 157.689L128.632 163.728C129.013 164.419 128.729 165.301 128.018 165.616C126.374 166.344 124.561 166.747 122.658 166.747C120.707 166.747 118.853 166.324 117.177 165.562C116.469 165.24 116.191 164.356 116.579 163.667L119.959 157.662C120.259 157.129 120.877 156.87 121.453 157.045C121.844 157.163 122.25 157.223 122.658 157.223C123.059 157.223 123.447 157.166 123.816 157.059C124.396 156.89 125.013 157.151 125.309 157.689ZM134.811 152.869H128.039C127.437 152.869 126.924 152.44 126.782 151.84C126.591 151.029 126.178 150.307 125.612 149.745C125.18 149.316 125.094 148.637 125.4 148.105L128.836 142.136C129.232 141.447 130.124 141.267 130.749 141.746C132.1 142.781 133.251 144.065 134.144 145.533C135.199 147.267 135.891 149.256 136.111 151.39C136.193 152.181 135.586 152.869 134.811 152.869ZM119.702 149.746C119.137 150.308 118.724 151.029 118.532 151.84C118.39 152.44 117.877 152.869 117.276 152.869H110.504C109.726 152.869 109.122 152.177 109.204 151.384C109.469 148.825 110.413 146.473 111.847 144.523C112.622 143.468 113.54 142.532 114.572 141.742C115.194 141.265 116.084 141.449 116.479 142.136L119.914 148.105C120.221 148.637 120.135 149.316 119.702 149.746Z"
//                 fill="#333333"
//               />
//             </g>
//           </g>
//           <g id="Ratioactive_11">
//             <rect
//               id="Rectangle 72_11"
//               x="182.913"
//               y="179.683"
//               width="38.3074"
//               height="38.3074"
//               rx="19.1537"
//               fill="#333333"
//             />
//             <g id="Group_11">
//               <path
//                 id="Vector_21"
//                 d="M202.044 215.859C211.458 215.859 219.089 208.228 219.089 198.815C219.089 189.401 211.458 181.77 202.044 181.77C192.631 181.77 185 189.401 185 198.815C185 208.228 192.631 215.859 202.044 215.859Z"
//                 fill="#FFB710"
//               />
//               <path
//                 id="Vector_22"
//                 d="M202.108 195.735C203.666 195.735 204.931 197.032 204.931 198.63C204.931 200.229 203.666 201.526 202.108 201.526C200.547 201.526 199.285 200.229 199.285 198.63C199.285 197.032 200.547 195.735 202.108 195.735ZM204.76 203.561L208.082 209.599C208.463 210.291 208.179 211.172 207.468 211.487C205.824 212.215 204.011 212.619 202.108 212.619C200.157 212.619 198.303 212.196 196.628 211.434C195.919 211.111 195.641 210.227 196.029 209.539L199.409 203.534C199.71 203 200.327 202.741 200.903 202.916C201.294 203.035 201.7 203.095 202.108 203.094C202.509 203.094 202.898 203.037 203.266 202.93C203.846 202.761 204.463 203.022 204.76 203.561ZM214.261 198.74H207.489C206.887 198.74 206.374 198.311 206.233 197.712C206.041 196.901 205.628 196.179 205.063 195.617C204.63 195.187 204.544 194.508 204.85 193.977L208.286 188.007C208.683 187.318 209.574 187.139 210.199 187.618C211.55 188.653 212.701 189.937 213.594 191.404C214.649 193.138 215.341 195.128 215.562 197.262C215.643 198.053 215.036 198.74 214.261 198.74ZM199.152 195.617C198.587 196.179 198.174 196.901 197.982 197.712C197.84 198.311 197.328 198.741 196.726 198.741H189.954C189.177 198.741 188.572 198.049 188.654 197.256C188.92 194.696 189.864 192.344 191.297 190.394C192.073 189.34 192.99 188.404 194.022 187.614C194.645 187.137 195.534 187.321 195.929 188.008L199.365 193.977C199.671 194.509 199.585 195.188 199.152 195.617Z"
//                 fill="#333333"
//               />
//             </g>
//           </g>
//           <g id="Ratioactive_12">
//             <rect
//               id="Rectangle 72_12"
//               x="222.64"
//               y="202.619"
//               width="38.3074"
//               height="38.3074"
//               rx="19.1537"
//               fill="#333333"
//             />
//             <g id="Group_12">
//               <path
//                 id="Vector_23"
//                 d="M241.771 238.795C251.184 238.795 258.815 231.164 258.815 221.75C258.815 212.337 251.184 204.706 241.771 204.706C232.358 204.706 224.727 212.337 224.727 221.75C224.727 231.164 232.358 238.795 241.771 238.795Z"
//                 fill="#FFB710"
//               />
//               <path
//                 id="Vector_24"
//                 d="M241.834 218.671C243.393 218.671 244.657 219.968 244.657 221.566C244.657 223.165 243.393 224.462 241.834 224.462C240.274 224.462 239.011 223.165 239.011 221.566C239.011 219.968 240.274 218.671 241.834 218.671ZM244.486 226.497L247.809 232.535C248.189 233.227 247.905 234.108 247.195 234.423C245.551 235.151 243.738 235.555 241.834 235.555C239.884 235.555 238.03 235.132 236.354 234.37C235.645 234.047 235.368 233.163 235.756 232.475L239.136 226.47C239.436 225.936 240.054 225.677 240.63 225.852C241.021 225.971 241.427 226.031 241.834 226.03C242.236 226.03 242.624 225.973 242.993 225.866C243.573 225.697 244.19 225.958 244.486 226.497ZM253.987 221.676H247.215C246.614 221.676 246.101 221.247 245.959 220.647C245.767 219.837 245.354 219.115 244.789 218.553C244.357 218.123 244.271 217.444 244.577 216.913L248.013 210.943C248.409 210.254 249.3 210.074 249.925 210.553C251.277 211.588 252.428 212.873 253.321 214.34C254.376 216.074 255.068 218.064 255.288 220.198C255.37 220.988 254.762 221.676 253.987 221.676ZM238.879 218.553C238.314 219.115 237.901 219.837 237.709 220.647C237.567 221.247 237.054 221.676 236.453 221.676H229.681C228.903 221.676 228.298 220.984 228.381 220.191C228.646 217.632 229.59 215.28 231.024 213.33C231.799 212.276 232.716 211.34 233.748 210.55C234.371 210.073 235.26 210.257 235.656 210.943L239.091 216.913C239.397 217.444 239.311 218.123 238.879 218.553Z"
//                 fill="#333333"
//               />
//             </g>
//           </g>
//           <g id="Ratioactive_13">
//             <rect
//               id="Rectangle 72_13"
//               x="63.7354"
//               y="110.876"
//               width="38.3074"
//               height="38.3074"
//               rx="19.1537"
//               fill="#333333"
//             />
//             <g id="Group_13">
//               <path
//                 id="Vector_25"
//                 d="M82.8665 147.052C92.2798 147.052 99.9108 139.421 99.9108 130.008C99.9108 120.594 92.2798 112.963 82.8665 112.963C73.4532 112.963 65.8223 120.594 65.8223 130.008C65.8223 139.421 73.4532 147.052 82.8665 147.052Z"
//                 fill="#FFB710"
//               />
//               <path
//                 id="Vector_26"
//                 d="M82.93 126.928C84.4883 126.928 85.753 128.225 85.753 129.823C85.753 131.422 84.4883 132.719 82.93 132.719C81.3692 132.719 80.107 131.422 80.107 129.823C80.107 128.225 81.3692 126.928 82.93 126.928ZM85.5818 134.754L88.9045 140.792C89.2852 141.484 89.0011 142.365 88.2902 142.68C86.6465 143.408 84.8337 143.812 82.9301 143.812C80.9792 143.812 79.1255 143.389 77.4499 142.627C76.7412 142.304 76.4637 141.42 76.8513 140.732L80.2314 134.727C80.5318 134.193 81.1494 133.934 81.7256 134.109C82.1167 134.228 82.5224 134.288 82.9301 134.287C83.3314 134.287 83.7199 134.23 84.0882 134.123C84.6682 133.954 85.2854 134.215 85.5818 134.754ZM95.0831 129.933H88.3112C87.7096 129.933 87.1966 129.504 87.0549 128.904C86.8632 128.094 86.4501 127.372 85.8848 126.81C85.4524 126.38 85.3664 125.701 85.6725 125.17L89.1083 119.2C89.5049 118.511 90.396 118.332 91.021 118.81C92.3722 119.846 93.5236 121.13 94.4164 122.597C95.4716 124.331 96.1635 126.321 96.3839 128.455C96.4655 129.245 95.8581 129.933 95.0831 129.933ZM79.9747 126.81C79.4093 127.372 78.9962 128.094 78.8046 128.905C78.6627 129.504 78.1498 129.933 77.5482 129.933H70.7764C69.9989 129.933 69.394 129.241 69.4763 128.448C69.7418 125.889 70.6858 123.537 72.1196 121.587C72.8949 120.533 73.8122 119.597 74.844 118.807C75.4669 118.33 76.3561 118.514 76.7513 119.201L80.1869 125.17C80.493 125.701 80.407 126.38 79.9747 126.81Z"
//                 fill="#333333"
//               />
//             </g>
//           </g>
//           <g id="Ratioactive_14">
//             <rect
//               id="Rectangle 72_14"
//               x="234.932"
//               y="156.747"
//               width="38.3074"
//               height="38.3074"
//               rx="19.1537"
//               fill="#333333"
//             />
//             <g id="Group_14">
//               <path
//                 id="Vector_27"
//                 d="M254.063 192.923C263.476 192.923 271.107 185.292 271.107 175.879C271.107 166.466 263.476 158.835 254.063 158.835C244.65 158.835 237.019 166.466 237.019 175.879C237.019 185.292 244.65 192.923 254.063 192.923Z"
//                 fill="#FFB710"
//               />
//               <path
//                 id="Vector_28"
//                 d="M254.126 172.799C255.685 172.799 256.949 174.096 256.949 175.695C256.949 177.293 255.685 178.59 254.126 178.59C252.565 178.59 251.303 177.293 251.303 175.695C251.303 174.096 252.565 172.799 254.126 172.799ZM256.778 180.625L260.101 186.664C260.481 187.355 260.197 188.237 259.487 188.551C257.843 189.28 256.03 189.683 254.126 189.683C252.176 189.683 250.322 189.26 248.646 188.498C247.937 188.176 247.66 187.292 248.048 186.603L251.428 180.598C251.728 180.064 252.346 179.806 252.922 179.981C253.313 180.099 253.719 180.159 254.126 180.159C254.528 180.159 254.916 180.101 255.285 179.994C255.865 179.826 256.482 180.087 256.778 180.625ZM266.279 175.805H259.507C258.906 175.805 258.393 175.376 258.251 174.776C258.059 173.965 257.646 173.243 257.081 172.681C256.649 172.252 256.563 171.573 256.869 171.041L260.305 165.071C260.701 164.382 261.592 164.203 262.217 164.682C263.568 165.717 264.72 167.001 265.613 168.469C266.668 170.203 267.36 172.192 267.58 174.326C267.662 175.117 267.054 175.805 266.279 175.805ZM251.171 172.682C250.606 173.243 250.193 173.965 250.001 174.776C249.859 175.376 249.346 175.805 248.745 175.805H241.973C241.195 175.805 240.59 175.113 240.673 174.32C240.938 171.761 241.882 169.409 243.316 167.459C244.091 166.404 245.008 165.468 246.04 164.678C246.663 164.201 247.552 164.385 247.948 165.072L251.383 171.041C251.689 171.573 251.603 172.252 251.171 172.682Z"
//                 fill="#333333"
//               />
//             </g>
//           </g>
//           <g id="Ratioactive_15">
//             <rect
//               id="Rectangle 72_15"
//               x="51.4453"
//               y="156.747"
//               width="38.3074"
//               height="38.3074"
//               rx="19.1537"
//               fill="#333333"
//             />
//             <g id="Group_15">
//               <path
//                 id="Vector_29"
//                 d="M70.5765 192.923C79.9898 192.923 87.6208 185.292 87.6208 175.879C87.6208 166.466 79.9898 158.835 70.5765 158.835C61.1632 158.835 53.5322 166.466 53.5322 175.879C53.5322 185.292 61.1632 192.923 70.5765 192.923Z"
//                 fill="#FFB710"
//               />
//               <path
//                 id="Vector_30"
//                 d="M70.6399 172.799C72.1983 172.799 73.4629 174.096 73.4629 175.695C73.4629 177.293 72.1982 178.59 70.6399 178.59C69.0792 178.59 67.817 177.293 67.817 175.695C67.817 174.096 69.0792 172.799 70.6399 172.799ZM73.2917 180.625L76.6145 186.664C76.9951 187.355 76.711 188.237 76.0002 188.551C74.3565 189.28 72.5437 189.683 70.6401 189.683C68.6892 189.683 66.8355 189.26 65.1599 188.498C64.4511 188.176 64.1736 187.292 64.5613 186.603L67.9413 180.598C68.2418 180.064 68.8594 179.806 69.4356 179.981C69.8267 180.099 70.2323 180.159 70.6401 180.159C71.0413 180.159 71.4299 180.101 71.7982 179.994C72.3782 179.826 72.9953 180.087 73.2917 180.625ZM82.7931 175.805H76.0212C75.4195 175.805 74.9066 175.376 74.7648 174.776C74.5732 173.965 74.1601 173.243 73.5947 172.681C73.1624 172.252 73.0764 171.573 73.3825 171.041L76.8183 165.071C77.2149 164.382 78.106 164.203 78.731 164.682C80.0822 165.717 81.2336 167.001 82.1264 168.469C83.1815 170.203 83.8735 172.192 84.0939 174.326C84.1755 175.117 83.5681 175.805 82.7931 175.805ZM67.6846 172.682C67.1192 173.243 66.7062 173.965 66.5145 174.776C66.3727 175.376 65.8598 175.805 65.2582 175.805H58.4864C57.7088 175.805 57.1039 175.113 57.1862 174.32C57.4518 171.761 58.3958 169.409 59.8296 167.459C60.6049 166.404 61.5222 165.468 62.554 164.678C63.1769 164.201 64.0661 164.385 64.4612 165.072L67.8969 171.041C68.2029 171.573 68.1169 172.252 67.6846 172.682Z"
//                 fill="#333333"
//               />
//             </g>
//           </g>
//           <g id="Ratioactive_16">
//             <rect
//               id="Rectangle 72_16"
//               x="189.06"
//               y="77.2958"
//               width="38.3074"
//               height="38.3074"
//               rx="19.1537"
//               fill="#333333"
//             />
//             <g id="Group_16">
//               <path
//                 id="Vector_31"
//                 d="M208.191 113.472C217.604 113.472 225.235 105.841 225.235 96.4273C225.235 87.014 217.604 79.3831 208.191 79.3831C198.777 79.3831 191.146 87.014 191.146 96.4273C191.146 105.841 198.777 113.472 208.191 113.472Z"
//                 fill="#FFB710"
//               />
//               <path
//                 id="Vector_32"
//                 d="M208.254 93.3476C209.813 93.3476 211.077 94.6448 211.077 96.2431C211.077 97.8415 209.813 99.1386 208.254 99.1386C206.693 99.1386 205.431 97.8415 205.431 96.2431C205.431 94.6448 206.693 93.3476 208.254 93.3476ZM210.906 101.174L214.229 107.212C214.609 107.904 214.325 108.785 213.614 109.1C211.971 109.828 210.158 110.231 208.254 110.231C206.303 110.231 204.45 109.809 202.774 109.046C202.065 108.724 201.788 107.84 202.176 107.151L205.556 101.147C205.856 100.613 206.474 100.354 207.05 100.529C207.441 100.647 207.847 100.707 208.254 100.707C208.656 100.707 209.044 100.65 209.412 100.543C209.992 100.374 210.61 100.635 210.906 101.174ZM220.407 96.3532H213.635C213.034 96.3532 212.521 95.9239 212.379 95.3242C212.187 94.5137 211.774 93.7917 211.209 93.2297C210.777 92.8001 210.691 92.1211 210.997 91.5894L214.433 85.6198C214.829 84.9308 215.72 84.7513 216.345 85.2302C217.696 86.2653 218.848 87.5495 219.741 89.017C220.796 90.7511 221.488 92.7406 221.708 94.8745C221.79 95.6652 221.182 96.3532 220.407 96.3532ZM205.299 93.2299C204.733 93.7918 204.32 94.5137 204.129 95.3243C203.987 95.924 203.474 96.3533 202.872 96.3533H196.101C195.323 96.3533 194.718 95.6613 194.8 94.8682C195.066 92.3091 196.01 89.9571 197.444 88.007C198.219 86.9526 199.136 86.0164 200.168 85.2265C200.791 84.7495 201.68 84.9337 202.075 85.6203L205.511 91.5896C205.817 92.1212 205.731 92.8002 205.299 93.2299Z"
//                 fill="#333333"
//               />
//             </g>
//           </g>
//           <g id="Ratioactive_17">
//             <rect
//               id="Rectangle 72_17"
//               x="97.3164"
//               y="236.199"
//               width="38.3074"
//               height="38.3074"
//               rx="19.1537"
//               fill="#333333"
//             />
//             <g id="Group_17">
//               <path
//                 id="Vector_33"
//                 d="M116.448 272.375C125.861 272.375 133.492 264.744 133.492 255.331C133.492 245.917 125.861 238.286 116.448 238.286C107.034 238.286 99.4033 245.917 99.4033 255.331C99.4033 264.744 107.034 272.375 116.448 272.375Z"
//                 fill="#FFB710"
//               />
//               <path
//                 id="Vector_34"
//                 d="M116.511 252.251C118.069 252.251 119.334 253.548 119.334 255.147C119.334 256.745 118.069 258.042 116.511 258.042C114.95 258.042 113.688 256.745 113.688 255.147C113.688 253.548 114.95 252.251 116.511 252.251ZM119.163 260.077L122.486 266.115C122.866 266.807 122.582 267.688 121.871 268.003C120.228 268.732 118.415 269.135 116.511 269.135C114.56 269.135 112.707 268.712 111.031 267.95C110.322 267.627 110.045 266.743 110.432 266.055L113.812 260.05C114.113 259.516 114.73 259.258 115.307 259.432C115.698 259.551 116.103 259.611 116.511 259.611C116.912 259.611 117.301 259.553 117.669 259.446C118.249 259.277 118.866 259.539 119.163 260.077ZM128.664 255.257H121.892C121.291 255.257 120.778 254.827 120.636 254.228C120.444 253.417 120.031 252.695 119.466 252.133C119.033 251.704 118.947 251.025 119.254 250.493L122.689 244.523C123.086 243.834 123.977 243.655 124.602 244.134C125.953 245.169 127.105 246.453 127.997 247.92C129.053 249.655 129.745 251.644 129.965 253.778C130.047 254.569 129.439 255.257 128.664 255.257ZM113.556 252.133C112.99 252.695 112.577 253.417 112.386 254.228C112.244 254.827 111.731 255.257 111.129 255.257H104.358C103.58 255.257 102.975 254.565 103.057 253.772C103.323 251.213 104.267 248.861 105.701 246.91C106.476 245.856 107.393 244.92 108.425 244.13C109.048 243.653 109.937 243.837 110.332 244.524L113.768 250.493C114.074 251.025 113.988 251.704 113.556 252.133Z"
//                 fill="#333333"
//               />
//             </g>
//           </g>
//           <g id="Ratioactive_18">
//             <rect
//               id="Rectangle 72_18"
//               x="97.3164"
//               y="77.2957"
//               width="38.3074"
//               height="38.3074"
//               rx="19.1537"
//               fill="#333333"
//             />
//             <g id="Group_18">
//               <path
//                 id="Vector_35"
//                 d="M116.448 113.471C125.861 113.471 133.492 105.84 133.492 96.4272C133.492 87.0139 125.861 79.3829 116.448 79.3829C107.034 79.3829 99.4033 87.0139 99.4033 96.4272C99.4033 105.84 107.034 113.471 116.448 113.471Z"
//                 fill="#FFB710"
//               />
//               <path
//                 id="Vector_36"
//                 d="M116.511 93.3475C118.069 93.3475 119.334 94.6446 119.334 96.243C119.334 97.8413 118.069 99.1385 116.511 99.1385C114.95 99.1385 113.688 97.8413 113.688 96.243C113.688 94.6446 114.95 93.3475 116.511 93.3475ZM119.163 101.174L122.486 107.212C122.866 107.904 122.582 108.785 121.871 109.1C120.228 109.828 118.415 110.231 116.511 110.231C114.56 110.231 112.707 109.808 111.031 109.046C110.322 108.724 110.045 107.84 110.432 107.151L113.812 101.146C114.113 100.613 114.73 100.354 115.307 100.529C115.698 100.647 116.103 100.707 116.511 100.707C116.912 100.707 117.301 100.65 117.669 100.543C118.249 100.374 118.866 100.635 119.163 101.174ZM128.664 96.353H121.892C121.291 96.353 120.778 95.9238 120.636 95.3241C120.444 94.5135 120.031 93.7916 119.466 93.2296C119.033 92.8 118.947 92.121 119.254 91.5893L122.689 85.6197C123.086 84.9306 123.977 84.7512 124.602 85.2301C125.953 86.2652 127.105 87.5494 127.997 89.0169C129.053 90.7509 129.745 92.7405 129.965 94.8744C130.047 95.6651 129.439 96.353 128.664 96.353ZM113.556 93.2297C112.99 93.7917 112.577 94.5136 112.386 95.3242C112.244 95.9239 111.731 96.3532 111.129 96.3532H104.358C103.58 96.3532 102.975 95.6612 103.057 94.8681C103.323 92.309 104.267 89.957 105.701 88.0068C106.476 86.9525 107.393 86.0163 108.425 85.2264C109.048 84.7494 109.937 84.9336 110.332 85.6202L113.768 91.5895C114.074 92.1211 113.988 92.8001 113.556 93.2297Z"
//                 fill="#333333"
//               />
//             </g>
//           </g>
//           <g id="Ratioactive_19">
//             <rect
//               id="Rectangle 72_19"
//               x="189.06"
//               y="236.199"
//               width="38.3074"
//               height="38.3074"
//               rx="19.1537"
//               fill="#333333"
//             />
//             <g id="Group_19">
//               <path
//                 id="Vector_37"
//                 d="M208.191 272.375C217.604 272.375 225.235 264.744 225.235 255.331C225.235 245.917 217.604 238.286 208.191 238.286C198.777 238.286 191.146 245.917 191.146 255.331C191.146 264.744 198.777 272.375 208.191 272.375Z"
//                 fill="#FFB710"
//               />
//               <path
//                 id="Vector_38"
//                 d="M208.254 252.251C209.813 252.251 211.077 253.548 211.077 255.147C211.077 256.745 209.813 258.042 208.254 258.042C206.693 258.042 205.431 256.745 205.431 255.147C205.431 253.548 206.693 252.251 208.254 252.251ZM210.906 260.077L214.229 266.115C214.609 266.807 214.325 267.688 213.614 268.003C211.971 268.732 210.158 269.135 208.254 269.135C206.303 269.135 204.45 268.712 202.774 267.95C202.065 267.627 201.788 266.743 202.176 266.055L205.556 260.05C205.856 259.516 206.474 259.258 207.05 259.432C207.441 259.551 207.847 259.611 208.254 259.611C208.656 259.611 209.044 259.553 209.412 259.446C209.992 259.277 210.61 259.539 210.906 260.077ZM220.407 255.257H213.635C213.034 255.257 212.521 254.827 212.379 254.228C212.187 253.417 211.774 252.695 211.209 252.133C210.777 251.704 210.691 251.025 210.997 250.493L214.433 244.523C214.829 243.834 215.72 243.655 216.345 244.134C217.696 245.169 218.848 246.453 219.741 247.92C220.796 249.655 221.488 251.644 221.708 253.778C221.79 254.569 221.182 255.257 220.407 255.257ZM205.299 252.133C204.733 252.695 204.32 253.417 204.129 254.228C203.987 254.827 203.474 255.257 202.872 255.257H196.101C195.323 255.257 194.718 254.565 194.8 253.772C195.066 251.213 196.01 248.861 197.444 246.91C198.219 245.856 199.136 244.92 200.168 244.13C200.791 243.653 201.68 243.837 202.075 244.524L205.511 250.493C205.817 251.025 205.731 251.704 205.299 252.133Z"
//                 fill="#333333"
//               />
//             </g>
//           </g>
//         </g>
//       </g>
//     </svg>
//   );
// };
