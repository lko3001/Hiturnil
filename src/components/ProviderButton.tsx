"use client";
import { signIn } from "next-auth/react";
import { IconType } from "react-icons/lib";

export default function ProviderButton({
  provider,
  Icon,
  name,
  callback,
}: {
  provider: string;
  Icon: IconType;
  name: string;
  callback: string | undefined;
}) {
  return (
    <button
      className="transition-[scale, color, backgroundColor] flex w-full flex-row items-center justify-center rounded bg-snow-200 px-3 py-2 font-medium outline outline-[1px] outline-snow-300 duration-200 hover:bg-snow-300 active:scale-95 dark:bg-space-300 dark:outline-space-200/50 dark:hover:bg-space-200/50"
      onClick={() =>
        signIn(provider, { callbackUrl: callback ? callback : "/" })
      }
    >
      <Icon className="mr-2 text-lg" />
      {name}
    </button>
  );
}
