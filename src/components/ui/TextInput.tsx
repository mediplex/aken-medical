import type { IconType } from 'react-icons';
import { FaCircleExclamation } from 'react-icons/fa6';

const TextInput: React.FC<{
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  name: string;
  placeholder: string;
  Icon: IconType;
  error?: { message: string } | null;
}> = ({ label, type, name, Icon, error, placeholder }) => {
  return (
    <>
      {type !== 'textarea' ? (
        <div className="flex flex-col items-start gap-1">
          <label
            htmlFor={name}
            className="text-teal-950 after:pointer-events-none after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            {label}
          </label>
          <div className="flex w-full items-center gap-1 rounded-full px-3 py-1 ring-1 ring-teal-950/50 has-[:focus]:ring-2 has-[:focus]:ring-teal-500">
            <Icon className="size-5 text-teal-950/30" />
            <input
              id={name}
              name={name}
              placeholder={placeholder}
              type={type}
              className="flex-1 border-0 text-teal-950 placeholder:text-teal-950/50 focus:ring-0"
            />
            {/* {!!error && ( */}
            {<FaCircleExclamation className="size-6 text-red-500" />}
          </div>
          {!!error && (
            <p id="name-error" className="mt-2 text-sm text-red-500">
              {error?.message}
            </p>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-start">
          <label
            htmlFor="msg"
            className="block text-sm font-medium leading-6 text-teal-950"
          >
            {label}
          </label>
          <div className="relative mt-2 w-full rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex pl-3 pt-2">
              <Icon
                aria-hidden="true"
                className="size-6 fill-none text-teal-950/30"
              />
            </div>
            <textarea
              name={name}
              id={name}
              placeholder="Tell us how we can help you"
              rows={4}
              className="block w-full rounded-xl border-0 px-10 py-1.5 text-teal-950 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
            />
            {!!error && (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex pr-3 pt-2">
                <FaCircleExclamation
                  aria-hidden="true"
                  className="size-6 text-red-500"
                />
              </div>
            )}
          </div>
          {!!error && (
            <p id="msg-error" className="mt-2 text-sm text-red-600">
              {error.message}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export { TextInput };
