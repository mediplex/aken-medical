import type { IconType } from 'react-icons';
import { FaCheck } from 'react-icons/fa6';

const IconCheckbox: React.FC<{
  label: string;
  name: string;
  Icon: IconType;
}> = ({ label, name, Icon }) => {
  return (
    <label
      htmlFor={name}
      className="flex h-16 items-center justify-between gap-4 rounded-2xl p-3 text-teal-950 ring-1 ring-teal-950/50 has-[:checked]:bg-teal-500/10 has-[:checked]:ring-teal-500"
    >
      <input type="checkbox" name={name} id={name} className="peer hidden" />
      <div className="flex gap-2">
        <Icon className="size-6" />
        <p className="">{label}</p>
      </div>
      <FaCheck className="hidden size-6 peer-checked:block peer-checked:text-teal-500" />
    </label>
  );
};
export { IconCheckbox };
