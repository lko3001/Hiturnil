interface Props {
  name: string;
  value: string | null | undefined;
}

export default function SettingValue({ name, value }: Props) {
  return (
    <div className="flex flex-row items-center gap-3">
      <h2 className="text-lg font-semibold capitalize">{name}:</h2>
      <p
        className={`base-outline font-lg rounded px-2 py-1 ${
          !value && "animate-pulse"
        }`}
      >
        {value || "Loading..."}
      </p>
    </div>
  );
}
