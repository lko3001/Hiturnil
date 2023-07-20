"use client";
import SettingValue from "@/components/SettingValue";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiChevronDown, FiMoon, FiSettings, FiSun } from "react-icons/fi";

export default function Settings() {
  const { setTheme, theme } = useTheme();
  const [selectedOption, setSelectedOption] = useState("Loading...");
  const [opentionsOpen, setOpentionsOpen] = useState(false);
  const session = useSession();

  function changeTheme(value: string) {
    setTheme(value);
    setOpentionsOpen(false);
    setSelectedOption(value);
  }

  useEffect(
    () => setSelectedOption(theme ? theme : "Ok There's Something Wrong Here"),
    []
  );

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="mb-6">
        <h1 className="mb-4 text-2xl font-semibold">Profile</h1>
        <div className="flex flex-col gap-2">
          <SettingValue name="name" value={session.data?.user?.name} />
          <SettingValue name="email" value={session.data?.user?.email} />
          <SettingValue name="image" value={session.data?.user?.image} />
          <SettingValue name="expires" value={session.data?.expires} />
          <SettingValue name="Status" value={session.status} />
        </div>
      </div>
      <div className="mb-6">
        <h1 className="mb-4 text-2xl font-semibold">Color Mode</h1>
        <div className="w-max">
          <button
            onClick={() => {
              setOpentionsOpen((p) => !p);
            }}
            className="base-outline base-button-colors base-button-animation base-focus flex w-full items-center justify-center gap-4 px-6 py-2 text-lg capitalize"
          >
            <FiChevronDown />
            {selectedOption}
          </button>
          {opentionsOpen && (
            <div>
              <button
                onClick={() => changeTheme("dark")}
                className="base-outline base-button-colors base-button-animation base-focus mt-2 flex w-full items-center justify-center gap-2 px-3 py-2"
              >
                <FiMoon />
                Dark
              </button>
              <button
                onClick={() => changeTheme("light")}
                className="base-outline base-button-colors base-button-animation base-focus mt-2 flex w-full items-center justify-center gap-2 px-3 py-2"
              >
                <FiSun />
                Light
              </button>
              <button
                onClick={() => changeTheme("system")}
                className="base-outline base-button-colors base-button-animation base-focus mt-2 flex w-full items-center justify-center gap-2 px-3 py-2"
              >
                <FiSettings />
                System
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="mb-6">
        <h1 className="mb-4 text-2xl font-semibold">Danger Zone</h1>
        <button
          className="base-button-animation base-outline bg-hiturnil px-4 py-2 font-semibold uppercase"
          onClick={() => signOut()}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
