import Navbar from "@/components/Navbar";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function Root({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <main className="h-0 min-h-screen bg-snow-200 dark:bg-space-500 dark:text-white">
      {pathname !== "/signin" ? (
        <div className="mx-auto flex h-full flex-col px-5 py-0">
          <Navbar />
          {children}
        </div>
      ) : (
        <div className="flex h-full items-center justify-center">
          {children}
        </div>
      )}
    </main>
  );
}
