"use client";
import File from "@/components/File";
import Folder from "@/components/Folder";
import {
  FormEvent,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { useGlobalProvider } from "@/components/GlobalContext";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const [foldersClosed, setFoldersClosed] = useState(true);
  const folders = [
    {
      image: "https://unsplash.it/400/400",
      folderName: "Vibrant Sunset",
    },
    {
      image: "https://unsplash.it/600/600",
      folderName: "Majestic Mountains",
    },
    {
      image: "https://unsplash.it/400/400",
      folderName: "Vibrant Sunset",
    },
    {
      image: "https://unsplash.it/600/600",
      folderName: "Majestic Mountains",
    },
    {
      image: "https://unsplash.it/400/400",
      folderName: "Vibrant Sunset",
    },
    {
      image: "https://unsplash.it/600/600",
      folderName: "Majestic Mountains",
    },
    {
      image: "https://unsplash.it/200/200",
      folderName: "Beautiful Ocean",
    },
    {
      image: "https://unsplash.it/800/800",
      folderName: "Serene Landscape",
    },
    {
      image: "https://unsplash.it/500/500",
      folderName: "Stunning Nature",
    },
    {
      image: "https://unsplash.it/700/700",
      folderName: "Vibrant Nature",
    },
    {
      image: "https://unsplash.it/300/300",
      folderName: "Majestic Sunset",
    },
    {
      image: "https://unsplash.it/900/900",
      folderName: "Stunning Landscape",
    },
    {
      image: "https://unsplash.it/600/600",
      folderName: "Beautiful Mountains",
    },
    {
      image: "https://unsplash.it/400/400",
      folderName: "Vibrant Ocean",
    },
  ];
  const { createDialog, closeCreate, isSidebarOpen } = useGlobalProvider();
  const textareaNote = useRef<HTMLTextAreaElement | null>(null);

  async function handleCreateNote(e: FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/create-file", {
      method: "POST",
      body: JSON.stringify({ content: textareaNote.current?.value }),
    });
    const data = await res.json();
    console.log(data);
  }

  return (
    <div
      className={`relative flex flex-row ${
        isSidebarOpen ? "gap-4" : "gap-0"
      } overflow-hidden transition-[gap] duration-200`}
    >
      <Sidebar />
      <div className="no-scrollbar h-full w-full overflow-y-auto px-1 @container">
        <dialog
          ref={createDialog}
          className="rounded-xl backdrop:bg-snow-500/50 backdrop:backdrop-blur dark:backdrop:bg-space-100/10"
          onClick={closeCreate}
        >
          <div
            className="flex flex-col gap-3 bg-snow-200 p-6 text-black dark:bg-space-500 dark:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-medium">Create your note</h2>
            <form className="contents" onSubmit={(e) => handleCreateNote(e)}>
              <textarea
                rows={5}
                ref={textareaNote}
                placeholder="https://unsplash.it/ajw...."
                className="base-outline base-button-colors min-w-[320px] rounded-xl px-4 py-2"
              />
              <button className="base-button-animation base-focus gap-2 bg-snow-500 px-4 py-2 font-medium text-white dark:bg-space-100 dark:text-black">
                Create
              </button>
            </form>
          </div>
        </dialog>
        <div key="Folders">
          <div className="mb-4 flex flex-row items-center gap-4">
            <button
              className={`base-focus icon-button-colors grid h-10 w-10 place-items-center rounded-full transition-all md:hidden ${
                foldersClosed && "rotate-180"
              }`}
              onClick={() => setFoldersClosed((el) => !el)}
            >
              <FiChevronDown />
            </button>
            <h1 className="text-2xl font-semibold">Folders</h1>
          </div>
          <div
            className={`mb-10 flex flex-row flex-wrap items-center gap-2 @sm:gap-3 ${
              foldersClosed && "hidden @md:flex"
            }`}
          >
            {folders.map((el, index) => (
              <Folder image={el.image} name={el.folderName} key={index} />
            ))}
          </div>
        </div>
        <motion.div layout className="mb-12 bg-snow-200 dark:bg-space-500">
          <h1 className="mb-4 text-2xl font-semibold">Files</h1>
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 @md:grid-cols-3 @lg:grid-cols-4 @xl:grid-cols-5">
            <File />
            <File />
            <File />
            <File />
            <File />
            <File />
            <File />
            <File />
            <File />
            <File />
            <File />
            <File />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
