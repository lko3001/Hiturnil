"use client";
import {
  ReactNode,
  useRef,
  RefObject,
  createContext,
  useContext,
  useState,
} from "react";

interface Props {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
  openCreate: () => void;
  closeCreate: () => void;
  createDialog: RefObject<HTMLDialogElement>;
}

const GlobalContext = createContext({} as Props);

export function useGlobalProvider() {
  return useContext(GlobalContext);
}

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const createDialog = useRef<HTMLDialogElement | null>(null);

  function toggleSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }
  async function openCreate() {
    createDialog.current?.showModal();
    const txtArea = createDialog.current?.querySelector("textarea");
    txtArea!.value = await navigator.clipboard.readText();
  }
  function closeCreate() {
    createDialog.current?.close();
  }

  return (
    <GlobalContext.Provider
      value={{
        toggleSidebar,
        isSidebarOpen,
        closeCreate,
        openCreate,
        createDialog,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
