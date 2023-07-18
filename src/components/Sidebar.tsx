"use client";
import ToDoItem from "@/components/ToDoItem";
import { FiSend } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useGlobalProvider } from "./GlobalContext";
import { useEffect, useRef } from "react";

export default function Sidebar() {
  const { isSidebarOpen } = useGlobalProvider();
  const todoInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isSidebarOpen) {
      setTimeout(() => {
        todoInput.current?.focus();
        console.log("yes", todoInput.current, todoInput.current?.focus);
      }, 5);
    }
  }, [isSidebarOpen]);

  return (
    <AnimatePresence>
      <motion.div
        className={`hidden h-full max-h-full ${
          isSidebarOpen
            ? "w-[600px] p-1 opacity-100"
            : "invisible w-0 p-0 opacity-0"
        } transition-[width, opacity, padding] overflow-hidden duration-200 lg:block`}
      >
        <form className="mb-4 flex flex-row items-center gap-2">
          <input
            type="text"
            placeholder="Murderes..."
            className="base-outline focus:base-button-colors grow rounded-xl bg-transparent px-4 py-2 text-lg transition-colors placeholder:text-snow-400 dark:placeholder:text-space-200"
            // autoFocus={true}
            ref={todoInput}
          />
          <button className="base-focus base-outline grid h-11 w-11 place-items-center rounded-xl transition-colors hover:bg-snow-500 hover:text-white focus-visible:bg-snow-500 focus-visible:text-white dark:hover:bg-space-100 dark:hover:text-black dark:focus-visible:bg-space-100 dark:focus-visible:text-black">
            <FiSend className="-ml-1 rotate-45 text-lg" />
          </button>
        </form>
        <aside className="no-scrollbar flex h-full max-h-full flex-col gap-3 overflow-y-auto rounded-xl p-1 pb-32">
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
        </aside>
      </motion.div>
    </AnimatePresence>
  );
}
