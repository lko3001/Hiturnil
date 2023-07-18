import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useGlobalProvider } from "./GlobalContext";

export default function Root({ children }: { children: ReactNode }) {
  const { isSidebarOpen } = useGlobalProvider();
  return (
    <main className="h-0 min-h-screen bg-snow-200 dark:bg-space-500 dark:text-white">
      <div className="mx-auto flex h-full flex-col px-5 py-0">
        <Navbar />
        <div
          className={`relative flex flex-row ${
            isSidebarOpen ? "gap-4" : "gap-0"
          } overflow-hidden transition-[gap] duration-200`}
        >
          <Sidebar />
          <motion.div className="no-scrollbar h-full w-full overflow-y-auto px-1 @container">
            {children}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
