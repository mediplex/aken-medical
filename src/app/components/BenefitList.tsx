import { CheckCircleIcon } from "@heroicons/react/24/outline";

export const BenefitsList = ({ benefits }: { benefits: string[] }) => {
  return (
    <div className="mx-auto mt-16 flex flex-wrap gap-0 divide-indigo-200 text-left">
      {benefits.map((b, i: number) => (
        <div key={i} className="flex items-center py-1 md:w-1/2 md:py-4">
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
  );
};
