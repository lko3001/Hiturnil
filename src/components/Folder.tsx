import { motion } from "framer-motion";
export default function Folder({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  return (
    <button className="base-outline base-focus base-button-animation flex flex-row items-center px-3 py-2 text-sm @sm:gap-4 @sm:px-4 @sm:py-2 @sm:text-base base-button-colors">
      <p className="font-medium">{name}</p>
    </button>
  );
}
