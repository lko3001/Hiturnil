"use client";
import ProviderButton from "@/components/ProviderButton";
import { FiGithub } from "react-icons/fi";

export default function Signin({
  searchParams,
}: {
  searchParams: {
    callbackUrl: string | undefined;
  };
}) {
  return (
    <div className="base-button-colors base-outline w-full max-w-sm rounded-xl p-6 shadow">
      <h1 className="text-2xl font-semibold">Sign in</h1>
      <p className="mb-4 text-sm text-snow-400 dark:text-space-200">
        Please, sign in with your favourite provider
      </p>
      <ProviderButton
        provider={"github"}
        Icon={FiGithub}
        name="GitHub"
        callback={searchParams.callbackUrl}
      />
    </div>
  );
}
