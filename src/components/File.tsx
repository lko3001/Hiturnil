import { FiLink } from "react-icons/fi";

export default function File() {
  return (
    <div className="flex flex-col items-center gap-3">
      <button className="base-button-animation base-outline base-button-animation base-focus grid aspect-[4/5] w-full place-items-center bg-snow-100 dark:bg-space-400">
        <FiLink className="text-3xl text-snow-400 dark:text-space-200" />
      </button>
      <div className="-mt-1 text-center">
        <p className="text-base font-medium hover:underline @sm:text-lg">
          Ciao paolo
        </p>
        <p className="hidden text-xs text-snow-400 @sm:block dark:text-space-200">
          19/19/23 19:38
        </p>
      </div>
    </div>
  );
}
