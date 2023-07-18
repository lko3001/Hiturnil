"use client";
import { FiPlus, FiMenu } from "react-icons/fi";
import { useGlobalProvider } from "@/components/GlobalContext";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { toggleSidebar, openCreate } = useGlobalProvider();
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <nav className="flex flex-row items-center justify-between py-4">
        <div className="flex flex-row items-center gap-4">
          <button
            className="base-focus icon-button-colors grid h-10 w-10 place-items-center rounded-full transition-colors"
            onClick={toggleSidebar}
          >
            <FiMenu className="text-xl" />
          </button>
          <button
            onClick={openCreate}
            className="base-button-animation base-focus flex flex-row items-center gap-2 bg-snow-500 px-4 py-2 font-medium text-white dark:bg-space-100 dark:text-black"
          >
            <FiPlus />
            Create
          </button>
        </div>
        {/* DAKR */}
        <button
          className="base-focus icon-button-colors grid h-10 w-10 place-items-center rounded-full transition-colors"
          onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        >
          <FiMenu className="text-xl" />
        </button>
        {/* DAKR */}
        <img
          src="https://unsplash.it/500/500"
          className="base-outline h-10 w-10 rounded-full"
        />
      </nav>
    </>
  );
}
