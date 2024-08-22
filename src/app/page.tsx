import { ContactForm, Countdown } from "@/components";

const data = {
  tag: "Revolution in Cancer Treatment",
  title: "Nanoparticle-based Radiopharmaceutical",
  content:
    "We develop the world first universal nanoparticle platform that embeds radioactive materials to deliver targeted radiation to cancer cells.",
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

export default function Home() {
  return (
    <FlexWrapperWithGradientBG>
        <ContactForm />
        {/* <Countdown/> */}
    </FlexWrapperWithGradientBG>
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


