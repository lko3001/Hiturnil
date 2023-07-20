"use client";
import { FiPlus, FiMenu } from "react-icons/fi";
import { useGlobalProvider } from "@/components/GlobalContext";
import { useTheme } from "next-themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { toggleSidebar, openCreate } = useGlobalProvider();
  const { data: session } = useSession();
  const pathname = usePathname();
  const user = session?.user;

  return (
    <>
      <nav className="flex flex-row items-center justify-between py-4">
        {pathname === "/" ? (
          <div className="flex flex-row items-center gap-4">
            <button
              className="base-focus icon-button-colors hidden h-10 w-10 place-items-center rounded-full transition-colors lg:grid"
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
        ) : (
          <Link className="uppercase hover:underline" href={"/"}>
            Home
          </Link>
        )}
        <Link
          href={"/settings"}
          className="base-focus base-button-animation !rounded-full"
        >
          <img
            src={user?.image || ""}
            className="base-outline h-10 w-10 rounded-full"
          />
        </Link>
      </nav>
    </>
  );
}
