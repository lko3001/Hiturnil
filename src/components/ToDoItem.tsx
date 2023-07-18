import { RxDragHandleDots2 } from "react-icons/rx";
import { FiX } from "react-icons/fi";
export default function ToDoItem() {
  return (
    <div className="base-outline base-button-animation base-button-colors group/todo flex flex-row items-center justify-between px-2 py-4">
      <div className="mr-4 flex w-full flex-row items-center">
        <div className="group/handle flex cursor-pointer self-stretch">
          <RxDragHandleDots2 className="mr-2 self-center text-2xl text-snow-400 transition-colors group-hover/handle:text-black dark:text-space-200 group-hover/handle:dark:text-white" />
        </div>
        <p className="break-after-all">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsa
          velit, illum aperiam nulla fugit vitae voluptatum repellendus
          deserunt. Aliquam.
        </p>
      </div>
      <FiX
        className="mr-2 w-fit cursor-pointer rounded-xl text-2xl text-snow-400 opacity-0 transition-all hover:text-hiturnil focus-visible:border-none focus-visible:text-hiturnil focus-visible:opacity-100 focus-visible:outline-none group-hover/todo:opacity-100 dark:text-space-200 dark:hover:text-hiturnil dark:focus-visible:text-hiturnil"
        tabIndex={0}
      />
    </div>
  );
}
